"use client";
import FormikInput from "@/src/components/formik/FormikInput";
import { useRegistrationMutation } from "@/src/redux/features/auth";
import { TErrorResponse } from "@/src/types";
import { Button } from "@nextui-org/button";
import { Form, Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

// Define form values type
interface FormValues {
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
  avatar: File | null;
}

const initialValues: FormValues = {
  name: "",
  email: "",
  password: "",
  phone: "",
  address: "",
  avatar: null,
};

const Registration = () => {
  const router = useRouter();
  const [createUser] = useRegistrationMutation();
  const handleSubmit = async (values: FormValues) => {
    const toastId = toast.loading("User creating");
    try {
      const formData = new FormData();
      const data = {
        name: values.name,
        email: values.email,
        password: values.password,
        phone: values.phone,
        address: values.address,
      };
      formData.append("data", JSON.stringify(data));
      if (values.avatar) {
        formData.append("avatar", values.avatar);
      }
      const res = await createUser(formData).unwrap();
      if (await res.success) {
        router.push("/login");
        toast.success("Please sign in", { id: toastId, duration: 2000 });
      }
    } catch (error) {
      const err = error as TErrorResponse;
      toast.error(err.data.errorMessages[0].message || "Something went wrong", {
        id: toastId,
        duration: 2000,
      });
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="bg-slate-950 p-8 m-5 rounded-lg shadow-lg w-full max-w-md space-y-6">
        {/* Registration Header */}
        <h1 className="text-2xl font-bold text-center mb-6">
          Create your account
        </h1>

        {/* Formik Form */}
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {({ setFieldValue }) => (
            <Form className="space-y-5">
              {/* Name */}
              <FormikInput name="name" label="Name" />

              {/* Email */}
              <FormikInput name="email" label="Email" type="email" />

              {/* Password */}
              <FormikInput name="password" label="Password" type="password" />

              {/* Phone */}
              <FormikInput name="phone" label="Phone" type="tel" />

              {/* Address */}
              <FormikInput name="address" label="Address" />

              {/* File Input for Avatar */}
              <div className="space-y-1">
                <label
                  htmlFor="avatar"
                  className="block font-medium text-gray-700"
                >
                  Profile Picture
                </label>
                <input
                  accept="image/*"
                  id="avatar"
                  type="file"
                  className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
                  onChange={(e) => {
                    const file = e.target.files ? e.target.files[0] : null;
                    setFieldValue("avatar", file);
                  }}
                />
              </div>

              {/* Submit Button */}
              <Button type="submit" className="w-full">
                Sign up
              </Button>
            </Form>
          )}
        </Formik>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-5">
          Have an account?{" "}
          <Link href="/login" className="text-blue-500 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Registration;
