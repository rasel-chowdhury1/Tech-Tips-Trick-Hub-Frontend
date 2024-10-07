"use client";
import { Checkbox } from "@nextui-org/react";
import TechForm from "../../form/TechForm";
import { TechInput } from "../../form/TechInput";
import TechSelect from "../../form/TechSelect";
import dynamic from "next/dynamic";
import { useState } from "react";
import "react-quill/dist/quill.snow.css";
import { categoryOptions } from "@/src/constant";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image"],
    ["clean"],
  ],
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
];

const CreatePost = () => {
  const [isPremium, setIsPremium] = useState<boolean>(false);
  const [value, setValue] = useState("");

  const onSubmit = (data: any) => {
    console.log(data);
    console.log({value})
  };

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold text-center mb-5">Create Post</h2>
      <TechForm onSubmit={onSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <TechInput
              label="Post Title"
              name="title"
              radius="none"
              size="md"
              type="text"
              variant="bordered"
            />
          </div>
          <div>
            <TechSelect
              options={categoryOptions}
              label="Select Category"
              name="category"
              radius="none"
              size="md"
              type="email"
              variant="bordered"
            />
          </div>
        </div>

        <div className="mt-4">
          <ReactQuill
            className="rounded-lg border border-gray-300 p-2"
            formats={formats}
            modules={modules}
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
        <div className="mt-4">
          <Checkbox
            radius="full"
            value="ok"
            onChange={() => setIsPremium(!isPremium)}
            className="flex items-center text-lg"
          >
            <span className="ml-2">Available for premium users only</span>
          </Checkbox>
        </div>
        <div className="mt-6 flex justify-center">
          <button
            type="submit"
            className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
          >
            Publish Post
          </button>
        </div>
      </TechForm>
    </div>
  );
};

export default CreatePost;
