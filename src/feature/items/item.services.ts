import { ApiItemDescriptionResponse, ItemDescription } from './../../types.d'
import { ApiItem, ApiItemResponse, ApiListResponse } from '../../types'
import client from '../../config/axios'
import { AppErrors } from '../../config/errors'

export const getItems = async (q: string): Promise<ApiItem[]> => {
  try {
    const result = await client.get<ApiListResponse>(`sites/MLA/search?q=${q}`)
    return result.data.results
  } catch (error) {
    throw new Error(AppErrors.ServerDidntRespond)
  }
}

export const getItem = async (id: string): Promise<ApiItem | null> => {
  try {
    const result = await client.get<ApiItemResponse>(`items/${id}`)
    return result.data
  } catch (error) {
    throw new Error(AppErrors.NoItemFound)
  }
}

export const getItemDescription = async (id: string): Promise<ItemDescription | null> => {
  try {
    const result = await client.get<ApiItemDescriptionResponse>(`items/${id}/description`)
    return result.data
  } catch (error) {
    throw new Error(AppErrors.NoItemFound)
  }
}
