import React from 'react';
import { useNavigate } from 'react-router-dom';
import cx from 'classnames';
import KeychainCard from '../Users/KeychainCard';
import EmptyState from '../EmptyState';

type Props = {
  hasNoOwnKeychains: boolean;
  selectableOwnKeychains: Keychain[];
  selectablePublicKeychains: Keychain[];
  onSelect(keychain: Keychain): unknown;
  selected: Keychain | null;
  includePublic?: boolean;
};

const KeychainPicker: React.FC<Props> = ({
  hasNoOwnKeychains,
  selectableOwnKeychains,
  selected,
  selectablePublicKeychains,
  onSelect,
  includePublic = true,
}) => {
  const navigate = useNavigate();
  return (
    <div className="sm:bg-gray-50 xs:min-w-[450px] rounded-xl sm:p-4">
      {selectableOwnKeychains.length !== 0 && (
        <>
          <h2 className="text-lg font-bold text-gray-600 mb-3">Your keychains:</h2>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            {selectableOwnKeychains.map((keychain) => (
              <KeychainCard
                key={keychain.id}
                name={keychain.name}
                numKeys={keychain.numKeys}
                isPublic={keychain.isPublic}
                onSelect={() => onSelect(keychain)}
                selected={selected?.id === keychain.id}
                selectable
                small
              />
            ))}
          </div>
        </>
      )}
      {hasNoOwnKeychains && (
        <EmptyState
          heading={`No personal keychains`}
          secondaryText={`Select a public keychain or create your own.`}
          icon={`key`}
          buttonText={`Create keychains`}
          onButtonClick={() => navigate(`/keychains`)}
        />
      )}
      {includePublic && (
        <>
          <h2
            className={cx(
              `text-lg font-bold text-gray-600 mb-3`,
              selectableOwnKeychains.length > 0 && `mt-8`,
            )}
          >
            Public keychains:
          </h2>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            {selectablePublicKeychains.map((keychain) => (
              <KeychainCard
                key={keychain.id}
                name={keychain.name}
                numKeys={keychain.numKeys}
                isPublic={keychain.isPublic}
                selectable
                onSelect={() => onSelect(keychain)}
                selected={selected?.id === keychain.id}
                small
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default KeychainPicker;
