import React from "react";

const DetailsPostSkeleton = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="animate-pulse">
        {/* Header Skeleton */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-gray-300" />
            <div>
              <div className="h-4 bg-gray-300 rounded w-24 mb-2" />
              <div className="h-3 bg-gray-300 rounded w-16" />
            </div>
          </div>
          <div className="w-20 h-8 bg-gray-300 rounded" />
        </div>

        {/* Title Skeleton */}
        <div className="h-8 bg-gray-300 rounded w-2/3 mb-4" />

        {/* Category Skeleton */}
        <div className="h-4 bg-gray-300 rounded w-1/4 mb-6" />

        {/* Image Skeleton */}
        <div className="w-full h-64 bg-gray-300 rounded mb-6" />

        {/* Content Skeleton */}
        <div className="space-y-4">
          <div className="h-4 bg-gray-300 rounded w-full" />
          <div className="h-4 bg-gray-300 rounded w-5/6" />
          <div className="h-4 bg-gray-300 rounded w-3/4" />
          <div className="h-4 bg-gray-300 rounded w-2/3" />
        </div>

        {/* Footer Skeleton */}
        <div className="flex justify-between items-center mt-6">
          <div className="flex space-x-4">
            <div className="h-8 w-24 bg-gray-300 rounded" />
            <div className="h-8 w-24 bg-gray-300 rounded" />
          </div>
          <div className="flex space-x-2">
            <div className="h-8 w-8 bg-gray-300 rounded-full" />
            <div className="h-8 w-8 bg-gray-300 rounded-full" />
          </div>
        </div>

        {/* Comments Section Skeleton */}
        <div className="mt-8">
          <div className="h-6 bg-gray-300 rounded w-32 mb-4" />
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-full bg-gray-300" />
              <div className="flex-1 space-y-2">
                <div className="h-4 bg-gray-300 rounded w-1/4" />
                <div className="h-4 bg-gray-300 rounded w-full" />
                <div className="h-4 bg-gray-300 rounded w-5/6" />
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-full bg-gray-300" />
              <div className="flex-1 space-y-2">
                <div className="h-4 bg-gray-300 rounded w-1/4" />
                <div className="h-4 bg-gray-300 rounded w-full" />
                <div className="h-4 bg-gray-300 rounded w-5/6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPostSkeleton;
