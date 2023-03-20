// import axios from "axios";

// const api = axios.create({
//   baseURL: "http:localhost:3000",
// });

// api.interceptors.request.use(
//   async (config) => {
//     const token = localStorage.getItem("accessToken");
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// api.interceptors.response.use(
//   async (response) => {
//     return response;
//   },
//   async (error) => {
//     const originalRequest = error.config;
//     if (error.response.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;
//       const refreshToken = localStorage.getItem("refreshToken");
//       const newToken = await api.post("/auth/refresh", {
//         refreshToken,
//       });
//       localStorage.setItem("accessToken", newToken.data.accessToken);
//       localStorage.setItem("refreshToken", newToken.data.refreshToken);
//       return api(originalRequest);
//     }
//     return Promise.reject(error);
//   }
// );

// export default api;

import axios from "axios";

export const API_URL = `http://localhost:3000`;

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem(
    "accessToken"
  )}`;
  return config;
});

$api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status == 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        const response = await axios.get(`/${API_URL}/auth/refresh`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("refreshToken")}`,
          },
        });
        localStorage.setItem("accessToken", response.data.accessToken);
        localStorage.setItem("refreshToken", response.data.refreshToken);
        return $api.request(originalRequest);
      } catch (e) {
        console.log("Anauthorized");
      }
    }
    throw error;
  }
);

export default $api;
