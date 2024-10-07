"use client";

import Link from "next/link";
import React, { ChangeEvent, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

import TechForm from "@/src/components/form/TechForm";
import { TechInput } from "@/src/components/form/TechInput";
import TechSelect from "@/src/components/form/TechSelect";
import TechDatePicker from "@/src/components/form/TechDatePicker";
import { dateToISO } from "@/src/utils/dateToISo";
import { useUserRegistration } from "@/src/hooks/auth.hook";
import uploadImageToCloudinary from "@/src/utils/uploadImage";

const RegisterPage = () => {
  const { mutate: handleUserRegistration } = useUserRegistration();
  const [isVisible, setIsVisible] = React.useState(false);
  const [imageUploadLoading, setImageUploadLoading] = useState(false);
  const [profileImage, setProfileImage] = useState<string | "">("");
  const toggleVisibility = () => setIsVisible(!isVisible);

  const genderOptions = [
    { key: "select-gender", label: "Select Gender" },
    { key: "male", label: "Male" },
    { key: "female", label: "Female" },
    { key: "other", label: "Other" },
  ];

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const userData = {
      ...data,
      birthDate: dateToISO(data.birthDate),
      profileImage: profileImage,
    };

    handleUserRegistration(userData);
  };

  const handleImageChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      return;
    }
    setImageUploadLoading(true);

    try {
      const files = await uploadImageToCloudinary(e.target.files);

      if (files && files.length > 0) {
        setProfileImage(files);
      }
    } catch (error: any) {
      toast.error("Error uploading image:", error);
    } finally {
      setImageUploadLoading(false);
    }
  };

  return (
    <div className="py-8">
      <div className="bg-[#F9F9F9] dark:bg-[#1A1A1A] p-6 lg:p-10">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-3xl lg:text-4xl font-semibold text-center md:text-left">
            My Account
          </h1>
        </div>
      </div>
      <div className="py-8 px-4 sm:px-8 lg:px-12">
        <div className="mt-6 md:mt-12 w-full max-w-lg mx-auto text-center">
          <h2 className="mb-3 text-xl lg:text-2xl font-semibold">
            Please Register
          </h2>
          <p className="mb-6 text-base lg:text-lg">
            If you already have an account, please log in to continue.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center w-full max-w-4xl bg-[#F9F9F9] dark:bg-[#1A1A1A] mx-auto mt-4 p-5 md:p-10 mb-8 lg:mb-16 border rounded-lg">
          <TechForm
            // resolver={zodResolver(RegisterValidationSchema)}
            onSubmit={onSubmit}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="mb-4">
                <TechInput
                  label="User Name"
                  name="name"
                  radius="none"
                  size="md"
                  type="text"
                  variant="bordered"
                />
              </div>
              <div className="mb-4">
                <TechInput
                  label="Email"
                  name="email"
                  radius="none"
                  size="md"
                  type="email"
                  variant="bordered"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="mb-4">
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
                  size="md"
                  type={isVisible ? "text" : "password"}
                  variant="bordered"
                />
              </div>
              <div className="mb-4">
                <TechSelect
                  label="Gender"
                  name="gender"
                  options={genderOptions}
                  radius="none"
                  size="lg"
                  type="select"
                  variant="bordered"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="mb-4">
                <TechDatePicker
                  label="Date Of Birth"
                  name="birthDate"
                  radius="none"
                />
              </div>
              <div className="mb-4">
                <TechInput
                  label="Address"
                  name="address"
                  radius="none"
                  size="md"
                  type="text"
                  variant="bordered"
                />
              </div>
            </div>

            <div className="mb-4 w-full">
              <label
                className="flex h-14 w-full cursor-pointer items-center justify-center rounded-xl border-2 border-default-200 text-default-500 shadow-sm transition-all duration-100 hover:border-default-400"
                htmlFor="image"
              >
                Upload image
              </label>
              <input
                className="hidden"
                id="image"
                type="file"
                onChange={(e) => handleImageChange(e)}
              />
            </div>

            <button
              className="w-full py-2 text-white mt-4 bg-red-500 font-semibold"
              type="submit"
              disabled={imageUploadLoading}
            >
              Register
            </button>
          </TechForm>

          <div className="mt-4 text-center">
            <p className="text-sm text-gray-500">
              Already have an account?
              <Link className="text-red-700 hover:underline ml-1" href="/login">
                Login here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
