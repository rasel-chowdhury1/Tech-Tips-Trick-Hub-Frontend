import FormikInput from "@/src/components/formik/FormikInput";
import { useUpdateUserInfoMutation } from "@/src/redux/features/user";
import { TErrorResponse, TUserDetails } from "@/src/types";
import { Button } from "@nextui-org/button";
import { Form, Formik } from "formik";
import { toast } from "sonner";
interface TFormValues {
  name: string;
  phone: string;
  address: string;
}
type TProps = {
  userData: TUserDetails;
};
const EditProfileDetails = ({ userData }: TProps) => {
  const [updateUser] = useUpdateUserInfoMutation();

  const initialValues = {
    name: userData?.name || "",
    phone: userData?.phone || "",
    address: userData?.address || "",
  };

  const handleSubmit = async (values: TFormValues) => {
    const toastId = toast.loading("Profile updating in progress!");
    const formData = new FormData();
    // Append stringified values to FormData
    formData.append(
      "data",
      JSON.stringify({
        name: values.name,
        phone: values.phone,
        address: values.address,
      })
    );
    try {
      const res = await updateUser({
        id: userData._id,
        data: formData,
      }).unwrap();
      console.log("res:", res);
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
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className="">
        <div className="space-y-5">
          <FormikInput name="name" label="Name" />
          <FormikInput name="address" label="Address" />
          <FormikInput name="phone" label="Phone" />
          <Button type="submit">Update</Button>
        </div>
      </Form>
    </Formik>
  );
};

export default EditProfileDetails;
