import React from "react";

import PostData from "@/src/components/UI/PostDetails/PostData";
import { getPostById } from "@/src/services/PostServices";

interface PostProps {
  params: {
    postId: string;
  };
}
const PostDetails = async ({ params: { postId } }: PostProps) => {
  const { data } = await getPostById(postId);
  console.log("data -> ",{data})

  return (
    <>
      <PostData post={data} />
    </>
  );
};

export default PostDetails;
