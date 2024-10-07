import ErrorBoundary from "@/src/components/ErrorBoundary";
import CustomBarChart from "@/src/components/ui/CustomBarChart";
import Loader from "@/src/components/ui/Loader";
import { Suspense } from "react";
const page = async () => {
  const res = await fetch("https://ultimate-tripz.vercel.app/api/statistics");
  const data = await res.json();
  const statistics = data?.data;
  const labels = [
    "Total Users",
    "Total Premium Users",
    "Total Basic Users",
    "Total Blogs",
    "Total Active Blogs",
    "Total Inactive Blogs",
  ];
  const datasets = [
    statistics?.totalUsers,
    statistics?.totalPremiumUsers,
    statistics?.totalBasicUsers,
    statistics?.totalContents,
    statistics?.totalActiveContents,
    statistics?.totalInactiveContents,
  ];
  return (
    <div className="md:p-5 pt-6 md:pt-auto">
      {/* Title and Subtitle */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-gray-600 dark:text-slate-50">View and statistics.</p>
      </div>
      <ErrorBoundary fallback={<p>Error</p>}>
        <Suspense fallback={<Loader />}>
          <CustomBarChart labels={labels} datasets={datasets} />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default page;
