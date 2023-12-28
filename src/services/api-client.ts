import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const axiosInstance = axios.create({
  baseURL: "https://localhost:4000",
});

class APIClient<T> {
  endPoint: string;

  constructor(endPoint: string) {
    this.endPoint = endPoint;
  }

  fetchData = async (requestConfig: AxiosRequestConfig) => {
    return await axiosInstance
      .get<T[]>(this.endPoint, requestConfig)
      .then((res) => res.data);
  };
}

export default APIClient;
