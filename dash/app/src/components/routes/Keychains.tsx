import React, { useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import { Loading, ListKeychains } from '@dash/components';
import { useDispatch, useSelector } from '../../redux/hooks';
import { original } from '../../redux/helpers';
import ApiErrorMessage from '../ApiErrorMessage';
import * as typesafe from '../../lib/typesafe';
import {
  keychainEntityDeleteCanceled,
  createKeychainInitiated,
  deleteKeychain,
  fetchAdminKeychains,
  keychainEntityDeleteStarted,
} from '../../redux/slice-keychains';

const Keychains: React.FC = () => {
  const dispatch = useDispatch();
  const adminId = useSelector((state) => state.auth.admin?.id ?? ``);
  const request = useSelector((state) => state.keychains.listAdminKeychainsRequest);
  const deleteId = useSelector((state) => state.keychains.deleting.keychain);
  const keychains = useSelector((state) =>
    typesafe
      .objectValues(state.keychains.keychains)
      // in case they started making a keychain and then navigated back here
      .filter((keychain) => !keychain.isNew),
  );
  const keyRecords = useSelector((state) =>
    typesafe.objectValues(state.keychains.keyRecords).map(original),
  );

  const reqState = request.state;
  useEffect(() => {
    reqState === `idle` && dispatch(fetchAdminKeychains());
  }, [dispatch, reqState]);

  if (request.state === `ongoing` || request.state === `idle`) {
    return <Loading />;
  }

  if (request.state === `failed`) {
    return <ApiErrorMessage error={request.error} />;
  }

  return (
    <ListKeychains
      keychains={keychains.map(({ original: keychain }) => ({
        ...keychain,
        description: keychain.description || undefined,
        numKeys: keyRecords.filter((key) => key.keychainId === keychain.id).length,
      }))}
      remove={{
        id: deleteId,
        start: (id) => dispatch(keychainEntityDeleteStarted({ type: `keychain`, id })),
        confirm: () => deleteId && dispatch(deleteKeychain(deleteId)),
        cancel: () => dispatch(keychainEntityDeleteCanceled(`keychain`)),
      }}
      onCreateNew={() => dispatch(createKeychainInitiated({ id: uuid(), adminId }))}
    />
  );
};

export default Keychains;