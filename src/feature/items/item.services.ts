import { ApiItem, ApiListResponse } from '../../types'
import itemsData from '../../data/item.data.json'
import client from '../../config/axios'
import { AppErrors } from '../../config/errors'

// temp
const items: ApiItem[] = itemsData.results as ApiItem[]

export const getItems = async (q: string): Promise<ApiItem[] | undefined> => {
  try {
    const result = await client.get<ApiListResponse>(`search?q=${q}`)
    if (result.data.results.length > 0) {
      return result.data.results
    }

    return undefined
  } catch (error) {
    throw new Error(AppErrors.ServerDidntRespond)
  }
}
export const getItem = (): ApiItem => items[0] ?? null
