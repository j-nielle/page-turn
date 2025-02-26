"use client";

import React from "react";
import Modal from "@/components/modals/Modal";
import { useDisclosure, Button } from "@heroui/react";
import { NovelForm } from "@/components/forms";
import { cn } from "@/lib/utils";

interface AddNovelProps {
  className?: string;
}

export default function AddNovel({className}: AddNovelProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <div className={cn("w-full p-2 border-2 border-default-200", className)}>
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
