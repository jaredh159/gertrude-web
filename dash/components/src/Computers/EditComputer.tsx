import React from 'react';
import cx from 'classnames';
import { Button, SelectMenu, TextInput } from '@shared/components';
import { Link } from 'react-router-dom';
import type { ReleaseChannel } from '@dash/types';
import PageHeading from '../PageHeading';
import PillBadge from '../PillBadge';

interface Props {
  name: string;
  setName(name: string): unknown;
  releaseChannel: ReleaseChannel;
  setReleaseChannel(channel: ReleaseChannel): unknown;
  modelTitle: string;
  serialNumber: string;
  modelIdentifier: string;
  appVersion: string;
  latestReleaseVersion: string;
  users: Array<{
    name: string;
    id: string;
    isOnline: boolean;
  }>;
  saveButtonDisabled: boolean;
  onSave(): unknown;
}

const EditComputer: React.FC<Props> = ({
  name,
  setName,
  releaseChannel,
  setReleaseChannel,
  modelTitle,
  serialNumber,
  modelIdentifier,
  appVersion,
  latestReleaseVersion,
  users,
  saveButtonDisabled,
  onSave,
}) => (
  <div className="">
    <PageHeading icon={`desktop`}>Edit computer</PageHeading>
    <div className="border border-slate-200 mt-8 rounded-3xl bg-white p-6 sm:p-8 pr-8 xl:pr-12 flex justify-between items-center gap-16">
      <div className="flex flex-col gap-6 xs:gap-0 lg:gap-4 flex-grow justify-between self-stretch">
        <div className="flex flex-col-reverse xs:flex-row xs:justify-between items-center xs:items-start gap-4 xs:gap-8">
          <div className="flex flex-col items-center xs:items-start lg:ml-4 text-slate-400 text-xs lg:text-sm">
            <h2 className="text-lg font-bold text-slate-900 mb-2 lg:mb-3 lg:-ml-4">
              {modelTitle}
            </h2>
            <div className="flex flex-col gap-1 lg:gap-2">
              <h3>
                Serial number:{` `}
                <span className="text-slate-600 font-medium">{serialNumber}</span>
              </h3>
              <h3>
                Model identifier:{` `}
                <span className="text-slate-600 font-medium">{modelIdentifier}</span>
              </h3>
            </div>
          </div>
          <div className="w-32 h-28 justify-center items-center lg:hidden flex">
            <img
              alt={modelTitle}
              src={`/macs/${modelIdentifier}.png`}
              className="max-w-full max-h-full"
            />
          </div>
        </div>
        <TextInput
          type="text"
          value={name}
          setValue={setName}
          placeholder="Computer name"
          label="Name:"
          className="max-w-xl"
          testId="computer-name-input"
        />
      </div>
      <div className="shrink-0 w-40 xl:w-52 h-40 xl:h-52 hidden lg:flex justify-center items-center bg-white">
        <img
          alt={modelTitle}
          src={`/macs/${modelIdentifier}.png`}
          className="max-w-full max-h-full"
        />
      </div>
    </div>
    <div className="border border-slate-200 mt-4 sm:mt-6 rounded-3xl bg-white p-6 sm:p-8 flex flex-col gap-6 xl:gap-2 xl:flex-row justify-between items-center">
      <div className="text-lg text-slate-600 font-medium flex flex-col-reverse xs:flex-row items-center gap-2 justify-center self-stretch">
        <div className="flex items-center gap-2">
          <span>Running:</span>
          <span className="font-bold text-slate-800 shrink-0">Gertrude {appVersion}</span>
        </div>
        {appVersion === latestReleaseVersion ? (
          <PillBadge type="green" size="small" className="shrink-0">
            Up to date
          </PillBadge>
        ) : (
          <PillBadge type="yellow" size="small" className="shrink-0">
            Updates available
          </PillBadge>
        )}
      </div>
      <div className="flex items-center space-x-2 text-slate-500">
        <span>Release channel:</span>
        <SelectMenu<ReleaseChannel>
          options={[
            { value: `stable`, display: `Stable` },
            { value: `beta`, display: `Beta` },
            { value: `canary`, display: `Canary` },
          ]}
          size="medium"
          selectedOption={releaseChannel}
          setSelected={setReleaseChannel}
          testId="release-channel-select"
        />
      </div>
    </div>
    <div className="border border-slate-200 mt-4 sm:mt-6 rounded-3xl bg-white p-6 sm:p-8">
      <h3 className="text-xl font-bold text-slate-900">Users on this computer:</h3>
      <div className="mt-6">
        {users.map((user) => (
          <ComputerUser key={user.id} {...user} />
        ))}
      </div>
    </div>
    <div className="flex justify-end gap-4 mt-6 xs:mt-8">
      <Button size="large" type="link" to={`/computers`} color="tertiary">
        Cancel
      </Button>
      <Button
        size="large"
        type="button"
        onClick={onSave}
        disabled={saveButtonDisabled}
        color="primary"
      >
        Save
      </Button>
    </div>
  </div>
);

export default EditComputer;

interface ComputerUserProps {
  name: string;
  id: string;
  isOnline: boolean;
}

const ComputerUser: React.FC<ComputerUserProps> = ({ name, id, isOnline }) => (
  <Link
    to={`/users/${id}`}
    className="flex justify-between items-center odd:bg-slate-50 hover:bg-slate-100 transition duration-100 px-4 py-3 rounded-xl"
  >
    <h4 className="text-slate-700 font-semibold sm:text-lg">{name}</h4>
    <div className="flex items-center gap-2">
      <span className={cx(`text-sm`, isOnline ? `text-slate-600` : `text-slate-400`)}>
        {isOnline ? `online` : `offline`}
      </span>
      <div
        className={cx(
          `w-3 h-3 rounded-full`,
          isOnline ? `bg-green-400` : ` shadow-inner bg-slate-100`,
        )}
      />
    </div>
  </Link>
);
