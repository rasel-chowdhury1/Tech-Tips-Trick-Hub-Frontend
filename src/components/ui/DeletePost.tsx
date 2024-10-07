"use client";
import { Button } from "@nextui-org/button";
import { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import CustomModal from "./CustomModal";
import { toast } from "sonner";
import { TErrorResponse } from "@/src/types";
import { useDeletePostMutation } from "@/src/redux/features/post";

const DeletePost = ({ id }: { id: string }) => {
  const [isDeletePostModalOpen, setIsDeletePostModalOpen] = useState(false);

  const [deleteNow] = useDeletePostMutation();

  const handleSubmit = async () => {
    const toastId = toast.loading("Post deleting please wait!");
    try {
      const res = await deleteNow(id).unwrap();
      setIsDeletePostModalOpen(true);
      toast.success(res.message, { id: toastId, duration: 2000 });
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
    <div>
      <Button
        isIconOnly
        onClick={() => {
          setIsDeletePostModalOpen(true);
        }}
        className=""
      >
        <MdDeleteOutline className="text-lg" />
      </Button>
      <CustomModal
        isOpen={isDeletePostModalOpen}
        onClose={() => setIsDeletePostModalOpen(false)}
        footer={false}
        title="Delete Post"
      >
        <div className="flex flex-col justify-center items-center pb-4 space-y-4">
          <p>Are you sure?</p>
          <Button
            onClick={() => {
              handleSubmit();
            }}
            className=""
          >
            Deelete
          </Button>
        </div>
      </CustomModal>
    </div>
  );
};

export default DeletePost;
