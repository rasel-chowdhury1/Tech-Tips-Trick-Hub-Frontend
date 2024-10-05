import { useMutation } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

import { createUser, loginUser, updateUser } from "../services/AuthServices";

export const useUserRegistration = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["USER_REGISTRATION"],
    mutationFn: async (userData) => await createUser(userData),
    onSuccess: () => {
      toast.success("User registered successfully", {
        duration: 1000,
        position: "top-center",
      });
    },
    onError: (error) => {
      console.log(error);
      toast.error(error.message, {
        duration: 1000,
        position: "top-center",
      });
    },
  });
};
// login

export const useUserLogin = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["USER_LOGIN"],
    mutationFn: async (userData) => await loginUser(userData),
    onSuccess: () => {
      toast.success("User logged in successfully", {
        duration: 1000,
        position: "top-center",
      });
    },
    onError: (error) => {
      toast.error(error.message, {
        duration: 1000,
        position: "top-center",
      });
    },
  });
};

export const useUserUpdate = (userId: string) => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["USER_UPDATE", userId],
    mutationFn: async (userData) => await updateUser(userId, userData),
    onSuccess: () => {
      toast.success("User updated successfully", {
        duration: 1000,
        position: "top-center",
      });
    },
    onError: (error) => {
      toast.error(error.message, {
        duration: 1000,
        position: "top-center",
      });
    },
  });
};
