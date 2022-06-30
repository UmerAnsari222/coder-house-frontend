import axios from "axios";

const url = "http://localhost:5500";

const api = axios.create({
  "Content-Type": "application/json",
  withCredentials: true,
  Accept: "application/json",
});

export const sendOtp = (data) => api.post(`${url}/api/send-otp`, data);
export const verifyOtp = (data) => api.post(`${url}/api/verify-otp`, data);
export const activate = (data) => api.post(`${url}/api/activate`, data);
export const logout = (data) => api.post(`${url}/api/logout`);
export const createRoom = (data) => api.post(`${url}/api/rooms`, data);
export const getAllRooms = () => api.get(`${url}/api/rooms`);

// Interceptor

api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status === 401 &&
      originalRequest &&
      !originalRequest._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        const response = await axios.get(`${url}/api/refresh`, {
          withCredentials: true,
        });
        return api.request(originalRequest);
      } catch (error) {
        console.log(error.message);
      }
    }
    throw error;
  }
);

export default api;
