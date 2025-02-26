"use client";

import React from "react";
import Modal from "@/components/modals/Modal";
import { useDisclosure, Button } from "@heroui/react";
import { NovelForm } from "@/components/forms";

export default function AddNovel() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <div className="w-full">
      <Button color="primary" className="w-full" onPress={onOpen}>
        Add Novel
      </Button>
      <Modal
        title="Add Novel"
        size="full"
        isOpen={isOpen}
        scrollBehavior="inside"
        placement="center"
        onOpenChange={onOpenChange}>
        {(onClose) => <NovelForm handleClose={onClose} />}
      </Modal>
    </div>
  );
}
