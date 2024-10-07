import baseApi from "../../api/baseApi";

const CommentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCommentsByPostId: builder.query({
      query: (id) => `/comment/post/${id}`,
      providesTags: ["Comment"],
    }),
    postComment: builder.mutation({
      query: ({ id, commentInfo }) => {
        // console.log(id, commentInfo);
        return {
          url: `/comment/${id}`,
          method: "POST",
          body: commentInfo,
        };
      },
      invalidatesTags: ["Comment"],
    }),
    updateComment: builder.mutation({
      query: ({ id, commentInfo }) => {
        console.log(id, commentInfo);
        return {
          url: `/comment/update/${id}`,
          method: "PUT",
          body: commentInfo,
        };
      },
      invalidatesTags: ["Comment"],
    }),
    deleteComment: builder.mutation({
      query: (id) => {
        console.log("id", id);
        return {
          url: `/comment/delete/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Comment"],
    }),
  }),
});

export const {
  useGetCommentsByPostIdQuery,
  usePostCommentMutation,
  useDeleteCommentMutation,
  useUpdateCommentMutation,
} = CommentApi;
