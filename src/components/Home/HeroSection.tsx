"use client";
import Image from "next/image";
import React from "react";
import { CalendarIcon } from "lucide-react";
import Link from "next/link";
import { FaRegComment, FaVoteYea } from "react-icons/fa";

import bannerImage from "../../assets/watch.jpg";
import satelliteImage from "../../assets/satelight.jpg";
import HeroSectionSkeleton from "../UI/Skeleton/HeroSectionSkeleton";

import { PostProps } from "@/src/types";

const HeroSection = ({ posts, heroLoading }: PostProps) => {
  if (heroLoading) {
    return <HeroSectionSkeleton />;
  }

  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3">
        {/* Main featured article */}
        {posts.length > 0 && (
          <div className="md:col-span-2 lg:col-span-2 relative border-r dark:border-r-slate-200">
            <div className=" overflow-hidden relative">
              <Image
                alt={posts[0]?.title || "Main Article"}
                className="object-cover w-full h-[700px] cursor-pointer transition-transform duration-300 hover:scale-110"
                height={900}
                src={posts[0]?.images[0] || bannerImage}
                width={800}
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
              <span className="inline-block bg-pink-500 text-white px-3 py-1 text-sm font-semibold  mb-2">
                {posts[0]?.category || "Category"}
              </span>
              <Link
                className="text-white hover:text-pink-500 transition-colors block text-2xl md:text-3xl font-bold mb-2 cursor-pointer hover:underline transition duration-300 ease-in-out"
                href={`/${posts[0]?._id}`}
              >
                {posts[0]?.title || "Main Article Title"}
              </Link>
              <div className="flex items-center text-white md:text-[10px] text-[8px]">
                <span>By {posts[0]?.author?.name || "Author"}</span>
                <span className="mx-2">•</span>
                <CalendarIcon className="w-4 h-4 mr-1" />
                <span>
                  {new Date(posts[0]?.createdAt).toLocaleDateString() || "Date"}
                </span>
                <span className="mx-2">•</span>
                <FaVoteYea className="w-4 h-4 mr-2" />
                <span>{posts[0]?.upVotes?.length} upVotes</span>
                <span className="mx-2">•</span>
                <Link
                  className="flex items-center justify-center hover:text-pink-500 transition-colors"
                  href={`/${posts[0]?._id}#comment`}
                >
                  <FaRegComment className="w-4 h-4 mr-1 cursor-pointer" />
                  <span>{posts[0]?.comments?.length || "No"} Comments</span>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Smaller articles */}
        <div className="">
          {posts.slice(1, 3).map((article) => (
            <div
              key={article._id}
              className="relative border-b last:border-b-0"
            >
              <div className=" overflow-hidden relative">
                <Image
                  alt={article.title || "Article Image"}
                  className="object-cover cursor-pointer w-full h-[350px] transition-transform duration-300 hover:scale-110"
                  height={300}
                  src={article.images[0] || satelliteImage}
                  width={400}
                />
              </div>

              <div className="absolute  bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <span className="inline-block bg-pink-500 text-white px-3 py-1 text-sm font-semibold  mb-2">
                  {article.category || "Category"}
                </span>
                <Link
                  className="text-white hover:text-pink-500 transition-colors text-lg block font-bold mb-1 cursor-pointer hover:underline"
                  href={`/${article._id}`}
                >
                  {article.title || "Article Title"}
                </Link>

                <div className="flex items-center text-white md:text-[10px] text-[8px]">
                  <span>By {article?.author?.name || "Author"}</span>
                  <span className="mx-2">•</span>
                  <CalendarIcon className="w-4 h-4 mr-1" />
                  <span>
                    {new Date(article?.createdAt).toLocaleDateString() ||
                      "Date"}
                  </span>

                  <span className="mx-2">•</span>
                  <FaVoteYea className="w-4 h-4 mr-2" />
                  <span>{article?.upVotes?.length} upVotes</span>
                  <span className="mx-2">•</span>
                  <Link
                    className="flex items-center justify-center hover:text-pink-500 transition-colors"
                    href={`/${article?._id}#comment`}
                  >
                    <FaRegComment className="w-4 h-4 mr-1 cursor-pointer" />
                    <span>{article?.comments?.length || "No"} Comments</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
