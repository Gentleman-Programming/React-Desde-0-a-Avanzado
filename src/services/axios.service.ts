import axios, { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from "axios";

let axiosInstance: AxiosInstance;

const createAxios = (baseURL: string) => {
  axiosInstance = axios.create({ baseURL })
}

const setupInterceptors = () => {
  axiosInstance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const token = localStorage.get("token");
      if (token) {
        config.headers.set(`Authorization Bearer: ${token}`)
      }
      console.log(`Request made to: ${config.url}`)
      return config;
    },
    (error) => {
      return Promise.reject(error)
    }
  );

  axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
      console.log(`Response from: ${response.config.url}`, {
        data: response.data,
        status: response.status,
      });
      return response;
    }, (error) => {
      if (error.response) {
        console.error(`Error response from: ${error.response.config.url}`)
      } {
        console.error(`Error: ${error.message}`)
      }
      return Promise.reject(error)
    }
  )
}


export const initAxios = () => {
  createAxios('https://rickandmortyapi.com/api');
  setupInterceptors();
  return axiosInstance
}
