"use client";
import { TErrorResponse, TPostDetails } from "@/src/types";
import { toast } from "sonner";
import UpdateBlog from "./UpdateBlog";
import { useGetPostsQuery } from "@/src/redux/features/admin";
import { logout } from "@/src/redux/features/auth/authSlice";
import { useAppDispatch } from "@/src/redux/hooks";
import { useRouter } from "next/navigation";

const BlogsData = () => {
  const { data, error } = useGetPostsQuery("");
  const posts = data?.data; // Accessing posts array
  const dispatch = useAppDispatch();
  const router = useRouter();

  // Error handling
  if (error) {
    console.log("error:", error);
    const err = error as TErrorResponse;
    toast.warning(err?.data?.message);
    if (err?.status === 401) {
      dispatch(logout());
      router.push("/login");
    }
  }

  return (
    <div className="md:p-5 pt-6 md:pt-auto">
      {/* Title and Subtitle */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Blog Management</h1>
        <p className="text-gray-600 dark:text-slate-50">
          View and manage all the blogs posted on the platform.
        </p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto overflow-x-scroll">
          <thead>
            <tr className="bg-gray-200 dark:bg-dark-100">
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">Author</th>
              <th className="px-4 py-2">Tags</th>
              <th className="px-4 py-2">Created At</th>
              <th className="px-4 py-2">Upvotes</th>
              <th className="px-4 py-2">Is Active</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts?.map((post: TPostDetails) => (
              <tr key={post._id} className="border-t">
                <td className="px-4 py-2">{post.title}</td>
                <td className="px-4 py-2 text-center">{post.author.name}</td>
                <td className="px-4 py-2 text-center">{post.tags}</td>
                <td className="px-4 py-2 text-center">
                  {new Date(post.createdAt).toLocaleDateString()}
                </td>
                <td className="px-4 py-2 text-center">{post.upVotes.length}</td>
                <td className="px-4 py-2 text-center">
                  {post.isActive ? "Active" : "In active"}
                </td>
                <td className="px-4 py-2 flex items-center justify-center gap-2">
                  <UpdateBlog postId={post._id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BlogsData;
