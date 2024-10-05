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

const genderOptions = [
  { key: "select-gender", label: "Select Gender" },
  { key: "male", label: "Male" },
  { key: "female", label: "Female" },
  { key: "other", label: "Other" },
];
const ProfileForm = () => {
  const { user, isSetLoading } = useUser();

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
    userId as string,
  );

  const onSubmit = async (data: any) => {
    const userData = {
      ...data,
      birthDate: dateToISO(data.birthDate),
    };

    try {
      await updateUserMutate(userData);
      isSetLoading(true);
    } catch (error) {
      console.error("Failed to update user:", error);
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

        {/* Submit Button */}
        <div className="mt-6 w-full pb-4 ">
          <button
            className={`w-full px-6 py-3 ${isPending ? "bg-gray-400" : "bg-blue-600"} text-white`}
            disabled={isPending}
            type="submit"
          >
            {isPending ? "Updating..." : "Submit"}
          </button>
        </div>
      </TechForm>
    </div>
  );
};

export default ProfileForm;
