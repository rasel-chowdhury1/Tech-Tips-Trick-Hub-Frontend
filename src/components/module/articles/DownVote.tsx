import { FaAnglesDown } from "react-icons/fa6";
import { TVoteProps } from "./UpVote";
import { toast } from "sonner";
import { TErrorResponse } from "@/src/types";
import { useDownvoteMutation } from "@/src/redux/features/vote";

const DownVote = ({ votes, id }: TVoteProps) => {
  const [createVote] = useDownvoteMutation();
  const handleDownVote = async (id: string) => {
    const toastId = toast.loading("Down vote  posting");
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
      onClick={() => handleDownVote(id)}
      className="flex items-center justify-center w-full gap-2 p-2"
    >
      <FaAnglesDown /> {votes?.length}
    </button>
  );
};

export default DownVote;
