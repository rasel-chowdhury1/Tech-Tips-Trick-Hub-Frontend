"use client";
import { TUser, useCurrentUser } from "@/src/redux/features/auth/authSlice";
import { useAppSelector } from "@/src/redux/hooks";
import Image from "next/image";
import CustomEditor from "./CustomEditor";
import { useState, useEffect } from "react";
import CustomModal from "@/src/components/ui/CustomModal";
import Link from "next/link";

const CreatePost = () => {
  const user = useAppSelector(useCurrentUser) as TUser;
  const [isMounted, setIsMounted] = useState(false);
  const [isEditorModalOpen, setIsEditorModalOpen] = useState(false);
  // Ensure this runs only on the client
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Avoid rendering on the server
  }

  return (
    <>
      {!user ? (
        <div className="pt-4 text-center">
          <p className="text-lg font-medium text-primary">
            Please <Link href="/login">log in</Link> to share your thoughts.
          </p>
        </div>
      ) : (
        <div className="pt-4">
          <p className="text-lg font-medium mb-5">Have anything on mind?</p>
          <div className="flex items-center gap-5">
            <Image
              src={user?.avatar || "/anonymous-user.png"}
              height={100}
              width={100}
              alt={"user"}
              className="size-[60px] rounded-full border object-cover"
            />
            <input
              onClick={() => setIsEditorModalOpen(true)}
              type="text"
              className="rounded-full w-full h-[60px] border px-5"
              placeholder="Share your thoughts...!"
            />
          </div>
          <CustomModal
            isOpen={isEditorModalOpen}
            onClose={() => setIsEditorModalOpen(false)}
            footer={false}
            title="Editor"
            size="5xl"
          >
            <CustomEditor
              onClose={() => setIsEditorModalOpen(false)}
              authorId={user?.id}
            />
          </CustomModal>
        </div>
      )}
    </>
  );
};

export default CreatePost;
