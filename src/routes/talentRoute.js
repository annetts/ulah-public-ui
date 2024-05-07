import axios from "axios";

const url = "http://localhost:7000";

const axiosAPI = axios.create({
  baseURL: url,
});

const apiFromRequest = (method, url, request) => {
  return axiosAPI({
    method,
    url,
    data: request,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  })
    .then((res) => {
      return Promise.resolve(res.data);
    })
    .catch((err) => {
      return Promise.reject(err);
    });
};

export const postFrom = (url, request) => apiFromRequest("post", url, request);