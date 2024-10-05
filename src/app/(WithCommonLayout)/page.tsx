import React from "react";

import BecomeAmember from "@/src/components/UI/BecomeAmember/BecomeAmember";
import MainNewsFeed from "@/src/components/NewsFeedSection/MainNewsFeed";

export default function Home() {
  return (
    <div>
      <BecomeAmember />

      <MainNewsFeed />
    </div>
  );
}
