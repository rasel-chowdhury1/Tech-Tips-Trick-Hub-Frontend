import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import {
  deleteUser,
  getAllUsers,
  toggleFollow,
  updateStatusUser,
} from "../services/UserServices/indext";

export const useToggleFollow = () => {
  return useMutation({
    mutationKey: ["follower"],
    mutationFn: async (followingId: string) => await toggleFollow(followingId),

    onError: () => {
      toast.error("Failed to perform action. Please try again later.");
    },
  });
};

export const useGetAllUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: async () => await getAllUsers(),
  });
};

export const useDeletedUser = () => {
  const QueryClient = useQueryClient();

  return useMutation({
    mutationKey: ["delete-user"],
    mutationFn: async (id: string) => await deleteUser(id),
    onSuccess: () => {
      QueryClient.invalidateQueries("users");
      toast.success("User deleted successfully.");
    },
    onError: () => {
      toast.error("Failed to delete user. Please try again later.");
    },
  });
};

export const useUpdateStatusUser = () => {
  const QueryClient = useQueryClient();

  return useMutation({
    mutationKey: ["manage-status"],
    mutationFn: async ({
      id,
      action,
    }: {
      id: string;
      action: "block" | "unblock";
    }) => {
      return await updateStatusUser(id, action);
    },
    onSuccess: () => {
      QueryClient.invalidateQueries("users");
      toast.success("User status updated successfully.");
    },
    onError: (error: any) => {
      toast.error(error.message);
    },
  });
};
