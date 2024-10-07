import Container from "../Container";

const PostCardSkeleton = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Skeleton Card */}
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg bg-gray-200 animate-pulse"
          >
            {/* Skeleton Image */}
            <div className="h-60 bg-gray-300 rounded-t-lg" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
              {/* Skeleton for category */}
              <div className="h-4 w-1/4 bg-gray-300 rounded mb-2" />
              {/* Skeleton for title */}
              <div className="h-5 w-full bg-gray-300 rounded mb-1" />
              <div className="flex items-center text-sm light light:text-[#F9F9F9]">
                {/* Skeleton for author name */}
                <div className="h-4 w-1/2 bg-gray-300 rounded mr-2" />
                <div className="h-4 w-4 bg-gray-300 rounded mr-2" />
                {/* Skeleton for date */}
                <div className="h-4 w-1/4 bg-gray-300 rounded mr-2" />
                <div className="h-4 w-4 bg-gray-300 rounded mr-2" />
                {/* Skeleton for comments */}
                <div className="h-4 w-1/4 bg-gray-300 rounded" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default PostCardSkeleton;
