"use client";
import { useGetUserInfoQuery } from "@/src/redux/features/user";
import Cover from "./Cover";
import { TPost, TUserDetails } from "@/src/types";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import PostCard from "@/src/components/ui/PostCard";
import { formatDateTime } from "@/src/utils/date";
import { Suspense, useState } from "react";
import { useGetPostByAuthorQuery } from "@/src/redux/features/post";
import FollowingModal from "./FollowingModal";
import FollowerModal from "./FollowerModal";
import Subscribe from "@/src/components/actions/Subscribe";
import ErrorBoundary from "@/src/components/ErrorBoundary";
import Loader from "@/src/components/ui/Loader";

const UserData = () => {
  const [isFollowerModalOpen, setIsFollowerModalOpen] = useState(false);
  const [isFollowingModalOpen, setIsFollowingModalOpen] = useState(false);
  const { data } = useGetUserInfoQuery("");
  const userDetails = data?.data as TUserDetails;
  const { data: userPosts } = useGetPostByAuthorQuery(userDetails?._id);
  const userAllPosts = userPosts?.data;
  return (
    <div>
      <ErrorBoundary fallback={<p>Error</p>}>
        <Suspense fallback={<Loader />}>
          <Cover userDetails={userDetails} />
        </Suspense>
      </ErrorBoundary>
      <div className="lg:mt-[125px] lg:px-10 lg:py-5 px-4 py-4 space-y-5">
        <div className="flex items-center gap-5">
          <p className="text-2xl font-bold">{userDetails?.name}</p>
          {userDetails?.status === "premium" ? (
            <RiVerifiedBadgeFill className="text-primary text-xl" />
          ) : (
            <Subscribe
              className="flex items-center gap-2 border rounded-xl px-3"
              title={
                <>
                  <RiVerifiedBadgeFill />
                  Get verified
                </>
              }
            />
          )}
        </div>
        <p>{userDetails?.address}</p>
        <p>Joined {formatDateTime(userDetails?.createdAt)}</p>
        <div className="flex items-center gap-5">
          <button onClick={() => setIsFollowingModalOpen(true)}>
            {userDetails?.following.length} Following
          </button>
          <button onClick={() => setIsFollowerModalOpen(true)}>
            {userDetails?.followers.length} Followers
          </button>
        </div>
        <hr />
        <ErrorBoundary fallback={<p>Error</p>}>
          <Suspense fallback={<Loader />}>
            <div className="lg:w-1/2 lg:mx-auto">
              <p className="text-xl font-bold mb-5">All posts</p>
              {userPosts?.data.length > 0 ? (
                <PostCard data={userAllPosts} editingSystem={true} />
              ) : (
                <p className="text-lg font-semibold text-center">
                  No posts available
                </p>
              )}
            </div>
          </Suspense>
        </ErrorBoundary>
      </div>
      <FollowingModal
        isOpen={isFollowingModalOpen}
        onClose={() => setIsFollowingModalOpen(false)}
        following={userDetails?.following || []}
      />

      <FollowerModal
        isOpen={isFollowerModalOpen}
        onClose={() => setIsFollowerModalOpen(false)}
        followers={userDetails?.followers || []}
      />
    </div>
  );
};

export default UserData;
