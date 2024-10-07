import ButtonSkeleton from "./ButtonSkeleton";
import ImageSkeleton from "./ImageSkeleton";
import TextSkeleton from "./TextSkeleton";
import TitleSkeleton from "./TitleSkeleton";

const BlogDetailsLoading = () => {
  return (
    <div className="flex justify-between gap-10">
      <div className="space-y-3 flex-grow">
        <ButtonSkeleton />
        <TitleSkeleton />
        <TextSkeleton />
      </div>
      <ImageSkeleton />
    </div>
  );
};

export default BlogDetailsLoading;
