"use client";
import { ErrorMessage, Field, FieldProps } from "formik";
import { Input } from "@nextui-org/input";

interface InputProps {
  name: string;
  label?: string;
  type?: string;
  value?: string;
  readOnly?: boolean;
  placeholder?: string;
  defaultValue?: string | number;
  required?: boolean;
}

const FormikInput: React.FC<InputProps> = ({
  name,
  label,
  type = "text",
  readOnly = false,
  placeholder,
  defaultValue,
  required = false,
}) => {
  return (
    <div className="flex flex-col flex-grow font-publicSans lg:w-auto w-full">
      <Field name={name}>
        {({ field }: FieldProps) => (
          <>
            <Input
              {...field}
              size="sm"
              type={type}
              label={label}
              readOnly={readOnly}
              placeholder={placeholder}
              required={required}
              defaultValue={defaultValue as string}
              id={name}
            />
          </>
        )}
      </Field>
      <ErrorMessage name={name} component="p" className="text-danger" />
    </div>
  );
};

export default FormikInput;
