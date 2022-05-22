// Responses
export interface DataItemsResponse {
  items: Item[]
  author: Autor
  categories: Category[]
}
export interface DataItemResponse {
  item: Item
  author: Autor
}
export interface AppResponse {
  success: boolean
}
export interface AppSuccessResponse extends AppResponse {
  data: DataItemsResponse | DataItemResponse
}

export interface AppErrorResponse extends AppResponse {
  message: string
}
export interface ApiItemListResponse {
  results: ApiItem[] | []
  filters: ApiFilter[]
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

export interface ApiFilter {
  id: string
  name: string
  type: string
  values: ApiValue[]
}

export interface ApiValue {
  id: string
  name: string
  path_from_root: ApiPathFromRoot[]
}

export interface ApiPathFromRoot {
  id: string
  name: string
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

export interface Category {
  id: string
  name: string
}
