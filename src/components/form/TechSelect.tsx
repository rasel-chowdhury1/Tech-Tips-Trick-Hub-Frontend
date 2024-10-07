import { Select, SelectItem } from "@nextui-org/select";
import { useFormContext } from "react-hook-form";

import { IInput } from "@/src/types";

interface IProps {
  variant?: "underlined" | "faded" | "flat" | "bordered";
  size?: "sm" | "md" | "lg";
  radius: "none" | "sm" | "md" | "lg" | "full";
}
interface IProps extends IInput {
  options: { key: string; label: string }[];
}

const TechSelect = ({
  options,
  name,
  label,
  radius,

  disabled,
}: IProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <Select
      {...register(name)}
      className="min-w-full sm:min-w-[225px]"
      errorMessage={errors[name] ? (errors[name]?.message as string) : ""}
      isDisabled={disabled}
      isInvalid={!!errors[name]}
      label={label}
      radius={radius}
      variant="bordered"
    >
      {options.map((options) => (
        <SelectItem key={options.key}>{options.label}</SelectItem>
      ))}
    </Select>
  );
};

export default TechSelect;
