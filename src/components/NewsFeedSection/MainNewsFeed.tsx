"use client";
import React from "react";

import HeroSection from "../Home/HeroSection";
import TopNews from "../Home/TopNews";
import NewsLayout from "../Home/NewsLayout";
import Container from "../UI/Container";

import { useGetAllPosts } from "@/src/hooks/post.hooks";

const MainNewsFeed = () => {
  const { data, isLoading } = useGetAllPosts();

  const allPostData = data?.data || [];

  // Sort posts by upvotes
  const sortedPosts = allPostData.sort(
    (a, b) => b.upVotes?.length - a.upVotes?.length
  );

  // const sortedPosts = allPostData.sort(
  //   (
  //     a: { upVotes: string | any[]; downVotes: string | any[] },
  //     b: { upVotes: string | any[]; downVotes: string | any[] },
  //   ) => {
  //     const upvoteDifference = b.upVotes.length - a.upVotes.length;

  //     if (upvoteDifference !== 0) {
  //       return upvoteDifference;
  //     }

  //     return a.downVotes.length - b.downVotes.length;
  //   },
  // );

  return (
    <div>
      <div className=" w-full  flex-grow">
        <HeroSection
          heroLoading={isLoading}
          layoutLoading={false}
          posts={sortedPosts}
          topLoading={false}
        />
        <div className="dark dark:bg-[#1A1A1A]">
          <Container>
            <TopNews
              heroLoading={false}
              layoutLoading={false}
              posts={sortedPosts}
              topLoading={isLoading}
            />
            {/* <BannerSection /> */}
            <NewsLayout
              heroLoading={false}
              layoutLoading={isLoading}
              posts={sortedPosts}
              topLoading={false}
            />
          </Container>
        </div>
      </div>
    </div>
  );
};

export default MainNewsFeed;
