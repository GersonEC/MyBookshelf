import { Dialog as HeadlessDialog } from '@headlessui/react';
import { useState } from 'react';

function Dialog() {
  let [isOpen, setIsOpen] = useState(true);

  return (
    <HeadlessDialog open={isOpen} onClose={() => setIsOpen(false)}>
      <HeadlessDialog.Panel>
        <HeadlessDialog.Title>Deactivate account</HeadlessDialog.Title>
        <HeadlessDialog.Description>
          This will permanently deactivate your account
        </HeadlessDialog.Description>

        <p>
          Are you sure you want to deactivate your account? All of your data
          will be permanently removed. This action cannot be undone.
        </p>

        <button onClick={() => setIsOpen(false)}>Deactivate</button>
        <button onClick={() => setIsOpen(false)}>Cancel</button>
      </HeadlessDialog.Panel>
    </HeadlessDialog>
  );
}

export default Dialog;
