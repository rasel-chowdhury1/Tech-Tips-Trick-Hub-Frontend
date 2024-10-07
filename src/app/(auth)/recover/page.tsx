"use client";
import FormikInput from "@/src/components/formik/FormikInput";
import { useRecoverPasswordMutation } from "@/src/redux/features/auth";
import { TErrorResponse } from "@/src/types";
import { Button } from "@nextui-org/button";
import { Form, Formik } from "formik";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

type TFormValues = {
  email: string;
  phone: string;
  password: string;
};

const Recover = () => {
  const router = useRouter();
  const [recoverPass] = useRecoverPasswordMutation();

  const handleSubmit = async (values: TFormValues) => {
    const toastId = toast.loading("Account recover in progress!");
    try {
      const res = await recoverPass(values).unwrap();
      if (res.success) {
        toast.success(res.message, { id: toastId, duration: 2000 });
        router.push("/login");
      }
    } catch (error) {
      console.log(error);
      const err = error as TErrorResponse;
      toast.error(err.data.errorMessages[0].message || "Something went wrong", {
        id: toastId,
        duration: 2000,
      });
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-slate-950 p-8 m-5 rounded-lg shadow-lg w-full max-w-md space-y-6">
        {/* Login Header */}
        <h1 className="text-3xl font-semibold text-center text-white mb-6">
          Log in to your account
        </h1>

        {/* Formik Form */}
        <Formik
          initialValues={{ email: "", password: "", phone: "" }}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form className="space-y-5">
              <FormikInput name="email" label="Email" type="email" />
              <FormikInput name="phone" label="Phone" type="string" />
              <FormikInput name="password" label="Password" type="password" />
              <Button
                type="submit"
                className="w-full bg-blue-600 text-white hover:bg-blue-700"
              >
                Log In
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Recover;
