// import axios from "axios";
// import { cookies } from "next/headers";

// import { envConfig } from "@/src/config/envConfig";
// import { getNewAccessToken } from "@/src/services/AuthServices";

// const axiosInstance = axios.create({
//   baseURL: envConfig.baseApi,
// });

// axiosInstance.interceptors.request.use(
//   function (config) {
//     const cookieStore = cookies();
//     const accessToken = cookieStore.get("accessToken")?.value;

//     if (accessToken) {
//       config.headers.Authorization = `${accessToken}`;
//     }

//     return config;
//   },
//   function (error) {
//     return Promise.reject(error);
//   }
// );

// axiosInstance.interceptors.response.use(
//   function (response) {
//     return response;
//   },
//   async function (error) {
//     const config = error.config;

//     if (error?.response?.status === 401 && !config?.sent) {
//       config.sent = true;
//       const res = await getNewAccessToken();
//       const accessToken = res.data.accessToken;

//       config.headers["Authorization"] = accessToken;
//       cookies().set("accessToken", accessToken);

//       return axiosInstance(config);
//     } else {
//       return Promise.reject(error);
//     }
//   }
// );

// export default axiosInstance;

import axios from "axios";
import { cookies } from "next/headers";

import { envConfig } from "@/src/config/envConfig";
import { getNewAccessToken } from "@/src/services/AuthServices";

const axiosInstance = axios.create({
  baseURL: envConfig.baseApi,
});

axiosInstance.interceptors.request.use(
  function (config) {
    const cookieStore = cookies();
    const accessToken = cookieStore.get("accessToken")?.value;
    console.log({accessToken})
    if (accessToken) {
      config.headers.Authorization = accessToken;
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    const { config } = error;

    // Check for 401 response
    if (error.response?.status === 401 && !config?.sent) {
      config.sent = true;
      try {
        const res = await getNewAccessToken();
        const accessToken = res.data.accessToken;

        // Update the Authorization header and cookies
        config.headers["Authorization"] = accessToken;
        cookies().set("accessToken", accessToken);

        return axiosInstance(config); // Retry the original request
      } catch (refreshError) {
        console.error("Failed to refresh token:", refreshError);
        // Optionally handle refresh error (e.g., redirect to login)
      }
    }

    return Promise.reject(error); // Reject the promise for any other error
  },
);

export default axiosInstance;