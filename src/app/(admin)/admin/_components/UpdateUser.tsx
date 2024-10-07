"use client";
import Dropdown from "@/src/components/formik/Dropdown";
import CustomModal from "@/src/components/ui/CustomModal";
import { useUpdateUserRoleMutation } from "@/src/redux/features/user";
import { TErrorResponse } from "@/src/types";
import { Button } from "@nextui-org/button";
import { Form, Formik } from "formik";
import { useState } from "react";
import { toast } from "sonner";

const statusOptions = [
  {
    value: "user",
    name: "User",
  },
  {
    value: "admin",
    name: "Admin",
  },
];

const UpdateUser = ({ userId }: { userId: string }) => {
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [updateUserRole] = useUpdateUserRoleMutation();
  const handleSubmit = async (values: { status: string }) => {
    const toastId = toast.loading("User status updating!");
    const data = {
      role: values.status,
    };
    try {
      setIsUpdateModalOpen(false);
      const res = await updateUserRole({ id: userId, data }).unwrap();
      if (res.success) {
        toast.success(res.message, { id: toastId, duration: 2000 });
      }
    } catch (error) {
      console.log(error);
      setIsUpdateModalOpen(false);
      const err = error as TErrorResponse;
      toast.error(err.data.errorMessages[0].message || "Something went wrong", {
        id: toastId,
        duration: 2000,
      });
    }
  };
  return (
    <>
      <Button
        onClick={() => setIsUpdateModalOpen(true)}
        size="sm"
        color="primary"
      >
        Edit
      </Button>
      <CustomModal
        isOpen={isUpdateModalOpen}
        onClose={() => setIsUpdateModalOpen(false)}
        title="Update role"
        footer={false}
      >
        <div>
          <Formik initialValues={{ status: "" }} onSubmit={handleSubmit}>
            {() => (
              <Form className="space-y-5 mb-4">
                <Dropdown options={statusOptions} name="status" />
                <Button
                  type="submit"
                  fullWidth
                  className="custom-btn-secondary"
                >
                  Update
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </CustomModal>
    </>
  );
};

export default UpdateUser;
