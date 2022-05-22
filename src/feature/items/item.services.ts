import { ApiItemDescriptionResponse, ApiItemDescription } from './../../types.d'
import { ApiItem, ApiItemResponse, ApiItemListResponse } from '../../types'
import client from '../../config/axios'
import { ErrorMessages } from '../../config/errorsMessages'

export const getItems = async (q: string): Promise<ApiItemListResponse> => {
  try {
    const result = await client.get<ApiItemListResponse>(`sites/MLA/search?q=${q}`)

    return {
      results: result.data.results,
      filters: result.data.filters
    }
  } catch (error) {
    throw new Error(ErrorMessages.ServerDidntRespond)
  }
}

export const getItem = async (id: string): Promise<ApiItem | null> => {
  try {
    const result = await client.get<ApiItemResponse>(`items/${id}`)
    return result.data
  } catch (error) {
    throw new Error(ErrorMessages.NoItemFound)
  }
}

export const getItemDescription = async (id: string): Promise<ApiItemDescription | null> => {
  try {
    const result = await client.get<ApiItemDescriptionResponse>(`items/${id}/description`)
    return result.data
  } catch (error) {
    throw new Error(ErrorMessages.NoItemFound)
  }
}
