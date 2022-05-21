import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

const config: AxiosRequestConfig = {
  // baseURL: process.env.API_URL
  baseURL: 'https://api.mercadolibre.com/sites/MLA/'
}

const client: AxiosInstance = axios.create(config)

export default client
