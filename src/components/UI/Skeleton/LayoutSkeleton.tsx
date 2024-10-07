const LayoutSkeleton = () => {
  return (
    <div className="lg:col-span-2 space-y-8 border-r animate-pulse mt-20">
      {[...Array(3)].map((_, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row overflow-hidden border-b border-gray-300 pb-4 last:border-b-0"
        >
          <div className="relative overflow-hidden bg-gray-300 h-40 w-96 md:w-96 animate-pulse">
            {/* Placeholder for the image */}
          </div>
          <div className="p-4 space-y-2 flex-1">
            <div className="bg-pink-300 text-white text-xs font-semibold px-2 py-1 uppercase w-24 h-6" />
            <div className="h-6 bg-gray-300 rounded w-3/4" />
            <div className="flex items-center space-x-2">
              <span className="h-4 bg-gray-300 rounded w-16" />
              <span className="mx-2">•</span>
              <span className="h-4 bg-gray-300 rounded w-20" />
              <span className="mx-2">•</span>
              <span className="h-4 bg-gray-300 rounded w-16" />
              <span className="mx-2">•</span>
              <span className="h-4 bg-gray-300 rounded w-16" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LayoutSkeleton;
