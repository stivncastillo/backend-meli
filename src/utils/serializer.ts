import { AppErrorResponse } from './../types.d'
import { AppSuccessResponse, DataResponse } from '../types'

export const serializerResponse = (response: DataResponse): AppSuccessResponse => {
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
