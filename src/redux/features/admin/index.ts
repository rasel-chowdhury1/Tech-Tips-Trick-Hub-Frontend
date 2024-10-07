import baseApi from "../../api/baseApi";

const adminApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/users",
      providesTags: ["User"],
    }),
    getPosts: builder.query({
      query: () => "/post/all-active-inactive-posts",
      providesTags: ["Post"],
    }),
    getStatistics: builder.query({
      query: () => "/statistics",
    }),
  }),
});

export const { useGetUsersQuery, useGetPostsQuery, useGetStatisticsQuery } =
  adminApi;
