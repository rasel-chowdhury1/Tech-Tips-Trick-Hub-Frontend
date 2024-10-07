import ErrorBoundary from "@/src/components/ErrorBoundary";
import BlogsData from "../_components/BlogsData";
import { Suspense } from "react";
import Loader from "@/src/components/ui/Loader";

const page = () => {
  return (
    <div>
      <ErrorBoundary fallback={<p>Error</p>}>
        <Suspense fallback={<Loader />}>
          <BlogsData />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default page;
