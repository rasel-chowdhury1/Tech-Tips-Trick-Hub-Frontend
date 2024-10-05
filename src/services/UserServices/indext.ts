import { revalidateTag } from "next/cache";

import axiosInstance from "@/src/lib/AxiosInstence";

export const toggleFollow = async (followingId: string) => {
  try {
    const { data } = await axiosInstance.put(
      `/user/${followingId}/follow-toggle`,
    );

    if (data.success) {
      revalidateTag("post");

      return null;
    }
  } catch (error: any) {
    throw new Error(error.message);
  }
};
