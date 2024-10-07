import { Skeleton } from "@nextui-org/skeleton";

const TextSkeleton = () => {
  return (
    <div className="space-y-2">
      <Skeleton className="h-3 w-full rounded-lg" />
      <Skeleton className="h-3 w-full rounded-lg" />
      <Skeleton className="h-3 w-full rounded-lg" />
    </div>
  );
};

export default TextSkeleton;
