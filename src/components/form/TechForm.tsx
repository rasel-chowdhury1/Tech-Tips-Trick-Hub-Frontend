"use client";
import { ReactNode } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

type formConfig = {
  defaultValues?: Record<string, any>;
  resolver?: any;
};

interface IFromProps extends formConfig {
  children: ReactNode;
  onSubmit: SubmitHandler<any>;
}

const TechForm = ({
  children,
  onSubmit,
  defaultValues,
  resolver,
}: IFromProps) => {
  const formConfig: formConfig = {};

  if (!!defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }
  if (!!resolver) {
    formConfig["resolver"] = resolver;
  }
  const methods = useForm(formConfig);
  const submitHandler = methods.handleSubmit;

  return (
    <FormProvider {...methods}>
      <form onSubmit={submitHandler(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default TechForm;
