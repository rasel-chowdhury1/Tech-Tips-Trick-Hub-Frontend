"use client";

import React, { useState } from "react";
import Image from "next/image";
import moment from "moment";
import { FieldValues, SubmitHandler } from "react-hook-form";
import {
  CalendarDays,
  BarChart2,
  EyeIcon,
  ThumbsDown,
  ThumbsUp,
  UserPlus,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardBody,
  Avatar,
  Button,
  Divider,
} from "@nextui-org/react";

import TechForm from "../../form/TechForm";
import { TechTextArea } from "../../form/TechTextAera";

import { useUser } from "@/src/context/user.provider";
import {
  useDeleteComment,
  useEditComment,
  usePostComment,
  useVotePost,
} from "@/src/hooks/post.hooks";
import { TPost } from "@/src/types";

const PostData = ({ post }: { post: TPost }) => {
  const { user } = useUser();
  const { mutate: handlePostComment, isPending, isSuccess } = usePostComment();
  const { mutate: handleEditComment } = useEditComment();
  const { mutate: handleDeleteComment } = useDeleteComment();
  const { mutate: createVote } = useVotePost();
  const [editingCommentId, setEditingCommentId] = useState<string | null>(null);
  const [content, setContent] = useState<string>("");
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [isDisliked, setIsDisliked] = useState<boolean>(false);

  const handleSubmitComment: SubmitHandler<FieldValues> = (data) => {
    const commentInfo = {
      postId: post._id,
      comment: {
        user: user?._id,
        ...data,
      },
    };

    handlePostComment(commentInfo);
  };

  const handleEditComments = (commentId: string, currentContent: string) => {
    setEditingCommentId(commentId);
    setContent(currentContent);
  };

  const handleDeleteComments = (commentId: string) => {
    handleDeleteComment({ postId: post?._id, commentId });
  };

  const handleCancel = () => {
    setEditingCommentId(null);
  };

  const handleSaveClick = (commentId: string) => {
    handleEditComment({ postId: post?._id, commentId, comment: { content } });
    setEditingCommentId(null);
  };
  const handleFollow = () => {
    // Implement follow functionality here
    console.log("Followed!");
  };
  const handleVotes = (postId: string, action: string) => {
    if (action === "upvote") {
      setIsLiked(true);
      setIsDisliked(false);
    } else if (action === "downvote") {
      setIsDisliked(true);
      setIsLiked(false);
    }
    createVote({ postId, action });
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Card className="overflow-hidden p-4 ">
        <CardHeader>
          <div className="flex items-center justify-between space-x-4">
            <div className="flex items-center space-x-4">
              <Avatar
                alt={post?.author?.name}
                src={post?.author?.profileImage}
              />
              <div>
                <h3 className="text-lg font-semibold">{post?.author?.name}</h3>
                <div className="flex items-center text-sm text-muted-foreground">
                  <CalendarDays className="w-4 h-4 mr-1" />
                  <time dateTime={post?.createdAt}>
                    {moment(post?.createdAt).format("MMM DD, YYYY")}
                  </time>
                </div>
              </div>
            </div>
            <div>
              <Button
                size="sm"
                variant="bordered"
                onClick={handleFollow}
                // radius="none"
                className="bg-blue-700 text-white"
              >
                <UserPlus className="w-4 h-4 mr-2" />
                Follow
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardBody>
          <h1 className="text-3xl font-bold mb-2">{post?.title}</h1>
          <p className="text-muted-foreground mb-3 ">{post?.category}</p>
          <div className="relative mb-6">
            <Image
              alt="Snowy mountain landscape"
              className="w-full h-auto"
              height={400}
              src={post?.images[0]}
              width={400}
            />
          </div>
          <div className="prose max-w-none">
            <p className="mb-6">{post?.description}</p>
            <h2 className="text-xl font-semibold mb-3">Design with Ease</h2>
            <blockquote className="border-l-4 border-gray-500 pl-4 mb-4 italic">
              &quot;Do you have a design in mind for your blog? Whether you
              prefer a trendy postcard look or youre going for a more editorial
              style blog - theres a stunning layout for everyone.&quot;
            </blockquote>
            <p className="mb-6">
              Every layout comes with the latest social features built in.
              Readers will be able to easily share posts on social networks like
              Facebook and Twitter, view how many people have liked a post, made
              comments and more. With Wix, building your online community has
              never been easier.
            </p>
            <h2 className="text-xl font-semibold mb-3">
              Create Relevant Content
            </h2>
            <p className="mb-6">
              You'll be posting loads of engaging content, so be sure to keep
              your blog organized with Categories that also allow readers to
              explore more of what interests them. Each category of your blog
              has its own page that's fully customizable. Add a catchy title, a
              brief description and a beautiful image to the category page
              header to truly make it your own. You can also add tags (#vacation
              #dream #summer) throughout your posts to reach more people, and
              help readers search for relevant content. Using hashtags can
              expand your post reach and help people find the content that
              matters to them. Go ahead, #hashtag away.
            </p>
          </div>
        </CardBody>
        <div className="p-6 bg-muted/50">
          <div className="flex flex-wrap items-center justify-between w-full gap-4">
            <div className="flex space-x-4 items-center">
              <Button size="sm" variant="ghost">
                <EyeIcon className="w-4 h-4 mr-2" />0 Views
              </Button>
              <Button size="sm" variant="ghost">
                <BarChart2 className="w-4 h-4 mr-2" />
                {post?.comments?.length || 0} Comments
              </Button>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                className={isLiked ? "text-blue-500 border-blue-500" : ""}
                size="sm"
                variant="bordered"
                onClick={() => handleVotes(post?._id, "upvote")}
              >
                <ThumbsUp className={"w-4 h-4 mr-2 "} />
                Like
              </Button>
              <Button
                className={isDisliked ? "text-red-500 border-red-500" : ""}
                size="sm"
                variant="bordered"
                onClick={() => handleVotes(post?._id, "downvote")}
              >
                <ThumbsDown className={"w-4 h-4 mr-2"} />
                Dislike
              </Button>
            </div>
          </div>
        </div>
      </Card>

      <Card className="mt-8 p-4 " id="comment">
        <CardHeader>
          <h2 className="text-2xl font-semibold">Comments</h2>
        </CardHeader>
        <CardBody>
          {post?.comments.map((comment) => (
            <div key={comment._id} className="mb-6 last:mb-0">
              <div className="flex items-start space-x-4">
                <Avatar
                  alt={comment?.user?.profileImage}
                  src={comment?.user?.profileImage}
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-semibold">
                      {comment?.user?.name}
                    </h4>
                    <time className="text-xs text-muted-foreground">
                      {moment(comment.createdAt).format("MMM DD, YYYY")}
                    </time>
                  </div>
                  {editingCommentId === comment._id ? (
                    <textarea
                      className="mt-2"
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                    />
                  ) : (
                    <p className="mt-1 text-sm">{comment?.content}</p>
                  )}
                  {user?._id === comment?.user?._id && (
                    <div className="flex items-center space-x-2 mt-2">
                      {editingCommentId === comment._id ? (
                        <>
                          <Button
                            size="sm"
                            onClick={() => handleSaveClick(comment._id)}
                          >
                            Save
                          </Button>
                          <Button
                            size="sm"
                            variant="bordered"
                            onClick={handleCancel}
                          >
                            Cancel
                          </Button>
                        </>
                      ) : (
                        <>
                          <Button
                            radius="none"
                            size="sm"
                            variant="bordered"
                            onClick={() =>
                              handleEditComments(comment._id, comment?.content)
                            }
                          >
                            Edit
                          </Button>
                          <Button
                            radius="none"
                            size="sm"
                            variant="bordered"
                            onClick={() => handleDeleteComments(comment._id)}
                          >
                            Delete
                          </Button>
                        </>
                      )}
                    </div>
                  )}
                </div>
              </div>
              <Divider className="my-4" />
            </div>
          ))}
          <TechForm onSubmit={handleSubmitComment}>
            <TechTextArea
              label="write a comment"
              name="content"
              radius="none"
              variant="bordered"
            />
            <Button
              className="mt-4"
              radius="none"
              size="sm"
              type="submit"
              variant="bordered"
            >
              {isPending && isSuccess ? "Posting..." : "Post Comment"}
            </Button>
          </TechForm>
        </CardBody>
      </Card>
    </div>
  );
};

export default PostData;
