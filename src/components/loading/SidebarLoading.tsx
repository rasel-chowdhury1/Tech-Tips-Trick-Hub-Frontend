import TextSkeleton from "./TextSkeleton";
import TitleSkeleton from "./TitleSkeleton";

const SidebarLoading = () => {
  return (
    <div className="space-y-5">
      <div className="space-y-3">
        <TitleSkeleton />
        <TextSkeleton />
      </div>
      <div className="space-y-3">
        <TitleSkeleton />
        <TextSkeleton />
      </div>
      <div className="space-y-3">
        <TitleSkeleton />
        <TextSkeleton />
      </div>
    </div>
  );
};

export default SidebarLoading;
