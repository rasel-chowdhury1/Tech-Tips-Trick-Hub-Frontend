"use client";
import React from "react";
import { Skeleton } from "@nextui-org/react";

const HeroSectionSkeleton = () => {
  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* Main featured article skeleton */}
        <div className="md:col-span-2 lg:col-span-2 relative border-r dark:border-r-slate-200">
          <div className="overflow-hidden relative">
            <Skeleton className="object-cover w-full h-[700px]" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
            <Skeleton className="inline-block bg-pink-500 text-white px-3 py-1 text-sm font-semibold mb-2" />
            <Skeleton className="text-white block text-2xl md:text-3xl font-bold mb-2" />
            <Skeleton className="text-white block w-3/4 h-5 mb-2" />
            <Skeleton className="text-white block w-1/2 h-5" />
          </div>
        </div>

        {/* Smaller articles skeletons */}
        <div className="">
          {[...Array(2)].map((_, index) => (
            <div key={index} className="relative border-b last:border-b-0">
              <div className="overflow-hidden relative">
                <Skeleton className="object-cover w-full h-[350px]" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <Skeleton className="inline-block bg-pink-500 text-white px-3 py-1 text-sm font-semibold mb-2" />
                <Skeleton className="text-white block text-lg font-bold mb-1" />
                <Skeleton className="text-white block w-3/4 h-5 mb-1" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSectionSkeleton;
