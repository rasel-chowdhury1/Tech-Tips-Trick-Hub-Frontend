import { Skeleton } from "@nextui-org/skeleton";

const CardLoading = () => {
  return (
    <div>
      <div className="flex items-center gap-3 p-4">
        <Skeleton className="size-[50px] rounded-full" />
        <div className="space-y-3">
          <Skeleton className="w-[100px] h-[20px]" />
          <Skeleton className="w-[200px] h-[15px]" />
        </div>
      </div>
      <Skeleton className="w-full h-[300px]" />
      <div className="p-4 space-y-3">
        <Skeleton className="w-[150px] h-[20px]" />
        <Skeleton className="w-2/3 h-[15px]" />
        <Skeleton className="w-2/3 h-[15px]" />
      </div>
      <Skeleton className="w-full h-[40px] rounded-b-xl" />
    </div>
  );
};

export default CardLoading;
