import React, { Suspense } from "react";
import Filter from "@/src/components/module/articles/Filter";
import Sidebar from "@/src/components/module/articles/Sidebar";
import CreatePost from "@/src/components/module/articles/create-post/CreatePost";
import Blogs from "./_components/Blogs";
import ErrorBoundary from "@/src/components/ErrorBoundary";
import SidebarLoading from "@/src/components/loading/SidebarLoading";
import Loader from "@/src/components/ui/Loader";

const page = ({ searchParams }: any) => {
  const params = new URLSearchParams(searchParams);

  const queryParams = {
    sort: params.get("sort") || "",
    searchTerm: params.get("searchTerm") || "",
    category: params.get("category") || "",
    tag: params.get("tag") || "",
  };

  return (
    <div>
      <div className="flex lg:flex-row flex-col gap-10">
        <div className="lg:w-[60%]">
          <CreatePost />
          <Filter />
          <ErrorBoundary fallback={<p>Error</p>}>
            <Suspense fallback={<Loader />}>
              <Blogs queryParams={queryParams} />
            </Suspense>
          </ErrorBoundary>
        </div>
        <div className="lg:w-[40%]">
          <ErrorBoundary fallback={<p>Error</p>}>
            <Suspense fallback={<SidebarLoading />}>
              <Sidebar />
            </Suspense>
          </ErrorBoundary>
        </div>
      </div>
    </div>
  );
};

export default page;
