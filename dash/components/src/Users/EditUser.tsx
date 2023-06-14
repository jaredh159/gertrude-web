import React from 'react';
import cx from 'classnames';
import { inflect } from '@shared/string';
import { TextInput, Button, Toggle } from '@shared/components';
import type { Subcomponents, ConfirmableEntityAction, RequestState } from '@dash/types';
import type { KeychainSummary as Keychain } from '@dash/types';
import KeychainCard from '../Keychains/KeychainCard';
import { ConfirmDeleteEntity } from '../Modal';
import PageHeading from '../PageHeading';
import AddKeychainModal from './AddKeychainModal';
import ConnectDeviceModal from './ConnectDeviceModal';
import UserDevice from './UserDevice';

interface Props {
  isNew: boolean;
  name: string;
  setName(name: string): unknown;
  keyloggingEnabled: boolean;
  setKeyloggingEnabled(enabled: boolean): unknown;
  screenshotsEnabled: boolean;
  setScreenshotsEnabled(enabled: boolean): unknown;
  screenshotsResolution: number;
  setScreenshotsResolution(resolution: number): unknown;
  screenshotsFrequency: number;
  setScreenshotsFrequency(frequency: number): unknown;
  removeKeychain(id: UUID): unknown;
  keychains: Keychain[];
  devices: Subcomponents<typeof UserDevice>;
  deleteUser: ConfirmableEntityAction<void>;
  startAddDevice(): unknown;
  dismissAddDevice(): unknown;
  deleteDevice: ConfirmableEntityAction;
  addDeviceRequest?: RequestState<{ code: number }>;
  saveButtonDisabled: boolean;
  onSave(): unknown;
  onAddKeychainClicked(): unknown;
  onSelectKeychainToAdd(keychain: Keychain): unknown;
  onConfirmAddKeychain(): unknown;
  onDismissAddKeychain(): unknown;
  selectingKeychain?: Keychain | null;
  fetchSelectableKeychainsRequest?: RequestState<{ own: Keychain[]; public: Keychain[] }>;
  id: string;
}

const EditUser: React.FC<Props> = ({
  isNew,
  name,
  id,
  setName,
  keyloggingEnabled,
  setKeyloggingEnabled,
  screenshotsEnabled,
  setScreenshotsEnabled,
  screenshotsResolution,
  setScreenshotsResolution,
  screenshotsFrequency,
  setScreenshotsFrequency,
  removeKeychain,
  keychains,
  devices,
  deleteDevice,
  deleteUser,
  saveButtonDisabled,
  onSave,
  dismissAddDevice,
  addDeviceRequest,
  startAddDevice,
  onAddKeychainClicked,
  onSelectKeychainToAdd,
  onDismissAddKeychain,
  fetchSelectableKeychainsRequest,
  selectingKeychain,
  onConfirmAddKeychain,
}) => (
  <div className="relative max-w-3xl">
    <ConnectDeviceModal request={addDeviceRequest} dismissAddDevice={dismissAddDevice} />
    <AddKeychainModal
      request={fetchSelectableKeychainsRequest}
      onSelect={onSelectKeychainToAdd}
      onDismiss={onDismissAddKeychain}
      onConfirm={onConfirmAddKeychain}
      selected={selectingKeychain ?? undefined}
      existingKeychains={keychains}
      userName={name}
      userId={id}
    />
    <ConfirmDeleteEntity type="device" action={deleteDevice} />
    <ConfirmDeleteEntity type="user" action={deleteUser} />
    <PageHeading icon={isNew ? `user-plus` : `pen`}>
      {isNew ? `Create` : `Edit`} user
    </PageHeading>
    <div className="mt-8">
      <TextInput
        type="text"
        label="Name:"
        testId="user-name"
        value={name}
        setValue={setName}
        className="max-w-xl"
      />
      <h2 className="mt-5 text-lg font-bold text-slate-700">
        {devices.length} {inflect(`device`, devices.length)}:
      </h2>
      <div className="flex flex-col">
        {devices.map((device) => (
          <div key={device.id} className="flex items-center mt-3">
            <UserDevice
              model={device.model}
              status={device.status}
              icon={device.icon}
              className="flex-grow mr-3"
            />
            <button
              onClick={() => deleteDevice.start(device.id)}
              className="transition duration-100 flex justify-center items-center w-10 h-10 rounded-full hover:bg-slate-100 cursor-pointer text-slate-500 hover:text-red-500"
            >
              <i className="fa fa-trash" />
            </button>
          </div>
        ))}
        <button
          onClick={startAddDevice}
          className="mt-5 text-violet-700 font-medium px-7 py-2 rounded-lg hover:bg-violet-100 self-end transition duration-100"
        >
          <i className="fa fa-plus mr-2" />
          Add device
        </button>
      </div>
      <div className="mt-4">
        <h2 className="text-lg font-bold text-slate-700">Monitoring</h2>
        <div className="flex justify-between items-center bg-slate-100 my-3 p-4 sm:p-6 rounded-xl">
          <div className="mr-3">
            <h3 className="font-medium text-slate-700">Enable keylogging</h3>
            <p className="text-slate-500 text-sm">
              Sends reports of all keystrokes to your review
            </p>
          </div>
          <Toggle enabled={keyloggingEnabled} setEnabled={setKeyloggingEnabled} />
        </div>
        <div
          className={`bg-slate-100 my-3 p-4 sm:p-6 rounded-xl overflow-hidden relative [transition:150ms]`}
        >
          <div className="flex justify-between items-center">
            <div className="mr-3">
              <h3 className="font-medium text-slate-700">Enable screenshots</h3>
              <p className="text-slate-500 text-sm">
                Periodically take a screenshot and upload for your review
              </p>
            </div>
            <Toggle enabled={screenshotsEnabled} setEnabled={setScreenshotsEnabled} />
          </div>
          <div
            className={cx(
              `flex flex-col space-y-3 md:flex-row md:space-x-3 md:space-y-0 mt-5 transition duration-100`,
              screenshotsEnabled ? `opacity-100` : `opacity-0 hidden`,
            )}
          >
            <TextInput
              type="positiveInteger"
              label="Resolution"
              value={String(screenshotsResolution)}
              setValue={(num) => setScreenshotsResolution(Number(num))}
              unit="pixels"
            />
            <TextInput
              type="positiveInteger"
              label="Frequency"
              value={String(screenshotsFrequency)}
              setValue={(num) => setScreenshotsFrequency(Number(num))}
              unit="seconds"
            />
          </div>
        </div>
      </div>
      <div className="mt-12">
        <h2 className="text-lg font-bold text-slate-700 mb-2">Keychains</h2>
        <div className="py-3 flex flex-col space-y-4">
          {keychains.map((keychain) => (
            <KeychainCard
              mode="list"
              key={keychain.id}
              name={keychain.name}
              description={keychain.description}
              numKeys={keychain.numKeys}
              isPublic={keychain.isPublic}
              onRemove={() => removeKeychain(keychain.id)}
              removeText="Remove"
            />
          ))}
          <button
            className="mt-5 text-violet-700 font-medium px-7 py-2 rounded-lg hover:bg-violet-100 self-end transition duration-100"
            onClick={onAddKeychainClicked}
          >
            <i className="fa fa-plus mr-2" />
            Add keychain
          </button>
        </div>
        <div className="flex mt-5 justify-end border-t-2 pt-8 space-x-5">
          {!isNew && (
            <Button type="button" onClick={deleteUser.start} color="warning">
              Delete user
            </Button>
          )}
          <Button
            className="ScrollTop"
            type="button"
            disabled={saveButtonDisabled}
            onClick={onSave}
            color="primary"
          >
            Save user
          </Button>
        </div>
      </div>
    </div>
  </div>
);

export default EditUser;
