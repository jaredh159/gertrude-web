import React from 'react';
import cx from 'classnames';
import { prettyE164 } from '@dash/utils';

type Props = {
  method: 'email' | 'slack' | 'text';
  value: string;
  deletable: boolean;
  onDelete(): unknown;
};

const NotificationMethod: React.FC<Props> = ({ deletable, onDelete, method, value }) => (
  <li className="pl-4 xs:pr-2 py-2 flex justify-between items-center odd:bg-slate-100 xs:odd:bg-slate-50 rounded-lg max-w-4xl">
    <h2 className="text-slate-700">
      <span className="capitalize">{method}</span>
      <span className="text-violet-700 font-medium pl-1.5">{prettyE164(value)}</span>
    </h2>
    <button
      onClick={deletable ? onDelete : undefined}
      disabled={!deletable}
      className={cx(
        `w-10 h-10 rounded-full transition-colors duration-75 bg-black bg-opacity-0 flex justify-center items-center mr-2 shrink-0`,
        deletable ? `cursor-pointer hover:bg-opacity-5` : `cursor-not-allowed`,
      )}
    >
      <i className={cx(`fa fa-trash`, deletable ? `text-red-400` : `text-slate-300`)} />
    </button>
  </li>
);

export default NotificationMethod;
