import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

const config: AxiosRequestConfig = {
  baseURL: 'https://api.mercadolibre.com'
}

const client: AxiosInstance = axios.create(config)

export default client
