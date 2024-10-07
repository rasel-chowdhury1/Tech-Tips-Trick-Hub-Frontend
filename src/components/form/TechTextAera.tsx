import { Textarea } from "@nextui-org/input";
import { useFormContext, useWatch } from "react-hook-form";

import { IInput } from "@/src/types";

interface IProps extends IInput {
  type?: string;
  radius?: "none" | "sm" | "md" | "lg" | "xl";
}

export const TechTextArea = ({
  name,
  label,

  variant = "bordered",
}: IProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const currentValue = useWatch({ name });

  return (
    <Textarea
      {...register(name)}
      errorMessage={errors[name] ? (errors[name]?.message as string) : ""}
      isInvalid={!!errors[name]}
      label={label}
      minRows={2}
      radius="none"
      value={currentValue || ""}
      variant={variant}
    />
  );
};
