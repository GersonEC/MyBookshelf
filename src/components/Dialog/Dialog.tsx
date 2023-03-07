import { Dialog as HeadlessDialog } from '@headlessui/react';
import './Dialog.css';

interface Props {
  title: string;
  description: string;
  isOpen: boolean;
  handleDismiss: () => void;
}
const Dialog: React.FC<Props> = (props: Props) => {
  return (
    <HeadlessDialog
      className='wrapper'
      open={props.isOpen}
      onClose={props.handleDismiss}
    >
      <div className='backdrop' onClick={props.handleDismiss} />
      <HeadlessDialog.Panel className={'dialog'}>
        <HeadlessDialog.Title>{props.title}</HeadlessDialog.Title>
        <HeadlessDialog.Description>
          {props.description}
        </HeadlessDialog.Description>
        <button onClick={props.handleDismiss}>Deactivate</button>
        <button onClick={props.handleDismiss}>Cancel</button>
      </HeadlessDialog.Panel>
    </HeadlessDialog>
  );
};

export default Dialog;
