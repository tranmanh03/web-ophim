import axios from "axios";

const https = axios.create({
  baseURL: "https://phimapi.com/",
  timeout: 60000,
});

// Add a request interceptor
https.interceptors.request.use(function (config: any) {
  return config;
});

// Add a response interceptor
https.interceptors.response.use(
  function (response: any) {
    return { ...response.data };
  },
  async function (err) {
    return { ...err.response?.data };
  }
);
export default https;
