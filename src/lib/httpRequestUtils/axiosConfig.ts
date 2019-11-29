import { showLoading, hideLoading } from './loading'
export function axiosConfig (axios, HttpRequestUtils) {
  axios.defaults.baseURL = HttpRequestUtils.baseUrl
  axios.defaults.timeout = HttpRequestUtils.timeOut
    // Add a request interceptor
  axios.interceptors.request.use((config: any) => {
    showLoading()
    // Do something before request is sent
    return config
  }, (error) => {
    // Do something with request error
    return Promise.reject(error)
  })

  // Add a response interceptor
  axios.interceptors.response.use((response: any) => {
    hideLoading()
    // Do something with response data
    return response
  }, (error) => {
    // Do something with response error
    hideLoading()
    return Promise.reject(error);
  })
}
