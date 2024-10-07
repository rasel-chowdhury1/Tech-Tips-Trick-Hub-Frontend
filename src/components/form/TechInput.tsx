"use client";
import { Input } from "@nextui-org/input";
import { useFormContext } from "react-hook-form";

import { IInput } from "@/src/types";

interface IProps extends IInput {
  variant?: "underlined" | "faded" | "flat" | "bordered";
  size?: "sm" | "md" | "lg";
  radius: "none" | "sm" | "md" | "lg" | "full";
  required?: boolean;
  type?: string;
  label?: string;
  name: string;
  endContent?: React.ReactNode;
}

export const TechInput = ({
  variant = "bordered",
  size = "lg",
  required = false,
  type = "text",
  label,
  endContent,
  radius,
  name,
}: IProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <Input
      {...register(name)}
      endContent={endContent}
      errorMessage={errors[name] ? (errors[name]?.message as string) : ""}
      isInvalid={!!errors[name]}
      label={label}
      radius={radius}
      required={required}
      size={size}
      type={type}
      variant={variant}
    />
  );
};
