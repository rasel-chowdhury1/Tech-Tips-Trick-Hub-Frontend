"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useRouter, useSearchParams } from "next/navigation";

import TechForm from "@/src/components/form/TechForm";
import { TechInput } from "@/src/components/form/TechInput";
import { loginValidationSchema } from "@/src/schema/login.schema";
import { useUserLogin } from "@/src/hooks/auth.hook";
import Loading from "@/src/components/Loading";
import { useUser } from "@/src/context/user.provider";

const LoginPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const redirect = searchParams.get("redirect");
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const { mutate: handleUserLogin, isPending, isSuccess } = useUserLogin();
  const { isSetLoading: UserLoading } = useUser();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    handleUserLogin(data);
    UserLoading(true);
  };

  useEffect(() => {
    if (!isPending && isSuccess) {
      if (redirect) {
        router.push(redirect);
      } else {
        router.push("/");
      }
    }
  }, [isPending, isSuccess]);

  return (
    <>
      {isPending && <Loading />}
      <div className="py-8">
        <div className="bg-[#F9F9F9] dark:bg-[#1A1A1A] p-7">
          <div className="mx-auto max-w-5xl">
            <h1 className="text-3xl lg:text-4xl font-semibold text-center md:text-left">
              My Account
            </h1>
          </div>
        </div>
        <div className="py-12 px-4 sm:px-8 lg:px-12">
          <div className="mt-8 md:mt-16 w-full max-w-lg mx-auto text-center">
            <h2 className="mb-3 text-xl sm:text-2xl font-semibold">Log In</h2>
            <p className="mb-6 text-md sm:text-lg">
              Login if you are a returning customer.
            </p>
          </div>

          <div className="flex border flex-col items-center justify-center w-full max-w-lg bg-[#F9F9F9] dark:bg-[#1A1A1A] mx-auto mt-5 p-6 rounded-lg mb-10">
            <TechForm
              resolver={zodResolver(loginValidationSchema)}
              onSubmit={onSubmit}
            >
              <div className="mb-4 w-full sm:w-[300px] md:w-[400px]">
                <TechInput
                  label="Email"
                  name="email"
                  radius="none"
                  size="lg"
                  type="email"
                  variant="bordered"
                />
              </div>

              <div className="mb-4 w-full sm:w-[300px] md:w-[400px]">
                <TechInput
                  endContent={
                    <button
                      aria-label="toggle password visibility"
                      className="focus:outline-none"
                      type="button"
                      onClick={toggleVisibility}
                    >
                      {isVisible ? (
                        <AiFillEyeInvisible className="text-2xl text-default-400 pointer-events-none" />
                      ) : (
                        <AiFillEye className="text-2xl text-default-400 pointer-events-none" />
                      )}
                    </button>
                  }
                  label="Password"
                  name="password"
                  radius="none"
                  size="lg"
                  type={isVisible ? "text" : "password"}
                  variant="bordered"
                />
              </div>
              <button
                className="w-full py-2 text-white mt-4 bg-red-500 font-semibold rounded-lg hover:bg-red-600 transition-colors"
                type="submit"
              >
                Login
              </button>
            </TechForm>
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-500">
                Don’t have an account?
                <Link
                  className="text-red-700 hover:underline ml-1"
                  href="/register"
                >
                  Create one here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
