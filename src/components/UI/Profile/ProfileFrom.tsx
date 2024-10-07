import { zodResolver } from "@hookform/resolvers/zod";

import TechDatePicker from "../../form/TechDatePicker";
import TechForm from "../../form/TechForm";
import { TechInput } from "../../form/TechInput";
import TechSelect from "../../form/TechSelect";
import { TechTextArea } from "../../form/TechTextAera";

import { userUpdateValidationSchema } from "@/src/schema/login.schema";
import { dateToISO } from "@/src/utils/dateToISo";
import { useUser } from "@/src/context/user.provider";
import { useUserUpdate } from "@/src/hooks/auth.hook";
import { ChangeEvent, useState } from "react";
import uploadImageToCloudinary from "@/src/utils/uploadImage";
import { toast } from "sonner";

const genderOptions = [
  { key: "select-gender", label: "Select Gender" },
  { key: "male", label: "Male" },
  { key: "female", label: "Female" },
  { key: "other", label: "Other" },
];
const ProfileForm = () => {
  const { user, isSetLoading } = useUser();

  const [profileImage, setProfileImage] = useState<string | "">(
    user?.profileImage as string
  );
  const [imageUploadLoading, setImageUploadLoading] = useState(false);

  const defaultValues = {
    name: user?.name || "",
    birthDate: user?.birthDate ? new Date(user.birthDate) : null,
    gender: user?.gender || "",
    address: user?.address || "",
    profession: user?.profession || "",
    bio: user?.bio || "",
  };

  const userId = user?._id;
  const { mutate: updateUserMutate, isPending } = useUserUpdate(
    userId as string
  );

  const onSubmit = async (data: any) => {
    const userData = {
      ...data,
      birthDate: dateToISO(data.birthDate),
      profileImage: profileImage,
    };
    console.log(userData);

    try {
      await updateUserMutate(userData);
      isSetLoading(true);
    } catch (error: any) {
      new Error(error.message || "Failed to update user");
    }
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
    <div className="w-full">
      <TechForm
        defaultValues={defaultValues}
        resolver={zodResolver(userUpdateValidationSchema)}
        onSubmit={onSubmit}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Name Field */}
          <div className="mb-4">
            <TechInput
              label="Name"
              name="name"
              radius="none"
              size="md"
              type="text"
              variant="bordered"
            />
          </div>

          {/* Birth Date Field */}
          <div className="mb-4">
            <TechDatePicker
              label="Date Of Birth"
              name="birthDate"
              radius="none"
              size="lg"
            />
          </div>

          {/* Gender Field */}
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

          {/* Address Field */}
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
          {/* Address Field */}
          <div className="mb-4 md:col-span-2">
            <TechInput
              label="Profession"
              name="profession"
              radius="none"
              size="md"
              type="text"
              variant="bordered"
            />
          </div>

          {/* Bio Field */}
          <div className="mb-4 md:col-span-2">
            <TechTextArea
              label="Bio"
              name="bio"
              radius="none"
              size="lg"
              type="textarea"
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

        {/* Submit Button */}
        <div className="mt-6 w-full pb-4 ">
          <button
            className={`w-full px-6 py-3 ${isPending ? "bg-gray-400" : "bg-pink-600"} text-white`}
            disabled={imageUploadLoading || isPending}
            type="submit"
          >
            Update Profile
          </button>
        </div>
      </TechForm>
    </div>
  );
};

export default ProfileForm;
