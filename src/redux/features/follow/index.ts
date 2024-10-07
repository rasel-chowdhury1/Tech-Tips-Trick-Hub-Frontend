import baseApi from "../../api/baseApi";

const followApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    follow: builder.mutation({
      query: (followInfo) => ({
        url: "/follow",
        method: "POST",
        body: followInfo,
      }),
      invalidatesTags: ["Post", "User"],
    }),
  }),
});

export const { useFollowMutation } = followApi;
