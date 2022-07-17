import React from 'react';
import Button from '../Button';

type Props = {
  className?: string;
};

const NoNotifications: React.FC<Props> = ({ className }) => (
  <div className="flex flex-col justify-center items-center p-10 bg-gray-100 rounded-2xl shadow-inner">
    <i className="fa fa-bell text-6xl text-gray-300" />
    <h2 className="text-xl font-bold mt-3 mb-2">No notifications</h2>
    <p className="text-gray-500">Get started by creating a custom notification</p>
    <Button
      color="primary-violet"
      type="button"
      onClick={() => {}}
      className="mt-6"
      small
    >
      <i className="fa fa-plus mr-4" />
      Create notification
    </Button>
  </div>
);

export default NoNotifications;
