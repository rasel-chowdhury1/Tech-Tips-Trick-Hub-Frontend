"use client";
import { TUser, useCurrentUser } from "@/src/redux/features/auth/authSlice";
import { useFollowMutation } from "@/src/redux/features/follow";
import { useAppSelector } from "@/src/redux/hooks";
import { TErrorResponse, TPostAuthor } from "@/src/types";
import { Button } from "@nextui-org/button";
import { toast } from "sonner";

type TProps = {
  author: TPostAuthor;
  className?: string;
};

const Follow = ({ author, className }: TProps) => {
  const user = useAppSelector(useCurrentUser) as TUser | null;
  const isFollowing = user ? author?.followers?.includes(user.id) : false;
  const [followNow] = useFollowMutation();

  const handleFollow = async () => {
    if (!user) {
      toast.error("You need to log in to follow this author.");
      return;
    }
    const toastId = toast.loading("Processing follow...");
    const data = {
      userId: user.id,
      targetedId: author._id,
    };
    try {
      const res = await followNow(data).unwrap();
      toast.success(res.data, { id: toastId, duration: 2000 });
    } catch (error) {
      console.error("error:", error);
      const err = error as TErrorResponse;
      toast.error(err.data.errorMessages[0].message || "Something went wrong", {
        id: toastId,
        duration: 2000,
      });
    }
  };

  return (
    <div>
      {user && user.id !== author._id && (
        <Button onClick={handleFollow} className={className}>
          {isFollowing ? "Unfollow" : "Follow"}
        </Button>
      )}
    </div>
  );
};

export default Follow;
