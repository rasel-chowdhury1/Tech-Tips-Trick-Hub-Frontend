"use client";
import { useUpvoteMutation } from "@/src/redux/features/vote";
import { TErrorResponse } from "@/src/types";
import { FaAnglesUp } from "react-icons/fa6";
import { toast } from "sonner";
export type TVoteProps = {
  votes: string[];
  id: string;
};
const UpVote = ({ votes, id }: TVoteProps) => {
  const [createVote] = useUpvoteMutation();
  const handleUpVote = async (id: string) => {
    const toastId = toast.loading("Upvote  posting");
    try {
      const res = await createVote(id).unwrap();
      toast.success(res.message, { id: toastId, duration: 2000 });
    } catch (error) {
      const err = error as TErrorResponse;
      toast.error(err?.data?.errorMessages[0].message, {
        id: toastId,
        duration: 2000,
      });
    }
  };
  return (
    <button
      onClick={() => handleUpVote(id)}
      className="flex items-center justify-center gap-2 p-2 w-full"
    >
      <FaAnglesUp /> {votes?.length}
    </button>
  );
};

export default UpVote;
