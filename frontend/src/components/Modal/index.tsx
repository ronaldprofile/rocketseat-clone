import * as DialogPrimitive from "@radix-ui/react-dialog";
import {
  StyledModalOverlay,
  StyledModalWrapper,
  StyledModalContent,
  StyledFooterActions,
  StyledButtonCloseModal,
  StyleModalTitle
} from "./styles";

import { CloseModalIcon } from "../../assets/CloseModal";
import { Button } from "../Button";

export type ModalProps = React.ComponentProps<typeof DialogPrimitive.Root> & {};

export function Modal({ children, ...props }: ModalProps) {
  return (
    <DialogPrimitive.Root {...props}>
      <StyledModalOverlay />
      {children}
    </DialogPrimitive.Root>
  );
}

export type ModalWrapperProps = DialogPrimitive.DialogContentProps &
  React.ComponentProps<typeof StyledModalWrapper> & {
    buttonCloseModal?: boolean;
  };

export function ModalWrapper({
  children,
  buttonCloseModal = true,
  ...props
}: ModalWrapperProps) {
  return (
    <StyledModalWrapper {...props}>
      {children}

      {buttonCloseModal && (
        <StyledButtonCloseModal>
          <CloseModalIcon />
        </StyledButtonCloseModal>
      )}
    </StyledModalWrapper>
  );
}

type ModalTitleProps = DialogPrimitive.DialogTitleProps;

export function ModalTitle({ children }: ModalTitleProps) {
  return <StyleModalTitle>{children}</StyleModalTitle>;
}

export function ModalFooterActions() {
  return (
    <StyledFooterActions>
      <DialogPrimitive.Close asChild>
        <Button type="button" variant="outlined">
          cancelar
        </Button>
      </DialogPrimitive.Close>

      <Button type="submit">confirmar alterações</Button>
    </StyledFooterActions>
  );
}

type ModalButtonCloseProps = DialogPrimitive.DialogCloseProps;

export function ModalButtonClose({ children }: ModalButtonCloseProps) {
  return <DialogPrimitive.Close>{children}</DialogPrimitive.Close>;
}

export const ModalTrigger = DialogPrimitive.Trigger;
ModalTrigger.displayName = "ModalTrigger";

export const ModalContent = StyledModalContent;
ModalContent.displayName = "ModalContent";
