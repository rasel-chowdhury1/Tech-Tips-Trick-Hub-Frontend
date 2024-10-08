"use client";
import Dropdown from "@/src/components/formik/Dropdown";
import FormikInput from "@/src/components/formik/FormikInput";
import { useCreatePostMutation } from "@/src/redux/features/post";
import { TErrorResponse } from "@/src/types";
import * as Yup from "yup";
import { Button } from "@nextui-org/button";
import { ErrorMessage, Form, Formik } from "formik";
import dynamic from "next/dynamic";
import { useState } from "react";
import "react-quill/dist/quill.snow.css";
import { toast } from "sonner";
import { useAppSelector } from "@/src/redux/hooks";
import { TUser, useCurrentUser } from "@/src/redux/features/auth/authSlice";

export const tagOptions = [
  {
    value: "regular",
    name: "Regular",
  },
  {
    value: "premium",
    name: "Premium",
  },
];
export const categoryOptions = [
  { value: "Watch", name: "watch" },
  { value: "Software Engineering", name: "software_engineering" },
  { value: "Tech", name: "tech" },
  { value: "ML", name: "ml" },
  { value: "VR", name: "vr" },
  { value: "Mobile", name: "mobile" },
  { value: "Macbook", name: "macbook" },
  { value: "Gaming", name: "gaming" },
  { value: "Others", name: "others" },
];
const initialValues: TFormValues = {
  title: "",
  content: "",
  tag: "regular", // Default tag
  category: "travel", // Default category
  image: null,
};
export const createPostValidationSchema = Yup.object<TFormValues>({
  title: Yup.string()
    .required("Title is required")
    .test("min-words", "Title must have at least 3 words", (value) => {
      return value ? value.trim().split(/\s+/).length >= 3 : false;
    }),
  content: Yup.string().required("Content is required"),
  image: Yup.mixed().required("You must upload cover image"),
});

// Dynamically import ReactQuill to prevent SSR issues
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

// Custom toolbar configuration
const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike"], // text formatting
    [{ list: "ordered" }, { list: "bullet" }], // lists
    ["link", "image"], // add link and image
    [{ align: [] }],
    ["clean"], // remove formatting
  ],
};

type TProps = {
  authorId: string;
  onClose: () => void;
};
type TFormValues = {
  title: string;
  content: string;
  tag: string;
  category: string;
  image: File | null;
};

// Main CustomEditor component
const CustomEditor = ({ authorId, onClose }: TProps) => {
  const [content, setContent] = useState("");
  const [createPost] = useCreatePostMutation();

  const user = useAppSelector(useCurrentUser) as TUser;

  const handleCreatePost = async (values: TFormValues) => {
    const toastId = toast.loading("Post creating!");
    try {
      const formData = new FormData();
      const data = {
        title: values.title,
        content: values.content,
        tags: values.tag,
        category: values.category,
        author: authorId,
      };
      formData.append("data", JSON.stringify(data));
      if (values.image) {
        formData.append("image", values.image);
      }
      const res = await createPost(formData).unwrap();
      if (await res.success) {
        onClose();
        toast.success("Post created successfully", {
          id: toastId,
          duration: 2000,
        });
      }
    } catch (error) {
      onClose();
      const err = error as TErrorResponse;
      toast.error(err.data.errorMessages[0].message || "Something went wrong", {
        id: toastId,
        duration: 2000,
      });
    }
  };

  const filteredTagOptions =
    user?.status !== "premium"
      ? tagOptions.filter((option) => option.value !== "premium")
      : tagOptions;

  return (
    <div className="mb-5">
      <Formik
        initialValues={initialValues}
        validationSchema={createPostValidationSchema}
        onSubmit={handleCreatePost}
      >
        {({ setFieldValue }) => {
          return (
            <Form className="space-y-5">
              <FormikInput name="title" label="Title" />
              <ReactQuill
                value={content}
                onChange={(value) => {
                  setContent(value);
                  setFieldValue("content", value);
                }}
                modules={modules}
                theme="snow"
              />
              <ErrorMessage
                name="content"
                component="p"
                className="text-danger"
              />
              <Dropdown options={filteredTagOptions} name="tag" label="Tag" />
              <Dropdown
                options={categoryOptions}
                name="category"
                label="Category"
              />
              <div className="space-y-1">
                <label htmlFor="image" className="block font-medium">
                  Upload cover photo
                </label>
                <input
                  id="image"
                  type="file"
                  className="block w-full text-sm text-gray-900 border border-gray-300 cursor-pointer bg-gray-50 focus:outline-none"
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
      {/* Preview of the editor's content */}
      {/* <div>
        <h2>Preview</h2>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div> */}
    </div>
  );
};

export default CustomEditor;