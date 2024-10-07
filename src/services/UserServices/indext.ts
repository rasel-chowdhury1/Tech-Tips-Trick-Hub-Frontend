"use server";
import { revalidateTag } from "next/cache";

import axiosInstance from "@/src/lib/AxiosInstence";

export const toggleFollow = async (followingId: string) => {
  try {
    const { data } = await axiosInstance.put(
      `/user/toggle-follow/${followingId}`,
    );

    if (data.success) {
      revalidateTag("post");

      return null;
    }
  } catch (error: any) {
    throw new Error(error.message);
  }
};
export const getAllUsers = async () => {
  try {
    const { data } = await axiosInstance.get(`/user`);

    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const deleteUser = async (id: string) => {
  try {
    const { data } = await axiosInstance.delete(`/user/delete-user/${id}`);

    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const updateStatusUser = async (
  id: string,
  action: "block" | "unblock",
) => {
  try {
    const { data } = await axiosInstance.put(
      `/user/manage-status/${id}/status`,
      null,
      { params: { action } },
    );

    return data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message);
  }
};
