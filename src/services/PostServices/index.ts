"use server";
import { revalidateTag } from "next/cache";

import axiosInstance from "@/src/lib/AxiosInstence";
import { envConfig } from "@/src/config/envConfig";

export const getAllPosts = async () => {
  const res = await axiosInstance.get("/post");

  return res.data;
};

export const getPostById = async (postId: string) => {
  let fetchOptions = {};

  fetchOptions = {
    cache: "no-store",
    next: {
      tags: ["post"],
    },
  };
  const res = await fetch(`${envConfig.baseApi}/post/${postId}`, fetchOptions);

  const data = await res.json();

  return data;
};

export const createComment = async (
  postId: string,
  commentData: { user: string; content: string },
) => {
  try {
    const { data } = await axiosInstance.post(
      `/post/post-comment/${postId}`,
      commentData,
    );

    revalidateTag("post");

    return data;
  } catch (error) {
    throw new Error("Failed to create comment");
  }
};

export const editComment = async (
  postId: string,
  commentId: string,
  newComment: { content: string },
) => {
  try {
    const { data } = await axiosInstance.put(
      `/post/update-comment/${postId}/${commentId}`,
      newComment,
    );

    if (data?.success) {
      revalidateTag("post");

      return null;
    }
  } catch (error) {
    throw new Error("Failed to edit comment");
  }
};

export const deleteComment = async (postId: string, commentId: string) => {
  try {
    const { data } = await axiosInstance.delete(
      `/post/delete-comment/${postId}/${commentId}`,
    );

    if (data?.success) {
      revalidateTag("post");

      return null;
    }
  } catch (error: any) {
    throw new Error(error);
  }
};
export const votePost = async (postId: string, action: string) => {
  try {
    const { data } = await axiosInstance.put(`/post/${postId}/vote`, {
      action,
    });

    if (data?.success) {
      revalidateTag("post");

      return null;
    }
  } catch (error: any) {
    throw new Error(error);
  }
};
export const getMyPosts = async () => {
  try {
    const { data } = await axiosInstance.get("/post/my-posts");

    if (data?.success) {
      revalidateTag("post");

      return;
    }
  } catch (error: any) {
    throw new Error(error);
  }
};
