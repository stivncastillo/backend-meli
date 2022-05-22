// Responses
export type DataResponse = Item[] | Item & {author: Autor}
export interface AppResponse {
  success: boolean
}
export interface AppSuccessResponse extends AppResponse {
  data: DataResponse
}

export interface AppErrorResponse extends AppResponse {
  message: string
}
export interface ApiItemListResponse {
  results: ApiItem[] | []
}
export type ApiItemResponse = ApiItem
export type ApiItemDescriptionResponse = ApiItemDescription

// Api ML
export interface ApiItem {
  id: string
  title: string
  subtitle: null
  category_id: string
  price: number
  base_price: number
  original_price: null
  condition: string
  currency_id: string
  initial_quantity: number
  shipping: ApiShipping
  available_quantity: number
  sold_quantity: number
  thumbnail: string
}

export interface ApiShipping {
  free_shipping: boolean
}

export interface ApiItemDescription {
  plain_text: string
}

// Models
export interface Item extends Pick<ApiItem, 'id' | 'title' | 'condition'> {
  price: {
    currency: string
    amount: number
    decimals: number
  }
  picture: string
  free_shipping: boolean
  description: string | null
}
export interface Autor {
  name: string
  lastname: string
}
