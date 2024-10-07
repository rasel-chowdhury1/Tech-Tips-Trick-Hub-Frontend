"use client";

import Image from "next/image";
import EditProfile from "./EditProfile";
import { TErrorResponse, TUserDetails } from "@/src/types";
import { useState } from "react";
import CustomModal from "@/src/components/ui/CustomModal";
import { Form, Formik } from "formik";
import { Button } from "@nextui-org/button";
import { toast } from "sonner";
import { useUpdateUserInfoMutation } from "@/src/redux/features/user";
import { TUser, useCurrentUser } from "@/src/redux/features/auth/authSlice";
import { useAppSelector } from "@/src/redux/hooks";
type TFormValues = {
  avatar: File | null; // Allowing avatar to be either a File or null
};
type TProps = {
  userDetails: TUserDetails;
};

const initialValues: TFormValues = {
  avatar: null,
};

const Cover = ({ userDetails }: TProps) => {
  const user = useAppSelector(useCurrentUser) as TUser;
  const [isChangePhotoModalOpen, setIsChangePhotoModalOpen] = useState(false);
  const [updateUserPhoto] = useUpdateUserInfoMutation();
  const handleSubmit = async (values: TFormValues) => {
    const toastId = toast.loading("Photo Changing please wait!");
    const formData = new FormData();
    if (values.avatar) {
      formData.append("avatar", values.avatar);
    }
    const userData = {
      name: userDetails.name,
    };

    formData.append("data", JSON.stringify(userData));
    setIsChangePhotoModalOpen(false);
    try {
      const res = await updateUserPhoto({
        id: userDetails._id,
        data: formData,
      }).unwrap();
      if (res.success) {
        toast.success(res.message, { id: toastId, duration: 2000 });
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
    <div className="relative">
      <Image
        src={"/bg/TechMaster.png"}
        alt="cover"
        height={500}
        width={1000}
        className="w-full h-[400px] object-cover"
      />
      <Image
        src={userDetails?.avatar}
        alt="profile"
        height={300}
        width={300}
        title="Change photo"
        onClick={() => setIsChangePhotoModalOpen(true)}
        className="object-cover rounded-full size-[250px] border-2 absolute lg:-bottom-[125px] lg:left-10 left-20 bottom-20 cursor-pointer"
      />
      {user?.id === userDetails?._id && <EditProfile userData={userDetails} />}
      <CustomModal
        isOpen={isChangePhotoModalOpen}
        onClose={() => setIsChangePhotoModalOpen(false)}
        title="Change Profile Photo"
        footer={false}
      >
        <div>
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            {({ setFieldValue }) => (
              <Form className="">
                <div className="space-y-5 ">
                  <div className="space-y-1">
                    <label
                      htmlFor="avatar"
                      className="block font-medium text-gray-700 dark:text-slate-100"
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
                  <Button type="submit">Update</Button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </CustomModal>
    </div>
  );
};

export default Cover;
