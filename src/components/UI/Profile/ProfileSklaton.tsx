import { Card, Skeleton } from "@nextui-org/react";

export default function ProfileSkeleton() {
  return (
    <Card className="max-w-4xl mx-auto p-6 shadow-md bg-white dark:bg-[#1A1A1A]">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        <div className="relative">
          <button className="absolute bottom-0 right-0 bg-gray-800 text-white rounded-full p-2">
            <Skeleton style={{ height: "100%", width: "100%" }} />
          </button>
        </div>
        <div className="flex-grow text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center justify-between mb-4">
            <Skeleton style={{ height: "32px", width: "200px" }} />
            <div className="space-x-2">
              <Skeleton style={{ height: "32px", width: "100px" }} />
            </div>
          </div>
          <div className="flex justify-center md:justify-start space-x-6 mb-4">
            <Skeleton style={{ height: "20px", width: "60px" }} />
            <Skeleton style={{ height: "20px", width: "60px" }} />
            <Skeleton style={{ height: "20px", width: "60px" }} />
          </div>
          <div className="mb-4 text-black">
            <Skeleton style={{ height: "24px", width: "150px" }} />
            <Skeleton style={{ height: "20px", width: "120px" }} />
            <Skeleton style={{ height: "16px", width: "200px" }} />
          </div>
        </div>
      </div>
    </Card>
  );
}
