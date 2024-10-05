import { useMutation, useQuery } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

import {
  createComment,
  deleteComment,
  editComment,
  getAllPosts,
  getMyPosts,
  votePost,
} from "../services/PostServices";

export const usePostComment = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["post-comment"],
    mutationFn: async ({ postId, comment }) =>
      await createComment(postId, comment),
    onError: () => {
      toast.error("Failed to post comment!");
    },
  });
};

export const useDeleteComment = () => {
  return useMutation({
    mutationKey: ["delete-comment"],
    mutationFn: async ({
      postId,
      commentId,
    }: {
      postId: string;
      commentId: string;
    }) => await deleteComment(postId, commentId),
    onError: () => {
      toast.error("Failed to delete comment!");
    },
  });
};

export const useEditComment = () => {
  return useMutation({
    mutationKey: ["edit-comment"],
    mutationFn: async ({
      postId,
      commentId,
      comment,
    }: {
      postId: string;
      commentId: string;
      comment: { content: string };
    }) => await editComment(postId, commentId, comment),
    onError: () => {
      toast.error("Failed to edit comment!");
    },
  });
};

export const useGetAllPosts = () => {
  return useQuery({
    queryKey: ["all-posts"],
    queryFn: async () => await getAllPosts(),
  });
};

export const useVotePost = () => {
  return useMutation<any, Error, { postId: string; action: string }>({
    mutationKey: ["vote-post"],
    mutationFn: async ({ postId, action }) => await votePost(postId, action),
    onError: () => {
      toast.error("Failed to vote post!");
    },
  });
};
export const useGetMyPosts = () => {
  return useQuery({
    queryKey: ["my-posts"],
    queryFn: async () => await getMyPosts(),
  });
};
