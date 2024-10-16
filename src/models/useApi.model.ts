import { AxiosResponse } from "axios";

export interface UseApiCall<T> {
  call: Promise<AxiosResponse<T>>,
  controller: AbortController
}
