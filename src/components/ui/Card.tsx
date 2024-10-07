import { formatDateTime } from "@/src/utils/date";
import Image from "next/image";
import Link from "next/link";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import UpVote from "../module/articles/UpVote";
import DownVote from "../module/articles/DownVote";
import { FaRegCommentAlt } from "react-icons/fa";
import Follow from "../actions/Follow";
import { TPost } from "@/src/types";

type TProps = {
  blog: TPost;
  profile?: boolean;
};

const Card = ({ blog, profile }: TProps) => {
  return (
    <div key={blog._id} className=" bg-slate-100 dark:bg-dark rounded-xl h-fit">
      {!profile && (
        <div className="p-4 flex items-start justify-between">
          <div className="flex items-center gap-3">
            <Image
              src={blog?.author?.avatar}
              alt="author"
              height={80}
              width={80}
              className="size-[50px] object-cover rounded-full"
            />
            <div className="flex flex-col justify-between">
              <p className="text-lg font-semibold">{blog.author.name}</p>
              <p>{formatDateTime(blog.createdAt)}</p>
            </div>
          </div>
          <Follow author={blog.author} />
        </div>
      )}
      <Link href={`/articles/${blog._id}`} className="relative">
        <Image
          src={blog.images[0]}
          alt="banner"
          height={300}
          width={400}
          className="object-cover w-full h-[260px]"
        />
        {blog.tags === "premium" && (
          <p className="absolute top-1 right-2">
            <RiVerifiedBadgeFill className="text-primary-400" />
          </p>
        )}
      </Link>
      <div className="p-4">
        <Link href={`/articles/${blog._id}`} className="text-lg font-semibold">
          {blog.title}
        </Link>
        <div
          dangerouslySetInnerHTML={{
            __html: blog.content.slice(0, 80) + "...",
          }}
        />
        {/* <p>{item.content.slice(0, 80)}...</p> */}
      </div>
      <div className="flex items-center justify-between border-t h-[50px]">
        <div className="w-full flex justify-center">
          <UpVote votes={blog.upVotes} id={blog._id} />
        </div>
        <div className="w-full flex justify-center">
          <DownVote votes={blog.downVotes} id={blog._id} />
        </div>
        <p className="flex items-center gap-2 w-full p-2 justify-center">
          <FaRegCommentAlt /> {blog.commentsCount}
        </p>
      </div>
    </div>
  );
};

export default Card;
