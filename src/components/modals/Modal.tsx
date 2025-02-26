import React from "react";
import {
  Modal as HeroUIModal,
  ModalContent,
  ModalHeader,
  ModalBody,
  type ModalProps as HeroUIModalProps,
} from "@heroui/react";

interface ModalProps extends Partial<Omit<HeroUIModalProps,"children">> {
  isOpen: boolean;
  onOpenChange: () => void;
  children: (onClose: () => void) => React.ReactNode;
}

export default function Modal({
  isOpen,
  onOpenChange,
  size = "full",
  title = "",
  children,
  ...props
}: ModalProps) {
  return (
    <HeroUIModal
      {...props}
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      size={size}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
            <ModalBody>{children(onClose)}</ModalBody>
          </>
        )}
      </ModalContent>
    </HeroUIModal>
  );
}
