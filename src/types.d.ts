export interface ApiListResponse {
  results: ApiItem[] | []
}
export type ApiItemResponse = ApiItem
export type ApiItemDescriptionResponse = ItemDescription

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
  shipping: Shipping
  available_quantity: number
  sold_quantity: number
  thumbnail: string
}

export interface Shipping {
  free_shipping: boolean
}

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

export interface ItemDescription {
  plain_text: string
}
