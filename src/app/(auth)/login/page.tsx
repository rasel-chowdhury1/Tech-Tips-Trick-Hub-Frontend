"use client";
import FormikInput from "@/src/components/formik/FormikInput";
import { useLoginMutation } from "@/src/redux/features/auth";
import { setUser, TUser } from "@/src/redux/features/auth/authSlice";
import { useAppDispatch } from "@/src/redux/hooks";
import { TErrorResponse } from "@/src/types";
import { verifyToken } from "@/src/utils/VerifyToken";
import { Button } from "@nextui-org/button";
import { Form, Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

type TSignInValue = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const [login] = useLoginMutation();
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleSubmit = async (values: TSignInValue) => {
    const toastId = toast.loading("Login processing");
    try {
      const res = await login(values).unwrap();
      let user = verifyToken(res.token) as TUser;
      user.name = res.data.name;
      user.avatar = res.data.avatar;
      dispatch(setUser({ user: user, token: res.token }));
      localStorage.setItem("token", res.token);
      toast.success("Logged in", { id: toastId, duration: 2000 });
      router.push("/");
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
          initialValues={{ email: "", password: "" }}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form className="space-y-5">
              {/* Email */}
              <FormikInput name="email" label="Email" type="email" />

              {/* Password */}
              <FormikInput name="password" label="Password" type="password" />

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-blue-600 text-white hover:bg-blue-700"
              >
                Log In
              </Button>
            </Form>
          )}
        </Formik>

        {/* Footer */}
        <p className="text-center text-sm text-gray-400 mt-5">
          Don&apos;t have an account?{" "}
          <Link href="/registration" className="text-blue-500 hover:underline">
            Sign up
          </Link>
        </p>
        <p className="text-center text-sm text-gray-400 mt-5">
          Forget your password?{" "}
          <Link href="/recover" className="text-blue-500 hover:underline">
            Recover now!
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
