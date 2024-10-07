import baseApi from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/login",
        method: "POST",
        body: userInfo,
      }),
    }),
    registration: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/registration",
        method: "POST",
        body: userInfo,
      }),
    }),
    recoverPassword: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/recover-password",
        method: "PUT",
        body: userInfo,
      }),
    }),
    changePassword: builder.mutation({
      query: (newPass) => ({
        url: "/auth/change-password",
        method: "PUT",
        body: newPass,
      }),
    }),
    refreshToken: builder.mutation({
      query: () => ({
        url: "/auth/refresh-token",
        method: "POST",
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegistrationMutation,
  useChangePasswordMutation,
  useRecoverPasswordMutation,
  useRefreshTokenMutation,
} = authApi;
