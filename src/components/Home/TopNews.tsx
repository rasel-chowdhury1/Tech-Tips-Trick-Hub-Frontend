"use client";
import { CalendarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaRegComment } from "react-icons/fa";

import { PostProps } from "@/src/types";

const TopNews = ({ posts }: PostProps) => {
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
              <div className="flex items-center text-sm light light:text-[#F9F9F9]">
                <span>By {post?.author?.name || "Author"}</span>
                <span className="mx-2">•</span>
                <CalendarIcon className="w-4 h-4 mr-1" />
                <span>
                  {new Date(post?.createdAt).toLocaleDateString() || "Date"}
                </span>
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

      {/* Banner section*/}
      <section
        className="cursor-pointer mt-10 relative overflow-hidden h-64"
        style={{
          backgroundImage: "url(https://i.ibb.co/vHV1HzM/banner-Imge.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "transform 0.5s ease-in-out",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.1)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
        }}
      />
    </div>
  );
};

export default TopNews;
