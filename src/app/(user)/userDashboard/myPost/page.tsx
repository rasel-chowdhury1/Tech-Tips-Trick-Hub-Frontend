"use client"
import ErrorBoundary from '@/src/components/ErrorBoundary';
import Filter from '@/src/components/module/articles/Filter';
import Loader from '@/src/components/ui/Loader';
import PostCard from '@/src/components/ui/PostCard';
import { useGetPostByAuthorQuery } from '@/src/redux/features/post';
import { useGetUserInfoQuery } from '@/src/redux/features/user';
import { TUserDetails } from '@/src/types';
import React, { Suspense } from 'react';

const MyPost = () => {
    const { data } = useGetUserInfoQuery("");
  const userDetails = data?.data as TUserDetails;
  const { data: userPosts } = useGetPostByAuthorQuery(userDetails?._id);
  const userAllPosts = userPosts?.data;
    return (
        <div>
            <ErrorBoundary fallback={<p>Error</p>}>
                <Suspense fallback={<Loader />}>
                
                    <div className="lg:w-[90%] lg:mx-auto">
                    <p className="text-xl font-bold mb-5">All posts</p>
                    <Filter/>
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
    );
};

export default MyPost;