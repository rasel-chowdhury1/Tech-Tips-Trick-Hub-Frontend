"use client";
import { useUpdatePostMutation } from "@/src/redux/features/post";
import { TErrorResponse, TPost } from "@/src/types";
import { Button } from "@nextui-org/button";
import { useState } from "react";
import { FiEdit3 } from "react-icons/fi";
import { toast } from "sonner";
import CustomModal from "./CustomModal";
import { ErrorMessage, Form, Formik } from "formik";
import FormikInput from "../formik/FormikInput";
import {
  categoryOptions,
  createPostValidationSchema,
  tagOptions,
} from "../module/articles/create-post/CustomEditor";
import Dropdown from "../formik/Dropdown";
import TextEditor from "../formik/TextEditor";

type TProps = {
  postDetails: TPost;
};

type TFormValues = {
  title: string;
  content: string;
  tag: string;
  category: string;
  image: File | string;
};

const EditPost = ({ postDetails }: TProps) => {
  const [isEditPostModalOpen, setIsEditPostModalOpen] = useState(false);
  const [updatePost] = useUpdatePostMutation();

  const initialValues: TFormValues = {
    title: postDetails.title,
    content: postDetails.content,
    tag: postDetails.tags,
    category: postDetails.category,
    image: postDetails?.cover || postDetails?.images[0],
  };

  const handleSubmit = async (values: TFormValues) => {
    const toastId = toast.loading("Post creating!");
    setIsEditPostModalOpen(false);
    try {
      const formData = new FormData();
      const data = {
        title: values.title,
        content: values.content,
        tags: values.tag,
        category: values.category,
      };
      formData.append("data", JSON.stringify(data));
      if (values.image) {
        formData.append("image", values.image);
      }
      const res = await updatePost({
        id: postDetails._id,
        data: formData,
      }).unwrap();
      if (await res.success) {
        toast.success("Post created successfully", {
          id: toastId,
          duration: 2000,
        });
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
    <div>
      <Button
        onClick={() => {
          setIsEditPostModalOpen(true);
        }}
        isIconOnly
        className=""
      >
        <FiEdit3 className="text-lg" />
      </Button>
      <CustomModal
        isOpen={isEditPostModalOpen}
        onClose={() => setIsEditPostModalOpen(false)}
        footer={false}
        title="Update Post"
        size="4xl"
      >
        <div className="pb-4 space-y-4">
          <Formik
            initialValues={initialValues}
            validationSchema={createPostValidationSchema}
            onSubmit={handleSubmit}
          >
            {({ setFieldValue, values }) => {
              return (
                <Form className="space-y-5">
                  <FormikInput name="title" label="Title" />
                  <TextEditor setFieldValue={setFieldValue} />

                  <Dropdown options={tagOptions} name="tag" label="Tag" />
                  <Dropdown
                    options={categoryOptions}
                    name="category"
                    label="Category"
                  />
                  <div className="space-y-1">
                    <label htmlFor="image" className="block font-medium">
                      Upload cover photo <br />
                      <span className="text-sm">
                        (Leave this if you don&apos;t want to update cover)
                      </span>
                    </label>
                    <input
                      id="image"
                      type="file"
                      className="block w-full text-sm text-gray-900 border border-gray-300 cursor-pointer bg-gray-50 focus:outline-none mt-3"
                      onChange={(e) => {
                        const file = e.target.files ? e.target.files[0] : null;
                        setFieldValue("image", file);
                      }}
                    />
                    <ErrorMessage
                      name="image"
                      component="p"
                      className="text-danger"
                    />
                  </div>
                  <div className="flex justify-end">
                    <Button type="submit">Post</Button>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </CustomModal>
    </div>
  );
};

export default EditPost;
