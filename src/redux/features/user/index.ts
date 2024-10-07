import baseApi from "../../api/baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUserInfo: builder.query({
      query: () => "/user-info",
      providesTags: ["User", "Post"],
    }),
    getUserInfoById: builder.query({
      query: (id) => `/user-by-id/${id}`,
      providesTags: ["User", "Post"],
    }),
    updateUserInfo: builder.mutation({
      query: ({ id, data }) => ({
        url: `/update-user/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),
    updateUserRole: builder.mutation({
      query: ({ id, data }) => {
        return {
          url: `/update-user-role/${id}`,
          method: "PUT",
          body: data,
        };
      },
      invalidatesTags: ["User"],
    }),
    subscribe: builder.mutation({
      query: (info) => ({
        url: `/bookings`,
        method: "POST",
        body: info,
      }),
      invalidatesTags: ["Post"],
    }),
  }),
});

export const {
  useGetUserInfoQuery,
  useUpdateUserInfoMutation,
  useUpdateUserRoleMutation,
  useGetUserInfoByIdQuery,
  useSubscribeMutation,
} = userApi;
