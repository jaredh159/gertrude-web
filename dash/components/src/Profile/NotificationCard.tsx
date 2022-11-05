import React, { useEffect, useRef } from 'react';
import cx from 'classnames';
import { Trigger, AdminNotificationMethod } from '@dash/types';
import { Button } from '@shared/components';
import { SelectMenu } from '../Forms';
import GradientIcon from '../GradientIcon';

type Props = {
  trigger: Trigger;
  methodOptions: Array<{ display: string; value: string }>;
  selectedMethod: AdminNotificationMethod;
  onDelete(): unknown;
  editing: boolean;
  startEdit(): unknown;
  cancelEdit(): unknown;
  updateMethod(id: UUID): unknown;
  updateTrigger(trigger: Trigger): unknown;
  onSave(): unknown;
  saveButtonDisabled: boolean;
  focus?: boolean;
};

const NotificationCard: React.FC<Props> = ({
  trigger,
  selectedMethod,
  methodOptions,
  onDelete,
  editing,
  startEdit,
  cancelEdit,
  updateMethod,
  updateTrigger,
  onSave,
  saveButtonDisabled,
  focus,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (focus && ref.current) {
      ref.current.focus();
      ref.current.scrollIntoView({ behavior: `smooth` });
    }
  }, [focus]);

  return (
    <div
      ref={ref}
      className={cx(
        `shadow-lg border rounded-xl w-full sm:w-128 flex flex-col bg-white m-2 sm:m-4`,
        focus && `ring-violet-500/90 ring-4 ring-offset-4`,
      )}
    >
      <Summary {...selectedMethod.data} trigger={trigger} />
      <div
        className={cx(
          `p-4 space-y-4 -mt-4 [transition:150ms]`,
          editing ? `h-56` : `h-0 opacity-0 overflow-hidden`,
        )}
      >
        <div>
          <h3 className="mb-1 text-violet-800 font-medium text-md ml-1">Method:</h3>
          <SelectMenu
            options={methodOptions}
            selectedOption={selectedMethod.id}
            setSelected={updateMethod}
          />
        </div>
        <div>
          <h3 className="mb-1 text-violet-800 font-medium text-md ml-1">Upon:</h3>
          <SelectMenu
            options={[
              {
                value: Trigger.suspendFilterRequestSubmitted,
                display: `Suspension requests`,
              },
              {
                value: Trigger.unlockRequestSubmitted,
                display: `Unlock requests`,
              },
            ]}
            selectedOption={trigger}
            setSelected={updateTrigger}
          />
        </div>
      </div>
      <div className="bg-gray-100 rounded-b-xl flex justify-end items-center p-3">
        <Button
          type="button"
          onClick={startEdit}
          color="secondary-white"
          small
          className={editing ? `hidden` : `block`}
        >
          <i className="fa fa-pen mr-3" />
          Edit
        </Button>
        <Button
          type="button"
          onClick={onDelete}
          color="secondary-warning"
          small
          className={`${editing ? `hidden` : `block`} ml-3`}
        >
          <i className="fa fa-trash mr-3" />
          Delete
        </Button>
        <Button
          type="button"
          onClick={cancelEdit}
          color="secondary-white"
          small
          className={`${editing ? `block` : `hidden`} mr-3`}
        >
          Cancel
        </Button>
        <Button
          type="button"
          onClick={onSave}
          color="primary-violet"
          disabled={saveButtonDisabled}
          small
          className={editing ? `block` : `hidden`}
        >
          Save
        </Button>
      </div>
    </div>
  );
};

export default NotificationCard;

const Summary: React.FC<AdminNotificationMethod['data'] & { trigger: Trigger }> = (
  props,
) => (
  <div className="p-5">
    <GradientIcon
      icon={props.type === `text` ? `phone` : props.type}
      size="small"
      className="w-min"
    />
    <h2 className="text-gray-700 text-lg">
      <span className="capitalize">{props.type}</span>
      {` `}
      <span className="font-bold">{methodTarget(props)}</span> for{` `}
      <span className="text-gray-900">{triggerText(props.trigger)}</span>
    </h2>
  </div>
);

function methodTarget(method: AdminNotificationMethod['data']): string {
  switch (method.type) {
    case `email`:
      return method.email;
    case `text`:
      return method.phoneNumber;
    case `slack`:
      return method.channelName;
  }
}

function triggerText(trigger: Trigger): string {
  switch (trigger) {
    case Trigger.suspendFilterRequestSubmitted:
      return `filter suspension requests`;
    case Trigger.unlockRequestSubmitted:
      return `unlock requests`;
  }
}