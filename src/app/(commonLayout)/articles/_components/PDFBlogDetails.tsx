"use client"; // Ensure this is in a client component
import { TPostDetails } from "@/src/types";
import { formatDateTime } from "@/src/utils/date";
import Image from "next/image";
import { IoIosTimer } from "react-icons/io";
import { LiaUserEditSolid } from "react-icons/lia";
import { Button } from "@nextui-org/button"; // Import the Button component
import { usePDF } from "react-to-pdf";

const PDFBlogDetails = ({ postInfo }: { postInfo: TPostDetails }) => {
  console.log({postInfo})
  const { toPDF, targetRef } = usePDF({ filename: "page.pdf" });

  return (
    <div>
      <Button className="custom-btn" onClick={() => toPDF()}>
        Download PDF
      </Button>
      <div
        ref={targetRef}
        className="flex lg:flex-row flex-col gap-y-5 gap-x-10 mt-4"
      >
        <div className="lg:w-[65%]">
          <h2 className="text-2xl font-bold">{postInfo?.title}</h2>
          <div className="flex items-center gap-5">
            <p className="flex items-center gap-x-2">
              <LiaUserEditSolid /> {postInfo?.author?.name}
            </p>
            <p className="flex items-center gap-x-2">
              <IoIosTimer /> {formatDateTime(postInfo?.createdAt)}
            </p>
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html: postInfo?.content,
            }}
          />
        </div>
        <div className="lg:w-[35%]">
          <Image
            src={postInfo?.cover}
            height={600}
            width={600}
            alt={postInfo?.title || "asdfkja"}
          />
        </div>
      </div>
    </div>
  );
};

export default PDFBlogDetails;
