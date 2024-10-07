"use server";

import { FieldValues } from "react-hook-form";
import { cookies } from "next/headers";

import axiosInstance from "@/src/lib/AxiosInstence";

export const createUser = async (userData: FieldValues) => {
  try {
    const res = await axiosInstance.post("/user/create-user", userData);

    return res.data;
  } catch (error: any) {
    throw new Error(error.response.data.message || "Failed to create user");
  }
};

// login user
export const loginUser = async (userData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post("/auth/sign-in", userData);

    if (data.success) {
      cookies().set("accessToken", data?.data?.accessToken);
      cookies().set("refreshToken", data?.data?.refreshToken);
    }

    return data;
  } catch (error: any) {
    throw new Error(error.response.data.message || "Failed to login user");
  }
};

// logout user
export const logOut = () => {
  cookies().delete("accessToken");
  cookies().delete("refreshToken");
};

export const getCurrentUser = async () => {
  const accessToken = cookies().get("accessToken")?.value;

  if (accessToken) {
    try {
      const { data } = await axiosInstance.get("/user/get-me");

      if (data.success) {
        return data.data;
      } else {
        throw new Error(data.message || "Failed to fetch user");

        return null;
      }
    } catch (error: any) {
      throw new Error(error.response.data.message || "Failed to fetch user");

      return null;
    }
  }

  return null;
};

// export const getCurrentUser = async () => {
//   const accessToken = cookies().get("accessToken")?.value;
//   console.log(accessToken);

//   let decodedToken = null;

//   if (accessToken) {
//     decodedToken = await jwtDecode(accessToken);

//     return {
//       // _id: decodedToken._id,
//       name: decodedToken.name,
//       email: decodedToken.email,

//       role: decodedToken.role,
//       profileImage: decodedToken.profileImage,
//     };
//   }

//   return decodedToken;
// };

export const getNewAccessToken = async () => {
  try {
    const refreshToken = cookies().get("refreshToken")?.value;

    const res = await axiosInstance({
      url: "/auth/refresh-token",
      method: "POST",
      withCredentials: true,
      headers: {
        cookie: `refreshToken=${refreshToken}`,
      },
    });

    return res.data;
  } catch (error: any) {
    throw new Error(error.response.data.message || "Failed to refresh token");
  }
};

export const updateUser = async (userId: string, userData: FieldValues) => {
  try {
    const res = await axiosInstance.put(
      `/user/update-user/${userId}`,
      userData,
    );

    return res.data;
  } catch (error: any) {
    throw new Error(error.message || "Failed to update user");
  }
};
export const userRoleUpdate = async (userId: string) => {
  try {
    const res = await axiosInstance.put(`/auth/toggole-user-role/${userId}`);

    return res.data;
  } catch (error: any) {
    throw new Error(
      error.response.data.message || "Failed to update user role",
    );
  }
};
