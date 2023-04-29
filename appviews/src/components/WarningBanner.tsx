import React from 'react';

interface Props {
  children: React.ReactNode;
  severity: 'warning' | 'error';
}

const WarningBanner: React.FC<Props> = ({ children, severity }) => (
  <div
    className={`p-4 rounded-2xl flex justify-center items-center space-x-4 ${
      severity === `warning`
        ? `bg-yellow-50 dark:bg-yellow-500/10 dark:border border-yellow-500/20 text-yellow-600 dark:text-yellow-100`
        : `bg-red-50 dark:bg-red-500/20 dark:border border-red-500/20 text-red-600 dark:text-red-100`
    }`}
  >
    <i className="fa-solid fa-triangle-exclamation text-lg" />
    <p className="font-medium">{children}</p>
  </div>
);

export default WarningBanner;