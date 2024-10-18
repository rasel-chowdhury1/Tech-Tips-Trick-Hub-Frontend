"use client";
import ErrorBoundary from "@/src/components/ErrorBoundary";
import CustomBarChart from "@/src/components/ui/CustomBarChart";
import Loader from "@/src/components/ui/Loader";
import { useCurrentUser } from "@/src/redux/features/auth/authSlice";
import { useGetPostByAuthorQuery } from "@/src/redux/features/post";
import { useGetStatisticsInfoQuery, useGetUserInfoQuery } from "@/src/redux/features/user";
import { useAppSelector } from "@/src/redux/hooks";
import { TUser, TUserDetails } from "@/src/types";
import { getPostsStats } from "@/src/utils/getPostStats";
import { Suspense } from "react";

const UserDashboard = () => {
  const user = useAppSelector(useCurrentUser) as TUser; // Get current user info from the Redux store
  
  // Fetch user details and posts using the corresponding queries
  const { data: userInfoData, isLoading: isUserInfoLoading } = useGetUserInfoQuery("");
  const userDetails = userInfoData?.data as TUserDetails;

  const { data: userPostsData, isLoading: isUserPostsLoading } = useGetPostByAuthorQuery(userDetails?._id);
  const userAllPosts = userPostsData?.data;

  // Calculate statistics using the getPostsStats function
  const { totalPosts, totalComments, totalUpvotes, totalDownvotes } = getPostsStats(userAllPosts);

  // Define the labels and dataset for the chart
  const labels = ["Total Posts", "Total Comments", "Total Upvotes", "Total Downvotes"];
  const datasets = [totalPosts, totalComments, totalUpvotes, totalDownvotes];

  // Show a loading spinner if data is still loading
  if (isUserInfoLoading || isUserPostsLoading) {
    return <Loader />;
  }

  return (
    <div className="md:p-5 pt-6 md:pt-auto w-full">
      <ErrorBoundary fallback={<p>Error occurred while loading data</p>}>
        <Suspense fallback={<Loader />}>
          {/* Title and Subtitle */}
          <div className="mb-2">
            <h1 className="text-3xl sm:text-4xl font-semibold font-serif mb-3 text-center">
              User Dashboard
            </h1>
            <p className="text-sm pb-10 text-center">View your profile and statistics.</p>
          </div>

          {/* Admin Summary (Example) */}
          <div className="admin-summary">
            <h2 className="text-3xl my-2">
              <span>Hi, Welcome </span>
              <span className="font-bold text-orange-400">
                {user?.name ? user.name : "Back"}
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="stat-card p-4 bg-gray-100 rounded shadow">
                <h3 className="text-xl font-semibold text-center">Total Posts</h3>
                <p className="text-2xl font-bold text-center">{totalPosts || 350}</p>
              </div>
              <div className="stat-card p-4 text-center bg-orange-300 rounded shadow">
                <h2 className="text-xl font-semibold">Total Reaction</h2>
                <p className="text-2xl font-bold">{  totalUpvotes+totalDownvotes || 800}</p>
              </div>
              <div className="stat-card p-4 text-center bg-cyan-300 rounded shadow">
                <h2 className="text-xl font-semibold">Total Comments</h2>
                <p className="text-2xl font-bold">{totalComments || 125}</p>
              </div>
            </div>
          </div>

          {/* Bar Chart Component */}
          <CustomBarChart labels={labels} datasets={datasets} />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default UserDashboard;
