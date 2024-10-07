const MangeUserSkeleton = () => {
  return (
    <div className="flex items-center p-4 border-b border-gray-200 animate-pulse">
      {/* User Name Skeleton */}
      <div className="flex items-center space-x-4 w-1/4">
        <div className="h-10 w-10 rounded-full bg-gray-300" />
        <div className="h-4 w-1/2 bg-gray-300 rounded" />
      </div>
      {/* Email Skeleton */}
      <div className="flex flex-col w-1/4">
        <div className="h-4 w-3/4 bg-gray-300 rounded" />
      </div>
      {/* Gender Skeleton */}
      <div className="flex flex-col w-1/4">
        <div className="h-4 w-1/2 bg-gray-300 rounded" />
      </div>
      {/* Role Skeleton */}
      <div className="flex flex-col w-1/4">
        <div className="h-4 w-1/2 bg-gray-300 rounded" />
      </div>
      {/* Status Skeleton */}
      <div className="flex flex-col w-1/4">
        <div className="h-4 w-1/2 bg-gray-300 rounded" />
      </div>
      {/* Actions Skeleton */}
      <div className="flex items-center gap-2 w-1/4">
        <div className="h-8 w-24 bg-gray-300 rounded" />
        <div className="h-8 w-24 bg-gray-300 rounded" />
      </div>
    </div>
  );
};

export default MangeUserSkeleton;
