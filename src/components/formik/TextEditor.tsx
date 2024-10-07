"use client";

import { ErrorMessage } from "formik";
import { useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
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

interface TextEditorProps {
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void;
}

const TextEditor = ({ setFieldValue }: TextEditorProps) => {
  const [content, setContent] = useState("");
  return (
    <div>
      <ReactQuill
        value={content}
        onChange={(value) => {
          setContent(value);
          setFieldValue("content", value);
        }}
        modules={modules}
        theme="snow"
      />
      <ErrorMessage name="content" component="p" className="text-danger" />
    </div>
  );
};

export default TextEditor;
