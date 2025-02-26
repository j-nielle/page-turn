"use client";
import React from "react";
import { Button } from "@heroui/react";
import { cn } from "@/lib/utils";

interface FormFooterProps {
  className?: string;
  children?: React.ReactNode;
  onClose?: () => void;
}

const FormFooter = ({ className, children, onClose }: FormFooterProps) => {
  return (
    <>
      <footer
        className={cn("flex flex-row gap-2 px-6 py-4 justify-end", className)}>
        {children ? (
          children
        ) : (
          <>
            <Button color="danger" variant="light" onPress={onClose}>
              Close
            </Button>
            <Button color="primary" type="submit">
              Submit
            </Button>
          </>
        )}
      </footer>
    </>
  );
};

export default FormFooter;
