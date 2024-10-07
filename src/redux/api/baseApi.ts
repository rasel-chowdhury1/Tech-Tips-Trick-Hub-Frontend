import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api",
    credentials: "include",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;

      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ["Comment", "Post", "User", "Vote"],
  endpoints: () => ({}),
});

export default baseApi;
