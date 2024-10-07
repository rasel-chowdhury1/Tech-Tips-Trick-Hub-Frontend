import React from "react";
import { Field } from "formik";

interface TextareaProps {
  name: string;
  label?: string;
  defaultValue?: string;
  placeholder?: string;
  required?: boolean;
}

const Textarea: React.FC<TextareaProps> = ({
  name,
  label,
  defaultValue,
  required = false,
  placeholder,
}) => {
  return (
    <div className="flex flex-col">
      {label && (
        <label htmlFor={name} className="font-medium mb-2">
          {label}
        </label>
      )}
      <Field
        placeholder={placeholder}
        defaultValue={defaultValue}
        as="textarea"
        id={name}
        name={name}
        required={required}
        className="max-h-[100px] min-h-[100px] border rounded-md p-3"
      />
    </div>
  );
};

export default Textarea;
