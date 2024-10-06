import { GrDislike } from "react-icons/gr";
import { TVoteProps } from "./UpVote";
import { toast } from "sonner";
import { TErrorResponse } from "@/src/types";
import { useDownvoteMutation } from "@/src/redux/features/vote";
import { useAppSelector } from "@/src/redux/hooks";
import { TUser, useCurrentUser } from "@/src/redux/features/auth/authSlice";

const DownVote = ({ votes, id }: TVoteProps) => {
  const user = useAppSelector(useCurrentUser) as TUser;
  const [createVote] = useDownvoteMutation();

  const hasVoted = user ? votes?.includes(user?.id) : false;

  const handleDownVote = async (id: string) => {
    if (!user) {
      toast.error("You need to log in first!");
      return;
    }
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
      <GrDislike className={`${hasVoted ? "text-primary" : ""} hover:text-primary`} />{" "}
      {votes?.length}
    </button>
  );
};

export default DownVote;