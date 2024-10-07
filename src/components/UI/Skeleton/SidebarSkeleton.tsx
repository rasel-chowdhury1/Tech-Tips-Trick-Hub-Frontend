const SidebarSkeleton = () => {
  return (
    <div className="fixed min-h-screen inset-y-0 left-0 top-0 z-50 w-64 bg-default-100  animate-pulse">
      <div className="h-full flex flex-col">
        {/* Header Skeleton */}

        {/* Links Section Skeleton */}
        <div className="mt-3 space-y-2 rounded-xl p-2 flex-1">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="flex items-center p-2 rounded-md bg-gray-200 animate-pulse"
            >
              <div className="mr-2 h-5 w-5 bg-gray-300 rounded-full" />
              <div className="h-4 w-3/4 bg-gray-300 rounded" />
            </div>
          ))}
        </div>

        {/* Log Out Section Skeleton */}
        <div className="py-6 absolute w-full bottom-10">
          <div className="mb-2 h-1 bg-gray-300 animate-pulse" />
          <div className="flex items-center pl-4">
            <span className="mr-2 text-xl bg-gray-300 h-5 w-5 rounded-full animate-pulse" />
            <button className="flex items-center p-2 rounded-md font-semibold text-xl bg-gray-200 h-6 w-1/2 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarSkeleton;
