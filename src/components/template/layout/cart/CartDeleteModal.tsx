"use client";

import * as React from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog"; // Radix UI 기반의 다이얼로그를 사용한다는 가정
import { Button } from "@/components/ui/button";

export default function CartDeleteModal({
  isOpen,
  onClose,
  handleDeleteList,
  title,
  description,
  cancelText,
  confirmText,
}: {
  isOpen: boolean;
  onClose: () => void;
  handleDeleteList: (isAllorSelected: boolean) => void;
  title: string;
  description: string;
  cancelText: string;
  confirmText: string;
}) {
  const handleDeleteConfirmAction = () => {
    handleDeleteList(true);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out transition-opacity duration-300">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <DialogDescription className="flex items-center justify-center">
          {description}
        </DialogDescription>
        <DialogFooter className="flex flex-row justify-center items-center gap-2">
          <Button variant="default" onClick={handleDeleteConfirmAction}>
            {confirmText}
          </Button>
          <Button variant="secondary" onClick={onClose}>
            {cancelText}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
