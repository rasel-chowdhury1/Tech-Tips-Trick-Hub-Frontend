export const getPostsStats = (posts: any[]) => {
    let totalPosts = 0;
    let totalComments = 0;
    let totalUpvotes = 0;
    let totalDownvotes = 0;
  
    posts?.forEach((post) => {
      totalPosts += 1;
      totalComments += post.commentsCount;
      totalUpvotes += post.upVotes.length;
      totalDownvotes += post.downVotes.length;
    });
  
    return {
      totalPosts,
      totalComments,
      totalUpvotes,
      totalDownvotes,
    };
  };
  