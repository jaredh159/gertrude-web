import React from 'react';
import cx from 'classnames';

type Props = {
  children: React.ReactNode;
  htmlFor?: string;
  className?: string;
};

const Label: React.FC<Props> = ({ children, htmlFor, className }) => (
  <label
    htmlFor={htmlFor}
    className={cx(
      `text-left text-slate-700 dark:text-slate-200 font-medium text-md mb-1`,
      className,
    )}
  >
    {children}
  </label>
);

export default Label;
