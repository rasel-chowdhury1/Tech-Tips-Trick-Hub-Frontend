"use client";
import Image from "next/image";

import TechModal from "../Modals/TechModal";

import ProfileFrom from "./ProfileFrom";
import ProfileSklaton from "./ProfileSklaton";

import { useUser } from "@/src/context/user.provider";

const ProfileHeader = () => {
  const { user, isLoading } = useUser();

  if (isLoading) {
    return <ProfileSklaton />;
  }

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        <div className=" relative h-40 w-40">
          <Image
            alt="Profile picture"
            className="rounded-full border w-full h-full object-cover"
            height={160}
            src={user?.profileImage || "https://i.ibb.co/hBpV37F/avater.png"}
            width={160}
          />

          <button className="absolute bottom-0 right-0 bg-gray-800 text-white rounded-full p-2">
            Note...
          </button>
        </div>
        <div className="flex-grow text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center justify-between mb-4">
            <h1 className="text-2xl font-semibold mb-2  md:mb-0">
              {user?.userName}
            </h1>
            <div className="space-x-2">
              <TechModal
                buttonText="Edit Profile"
                buttonVariant="bordered"
                title="Edit Profile"
              >
                <ProfileFrom />
              </TechModal>
            </div>
          </div>
          <div className="flex justify-center md:justify-start space-x-6 mb-4">
            <span>{/* <strong>{post?.length}</strong> posts */}</span>
            <span>
              <strong>{user?.followers?.length}</strong> followers
            </span>
            <span>
              <strong>{user?.following?.length}</strong> following
            </span>
          </div>
          <div className="mb-4 text-black">
            <h2 className="font-semibold text-xl light light:text-[#1A1A1A] dark dark:text-[#F9F9F9]">
              {user?.name}
            </h2>
            <p className="light  light:text-[#1A1A1A] dark dark:text-[#F9F9F9]">
              {user?.profession}
            </p>
            <p className="light text-[12px] light:text-[#1A1A1A] dark dark:text-[#F9F9F9]">
              {user?.bio}
            </p>
          </div>
          {/* <p className="text-sm text-gray-400">
              28 accounts reached in the last 30 days.{" "}
              <Link className="text-blue-400" href="#">
                View Insights
              </Link>
            </p> */}
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
