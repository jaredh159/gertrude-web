import React from 'react';
import type { Keychain } from '@dash/keys';
import { RequestModal } from '../Modal';
import KeychainPicker from '../Keychains/KeychainPicker';

interface Props {
  request?: RequestState<{ own: Keychain[]; public: Keychain[] }>;
  selected?: Keychain;
  onDismiss(): unknown;
  onConfirm(): unknown;
  onSelect(keychain: Keychain): unknown;
  existingKeychains: Keychain[];
}

const AddKeychainModal: React.FC<Props> = ({
  onDismiss,
  onConfirm,
  request,
  onSelect,
  selected,
  existingKeychains,
}) => (
  <RequestModal
    request={request}
    successType="container"
    successTitle="Select a keychain"
    icon="key"
    primaryButton={{
      label: `Add keychain`,
      action: onConfirm,
      disabled: selected === undefined,
    }}
    onDismiss={onDismiss}
    withPayload={(payload) => (
      <KeychainPicker
        hasNoOwnKeychains={payload.own.length === 0}
        selectablePublicKeychains={payload.public.filter(
          (keychain) => !existingKeychains.some((kc) => kc.id === keychain.id),
        )}
        selectableOwnKeychains={payload.own.filter(
          (keychain) => !existingKeychains.some((kc) => kc.id === keychain.id),
        )}
        onSelect={onSelect}
        selectedId={selected?.id}
      />
    )}
  />
);

export default AddKeychainModal;
