"use client";
import { CalendarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaRegComment, FaVoteYea } from "react-icons/fa";

import PostCardSkeleton from "../UI/Skeleton/PostCardSkeleton";

import BannerSection from "./BannerSection";

import { PostProps } from "@/src/types";

const TopNews = ({ posts, topLoading }: PostProps) => {
  if (topLoading) {
    return <PostCardSkeleton />;
  }

  return (
    <div className="container mx-auto ">
      <h1 className="text-4xl  mb-8 uppercase text-pink-500 font-bold">
        Trending
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* First Card */}
        {posts.slice(3, 6).map((post) => (
          <div key={post._id} className="relative group">
            <div className="overflow-hidden relative ">
              <Image
                alt="Small robot"
                className="object-cover cursor-pointer w-full h-[250px] transition-transform duration-300 group-hover:scale-110"
                height={250}
                src={post.images[0]}
                width={400}
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
              <span className="inline-block bg-pink-500 text-white px-3 py-1 text-sm font-semibold  mb-2">
                {post?.category}
              </span>
              <Link
                className="text-white block text-lg font-bold mb-1 cursor-pointer hover:underline"
                href={`/${post._id}`}
              >
                {post?.title}
              </Link>
              <div className="flex items-center md:text-[10px] text-[8px] light light:text-[#F9F9F9]">
                <span className="md:text-[14px] text-xs">
                  By {post?.author?.name || "Author"}
                </span>
                <span className="mx-2">•</span>
                <CalendarIcon className="w-4 h-4 mr-1" />
                <span>
                  {new Date(post?.createdAt).toLocaleDateString() || "Date"}
                </span>
                <span className="mx-2">•</span>
                <FaVoteYea className="w-4 h-4 mr-2" />
                <span>{post?.upVotes?.length} upVotes</span>
                <span className="mx-2">•</span>
                <Link
                  className="flex items-center justify-center hover:text-pink-500 transition-colors"
                  href={`/${post._id}#comment`}
                >
                  <FaRegComment className="w-4 h-4 mr-1 cursor-pointer" />
                  <span>{post?.comments?.length || "No"} Comments</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <BannerSection />
    </div>
  );
};

export default TopNews;
