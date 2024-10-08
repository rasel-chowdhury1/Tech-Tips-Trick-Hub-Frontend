"use client"
import ErrorBoundary from "@/src/components/ErrorBoundary";
import CustomBarChart from "@/src/components/ui/CustomBarChart";
import Loader from "@/src/components/ui/Loader";
import { useCurrentUser } from "@/src/redux/features/auth/authSlice";
import { useAppSelector } from "@/src/redux/hooks";
import { TUser } from "@/src/types";
import { Suspense } from "react";
const page = async () => {
  const user = useAppSelector(useCurrentUser) as TUser;

  const res = await fetch("http://localhost:5000/api/statistics");
  const data = await res.json();
  const statistics = data?.data;
  console.log({statistics})
  const labels = [
    "Total Users",
    "Total Premium Users",
    "Total Basic Users",
    "Total Contents",
    "Total Active Contents",
    "Total Inactive Contents",
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
    <div className="md:p-5 pt-6 md:pt-auto w-full">
      <ErrorBoundary fallback={<p>Error</p>}>
      <Suspense fallback={<Loader />}>
      {/* Title and Subtitle */}
      <div className="mb-2">
        <h1
          className="text-3xl sm:text-4xl font-semibold font-serif mb-3 text-center"
        >
          Admin Dashboard
        </h1>
        <p  className="text-sm pb-10  text-center">
        View and statistics.
        </p>
        </div>
      
      
        <div className="admin-summary">
        <h2 className="text-3xl my-2">
                <span>Hi, Welcome </span>
                <span className='font-bold text-orange-400'>
                {
                    user?.name ? user.name : 'Back'
                }
                </span>
      </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="stat-card p-4 bg-gray-100 rounded shadow">
              <h3 className="text-xl font-semibold text-center">Total Users</h3>
              <p className="text-2xl font-bold text-center">{statistics?.totalUsers || 350}</p>
            </div>
            <div className="stat-card p-4 text-center bg-orange-300 rounded shadow">
              <h2 className="text-xl font-semibold">Total Content</h2>
              <p className="text-2xl font-bold">{statistics?.totalContents || 800} </p>
            </div>
            <div className="stat-card p-4 text-center bg-cyan-300 rounded shadow">
              <h2 className="text-xl font-semibold">Premimum User</h2>
              <p className="text-2xl font-bold">{statistics?.totalPremiumUsers || 125}</p>
            </div>
          </div>
        </div>
          <CustomBarChart labels={labels} datasets={datasets} />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default page;
