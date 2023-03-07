import * as RadixDialog from '@radix-ui/react-dialog';

const Dialog = () => {
  return (
    <RadixDialog.Root>
      <RadixDialog.Trigger></RadixDialog.Trigger>
      <RadixDialog.Portal>
        <RadixDialog.Overlay> </RadixDialog.Overlay>
        <RadixDialog.Content>
          <RadixDialog.Title> Dialog Title </RadixDialog.Title>
          <RadixDialog.Description> </RadixDialog.Description>
          <RadixDialog.Close> </RadixDialog.Close>
        </RadixDialog.Content>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  );
};

export default Dialog;
