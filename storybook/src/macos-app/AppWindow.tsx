import React from 'react';
import cx from 'classnames';

interface Props {
  width: number;
  height: number;
  children: React.ReactNode;
  dark?: boolean;
}

const AppWindow: React.FC<Props> = ({ children, width, height, dark = false }) => {
  return (
    <div
      className={cx(
        `shadow-lg flex flex-col border-[0.5px] rounded-xl border-slate-300`,
        dark && `dark`,
      )}
      style={{ height, width }}
    >
      <div className="flex items-center pl-2 space-x-1.5 bg-[rgb(239,237,242)] dark:bg-[rgb(54,51,57)] h-[28px] rounded-t-xl border-b-[0.5px] border-slate-300 dark:border-slate-600 shrink-0">
        <div className="w-[12px] h-[12px] rounded-full border-[0.5px] border-slate-400 dark:border-slate-800 bg-[rgb(238,105,94)]" />
        <div className="w-[12px] h-[12px] rounded-full border-[0.5px] border-slate-400 dark:border-slate-800 bg-[rgb(246,189,79)]" />
        <div className="w-[12px] h-[12px] rounded-full border-[0.5px] border-slate-400 dark:border-slate-800 bg-[rgb(97,196,84)]" />
      </div>
      <div className="flex-grow relative overflow-hidden">{children}</div>
    </div>
  );
};

export default AppWindow;