import { Button } from "@nextui-org/button";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/modal";
import { ReactNode } from "react";
type ModalSize =
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl"
  | "full";
type CustomModalProps = {
  isOpen: boolean;
  footer?: boolean;
  onClose: () => void;
  onAction?: () => void;
  children: ReactNode;
  actionButtonTitle?: string;
  title?: string;
  size?: ModalSize;
};

const CustomModal = ({
  isOpen,
  onClose,
  onAction,
  actionButtonTitle,
  title,
  footer = true,
  size = "md",
  children,
}: CustomModalProps) => {
  return (
    <Modal size={size} isOpen={isOpen} onOpenChange={onClose}>
      <ModalContent>
        <>
          {title && (
            <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
          )}
          <ModalBody>{children}</ModalBody>
          {footer && (
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
              <Button type="submit" color="primary" onPress={onAction}>
                {actionButtonTitle}
              </Button>
            </ModalFooter>
          )}
        </>
      </ModalContent>
    </Modal>
  );
};

export default CustomModal;
