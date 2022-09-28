import React from 'react';
import SelectMenu from '../../../SelectMenu';
import TextInput from '../../../TextInput';
import Toggle from '../../../Toggle';
import KeyCreationStep from './KeyCreationStep';
import SubdomainDemo from './SubdomainDemo';
import GradientIcon from './GradientIcon';
import UserInputText from './UserInputText';
import * as EditKey from '../../../lib/keys/edit';

interface Props {
  keyType: 'app' | 'website';
  mode: 'edit' | 'create';
  activeStep: EditKey.Step;
  address: string;
  addressType: 'strict' | 'standard' | 'ip' | 'domainRegex';
  showAdvancedAddressOptions: boolean;
  update(event: EditKey.Event): unknown;
}

const AddressStep: React.FC<Props> = ({
  mode,
  keyType,
  activeStep,
  address,
  addressType,
  showAdvancedAddressOptions,
  update,
}) => (
  <KeyCreationStep
    mode={mode}
    update={update}
    lookaheadTitle="Website address"
    activeTitle="Select website address:"
    title={
      <h2 className="font-medium text-gray-900 text-lg">
        <GradientIcon icon="unlock" className="mr-2" />
        {keyType === `website` ? `Unlocking ` : `Address `}
        {address.trim() !== `` && <UserInputText>{address}</UserInputText>}
      </h2>
    }
    ownStep={
      keyType === `website`
        ? EditKey.Step.WebsiteKey_SetAddress
        : EditKey.Step.AppKey_Advanced_SetAddress
    }
    activeStep={activeStep}
    canAdvance={address.trim() !== ``}
  >
    <TextInput
      type="text"
      label="Web address:"
      value={address}
      setValue={(updated) => update({ type: `setAddress`, to: updated })}
      prefix="https://"
      className="mb-7"
    />
    <div className="bg-gray-50 px-2 py-4 rounded-lg">
      <div className="flex justify-start mr-2 items-center ml-2 mb-2">
        <label className="mr-2 text-gray-600">Advanced:</label>
        <Toggle
          enabled={showAdvancedAddressOptions}
          small
          setEnabled={(enabled) =>
            update({ type: `setShowAdvancedAddressOptions`, to: enabled })
          }
        />
      </div>
      <div className="flex items-center justify-end">
        <label className="mr-2 text-gray-600 font-medium">Address type:</label>
        <SelectMenu<EditKey.AddressType>
          options={addressTypeOptions(showAdvancedAddressOptions)}
          selectedOption={addressType}
          setSelected={(type) => update({ type: `setAddressType`, to: type })}
          deemphasized
        />
      </div>
      <SubdomainDemo address={address} addressType={addressType} />
    </div>
  </KeyCreationStep>
);

export default AddressStep;

// helpers

function addressTypeOptions(
  showAdvanced: boolean,
): Array<{ value: EditKey.AddressType; display: string }> {
  const opts: ReturnType<typeof addressTypeOptions> = [
    { value: `standard`, display: `Standard` },
    { value: `strict`, display: `Strict` },
    { value: `ip`, display: `IP address` },
    { value: `domainRegex`, display: `Regular expression` },
  ];

  if (showAdvanced) {
    opts.push({ value: `ip`, display: `IP address` });
    opts.push({ value: `domainRegex`, display: `Regular expression` });
  }

  return opts;
}