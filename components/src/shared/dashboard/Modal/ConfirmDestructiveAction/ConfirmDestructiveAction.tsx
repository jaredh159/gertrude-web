import React from 'react';
import Modal from '../Modal';

interface Props {
  title: string;
  confirmText?: string;
  cancelText?: string;
  openWhenPresent?: unknown;
  onDismiss(): unknown;
  onConfirm(): unknown;
  children?: React.ReactNode;
}

const ConfirmDestructiveAction: React.FC<Props> = ({
  title,
  confirmText = `Delete`,
  cancelText = `Cancel`,
  onConfirm,
  onDismiss,
  openWhenPresent,
  children,
}) => (
  <Modal
    icon="exclamation-triangle"
    type="destructive"
    title={title}
    primaryButtonText={confirmText}
    secondaryButtonText={cancelText}
    isOpen={!!openWhenPresent}
    onDismiss={onDismiss}
    onPrimaryClick={onConfirm}
    children={children}
  />
);

export default ConfirmDestructiveAction;
