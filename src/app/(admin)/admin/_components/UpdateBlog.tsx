import Dropdown from "@/src/components/formik/Dropdown";
import CustomModal from "@/src/components/ui/CustomModal";
import { useUpdatePostMutation } from "@/src/redux/features/post";
import { TErrorResponse } from "@/src/types";
import { Button } from "@nextui-org/button";
import { Form, Formik } from "formik";
import { useState } from "react";
import { toast } from "sonner";

const statusOptions = [
  {
    value: "true",
    name: "Active",
  },
  {
    value: "false",
    name: "In active",
  },
];

const UpdateBlog = ({ postId }: { postId: string }) => {
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);

  const [updatePost] = useUpdatePostMutation();

  const handleSubmit = async (values: { status: string }) => {
    const toastId = toast.loading("Post status updating!");

    // Create a new FormData object
    const formData = new FormData();

    // Serialize the object and append it as a JSON string
    const data = {
      isActive: values.status,
    };
    formData.append("data", JSON.stringify(data));

    try {
      setIsUpdateModalOpen(false);

      // Send formData with JSON stringified data
      const res = await updatePost({ id: postId, data: formData }).unwrap();

      if (res.success) {
        toast.success(res.message, { id: toastId, duration: 2000 });
      }
    } catch (error) {
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
        title="Update post visibility"
        footer={false}
      >
        <div>
          <Formik initialValues={{ status: "" }} onSubmit={handleSubmit}>
            {() => (
              <Form className="space-y-5 mb-4">
                <Dropdown options={statusOptions} name="status" />
                <Button
                  fullWidth
                  type="submit"
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

export default UpdateBlog;
