"use client";
import { Button } from "@nextui-org/button";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
} from "@nextui-org/modal";
import React from "react";
import { ReactNode } from "react";

interface IProps {
  buttonText: string;
  title: string;
  children: ReactNode;
  buttonVariant?:
    | "light"
    | "solid"
    | "bordered"
    | "flat"
    | "faded"
    | "shadow"
    | "ghost"
    | undefined;
  buttonClassName?: string;
  size?:
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
  bgColor?: string; // Optional prop for custom background color
}

export default function TechModal({
  buttonText,
  title,
  children,
  buttonVariant = "bordered",
  buttonClassName,
  size = "2xl",
}: IProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div>
      <Button
        className={buttonClassName}
        variant={buttonVariant}
        onPress={onOpen}
      >
        {buttonText}
      </Button>
      <Modal
        className="border"
        isOpen={isOpen}
        size={size}
        onOpenChange={onOpenChange}
      >
        <ModalContent
          className={`
            rounded-lg
            bg-white 
            dark:bg-[#1A1A1A] 
            light:bg-[#F9F9F9]
            transition-colors duration-300
          `} // Light and dark mode background colors
        >
          <>
            <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
            <ModalBody>{children}</ModalBody>
          </>
        </ModalContent>
      </Modal>
    </div>
  );
}
