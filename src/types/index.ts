export interface TPost {
  _id: string;
  title: string;
  content: string;
  images: string[];
  cover: string;
  tags: string;
  upVotes: any[];
  downVotes: any[];
  commentsCount: number;
  author: TPostAuthor;
  category: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface TPostDetails {
  _id: string;
  title: string;
  content: string;
  images: string[];
  cover: string;
  tags: string;
  upVotes: string[];
  downVotes: any[];
  commentsCount: number;
  author: TPostDetailsAuthor;
  category: string;
  comments: any[];
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface TPostDetailsAuthor {
  _id: string;
  name: string;
  email: string;
  avatar: string;
}

export interface TPopularPost {
  _id: string;
  title: string;
  content: string;
  tags: string;
  upVotes: string[];
  author: TPostAuthor;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface TPostAuthor {
  _id: string;
  name: string;
  email: string;
  avatar: string;
  followers: string[];
}

export interface TFollowUser {
  _id: string;
  name: string;
  avatar: string;
}

export interface TComment {
  _id: string;
  postId: string;
  userId: TPostAuthor;
  feedback: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface TUserDetails {
  _id: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  status: string;
  address?: string;
  avatar: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  following: TUserFollowing[];
  followers: TUserFollower[];
}

export interface TUserFollowing {
  _id: string;
  name: string;
  avatar: string;
}

export interface TUserFollower {
  _id: string;
  name: string;
  avatar: string;
}

// icons
import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface IInput {
  variant?: "flat" | "bordered" | "faded" | "underlined";
  size?: "sm" | "md" | "lg";
  required?: boolean;
  defaultValue?: string;
  type?: string;
  label: string;
  placeholder?: string;
  name: string;
  isDisabled?: boolean;
}

export type TRole = "admin" | "user";
export type TUser = {
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
  profilePicture: string;
  passwordChangedAt: Date;
  _id?: string;
  bio: string;
  gender?: string;
  premiumMember?: boolean;
  transactionId?: string;
  status: "in-progress" | "blocked";
  isDeleted: boolean;
  role?: TRole;
};

// error
export interface TErrorMessage {
  path: string;
  message: string;
}

export interface TErrorResponse {
  status: number;
  data: {
    success: boolean;
    message: string;
    errorMessages: TErrorMessage[];
  };
}
