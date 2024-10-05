import { z } from "zod";

export const RegisterValidationSchema = z.object({
  name: z.string().trim().min(6, "Name must be at least 3 characters"),
  gender: z.string().trim().min(3, "Gender is required"),
  // address: z.string().trim().min(10, "Address is required"),
  email: z.string().trim().email("Please enter a valid email"),
  password: z.string().trim().min(6, "Password must be at least 6 characters"),
  birthDate: z.date().min(new Date(1900, 1, 1), "Please enter a valid date"),
  profileImage: z.string().url("Please enter a valid URL"),
});
export const userUpdateValidationSchema = z.object({
  name: z
    .string()
    .trim()
    .min(6, "Name must be at least 6 characters")
    .optional(),
  gender: z.string().trim().min(3, "Gender is required").optional(),
  address: z.string().trim().min(10, "Address is required").optional(),
  profession: z.string().trim().min(3, "Profession is required").optional(),
  bio: z.string().trim().min(10, "Bio is required").optional(),
  // birthDate: z.date().min(new Date(1900, 1, 1), "Please enter a valid date"),
});
export const loginValidationSchema = z.object({
  email: z.string().trim().email("Please enter a valid email"),
  password: z.string().trim().min(6, "Password must be at least 6 characters"),
});
