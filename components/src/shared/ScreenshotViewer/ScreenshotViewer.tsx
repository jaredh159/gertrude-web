import React from 'react';
import { formatTime } from '../lib/dates';
import Button from '../Button';

type Props = {
  className?: string;
  image: string;
  date: Date;
};

const ScreenshotViewer: React.FC<Props> = ({ image, className, date }) => (
  <div className="border rounded-xl shadow-lg bg-white">
    <div className="m-4 flex justify-center">
      <img className="rounded-lg w-full max-w-4xl shadow-inner" src={image} />
    </div>
    <div className="p-4 pt-0 flex justify-between items-end">
      <h2 className="text-gray-600 font-medium">{formatTime(date)}</h2>
      <Button color="secondary-white" small type="button" onClick={() => {}}>
        Approve
      </Button>
    </div>
  </div>
);

export default ScreenshotViewer;
