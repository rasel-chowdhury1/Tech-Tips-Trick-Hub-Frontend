"use client";
import React from "react";

import HeroSection from "../Home/HeroSection";
import TopNews from "../Home/TopNews";
import NewsLayout from "../Home/NewsLayout";
import Container from "../UI/Container";

import { useGetAllPosts } from "@/src/hooks/post.hooks";

const MainNewsFeed = () => {
  const { data } = useGetAllPosts();
  const allPostData = data?.data || [];

  // Sort posts by upvotes
  const sortedPosts = allPostData.sort((a, b) => b.upVotes - a.upVotes);

  return (
    <div>
      <div className=" w-full  flex-grow">
        <HeroSection posts={sortedPosts} />
        <div className="dark dark:bg-[#1A1A1A]">
          <Container>
            <TopNews posts={sortedPosts} />
            <NewsLayout posts={sortedPosts} />
          </Container>
        </div>
      </div>
    </div>
  );
};

export default MainNewsFeed;
