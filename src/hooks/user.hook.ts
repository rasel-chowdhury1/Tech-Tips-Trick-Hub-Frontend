import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

import { toggleFollow } from "../services/UserServices/indext";

export const useToggleFollow = () => {
  return useMutation({
    mutationKey: ["follower"],
    mutationFn: async (userId: string) => await toggleFollow(userId),
    onSuccess: () => {
      toast.success("Follow Action successful!");
    },
    onError: () => {
      toast.error("Failed to perform action. Please try again later.");
    },
  });
};
