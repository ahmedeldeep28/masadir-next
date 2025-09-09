import axios from "axios";

export const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_BASE_URL}/api`,
});

//  Interceptor for Response
api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    let message = "حدث خطأ غير متوقع";

    if (error.response) {
      message = error.response.data?.message || error.response.statusText;
    } else if (error.request) {
      message = "لا يوجد استجابة من السيرفر";
    } else {
      message = error.message;
    }

    return Promise.reject(new Error(message));
  }
);
