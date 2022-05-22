import { AppErrorResponse } from './../types.d'
import { AppSuccessResponse, DataItemsResponse, DataItemResponse } from '../types'

export const serializerResponse = (response: DataItemsResponse | DataItemResponse): AppSuccessResponse => {
  return {
    success: true,
    data: response
  }
}

export const serializerErrorResponse = (message: string): AppErrorResponse => {
  return {
    success: false,
    message: message
  }
}
