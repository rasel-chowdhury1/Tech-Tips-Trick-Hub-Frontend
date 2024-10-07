"use server";
import { jwtDecode } from "jwt-decode";
// import { cookies } from "next/headers";
export interface TDecodedUser {
  email: string;
  role: string;
  status: string;
  id: string;
  iat: number;
  exp: number;
}

export const getCurrentUser = async (): Promise<TDecodedUser | null> => {
  // const token = cookies().get("refreshToken")?.value;
  const token = localStorage.getItem("token");
  if (token) {
    const decodedToken = (await jwtDecode(token)) as TDecodedUser;

    const user: TDecodedUser = {
      id: decodedToken.id,
      email: decodedToken.email,
      role: decodedToken.role,
      status: decodedToken.status,
      iat: decodedToken.iat,
      exp: decodedToken.exp,
    };

    return user;
  }

  return null;
};
