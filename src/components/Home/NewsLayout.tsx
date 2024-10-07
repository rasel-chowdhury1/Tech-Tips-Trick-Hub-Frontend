"use client";
import Image from "next/image";
import { CalendarIcon } from "lucide-react";
import { FaRegComment, FaVoteYea } from "react-icons/fa";
import Link from "next/link";

import bannerImage from "../../assets/watch.jpg";
import LayoutSkeleton from "../UI/Skeleton/LayoutSkeleton";

import { PostProps } from "@/src/types";

const categoryImageMapping: Record<string, string> = {
  Mobile: "https://i.ibb.co/JtjMps6/mobile.webp",
  Macbook: "https://i.ibb.co/SKWQS6T/macbook.jpg",
  Gaming: "https://i.ibb.co/QbD56cY/gamingcontrol.jpg",
  Tech: "https://i.ibb.co/NV5f5Td/tech.webp",
  Watch: "https://i.ibb.co/16wN032/watch.jpg",
};

export default function NewsLayout({ posts, layoutLoading }: PostProps) {
  const uniqueCategories = [...new Set(posts.map((post) => post.category))];

  if (layoutLoading) {
    return <LayoutSkeleton />;
  }

  return (
    <div className="container mx-auto  py-8 mt-16">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-pink-500">
        Whats New
      </h1>
      <div className="grid grid-cols-1  lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8 border-r">
          {posts.slice(6).map((post) => (
            <div
              key={post?._id}
              className="flex flex-col cursor-pointer md:flex-row overflow-hidden border-b border-gray-300 pb-4 last:border-b-0"
            >
              <div className="relative overflow-hidden group max-w-[400px]">
                <div className="transition-transform duration-300 group-hover:scale-110 ">
                  <Image
                    alt={post?.title || "Post Image"}
                    className="w-full h-auto max-w-[400px] object-cover"
                    height={140}
                    src={post?.images[0] || bannerImage}
                    width={384}
                  />
                </div>
              </div>
              <div className="p-4 space-y-2">
                <span className="bg-pink-500 text-white text-xs font-semibold px-2 py-1 uppercase">
                  {post?.category || "Category"}
                </span>
                <Link
                  className="text-xl block hover:text-pink-500 md:text-2xl font-bold mb-2 cursor-pointer hover:underline transition duration-300 ease-in-out"
                  href={`/${post?._id}`}
                >
                  {post.title || "Post Title"}
                </Link>
                <div className="flex items-center md:text-[10px] text-[8px]">
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

        <div className="space-y-8">
          {/* search section */}
          <div className="bg-blue-900 text-white p-6">
            <h3 className="text-xl sm:text-2xl font-bold mb-2">
              Unlock Exclusive Benefits as a Premium Member
            </h3>
            <p className="mb-4">
              Join our premium membership to gain access to special offers,
              personalized content, and advanced features designed to elevate
              your experience.
            </p>
            <button className="bg-red-500 text-white px-4 py-2 rounded-full mt-4">
              UPGRADE NOW
            </button>
          </div>

          {/* Categories Section */}
          {/* <div className="cursor-pointer">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">Categories</h3>

            <div className="grid grid-cols-2 gap-4">
              {uniqueCategories.map((category, index) => (
                <div key={index} className="relative">
                  <Image
                    alt={category}
                    className="w-full h-20 object-cover"
                    height={100}
                    src={satelliteImage}
                    width={100}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <span className="text-white font-semibold">{category}</span>
                  </div>
                </div>
              ))}
            </div>
          </div> */}
          <div className="space-y-8">
            {/* Categories Section */}
            <div className="cursor-pointer">
              <h3 className="text-xl sm:text-2xl font-bold mb-4">Categories</h3>
              <hr className="border-gray-300 mb-4" />

              <div className="grid grid-cols-3 gap-4">
                {uniqueCategories.map((category, index) => {
                  const categoryImage = categoryImageMapping[category] || "";

                  return (
                    <div
                      key={index}
                      className="relative overflow-hidden group w-36 h-36 gap-2"
                    >
                      <div className="transition-transform duration-300 group-hover:scale-110 h-full w-full">
                        <Image
                          alt={category}
                          className="object-cover h-full w-full"
                          height={144}
                          src={categoryImage}
                          width={144}
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                          <span className="text-white font-semibold">
                            {category}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
