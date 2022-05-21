export interface ApiListResponse {
  results: ApiItem[] | []
}

export interface ApiItem {
  id: string
  site_id: string
  title: string
  price: number
  sale_price: number | null
  currency_id: string
  available_quantity: number
  sold_quantity: number
  buying_mode: string
  listing_type_id: string
  stop_time: Date | string
  condition: string
  permalink: string
  thumbnail: string
  thumbnail_id: string
  accepts_mercadopago: boolean
  original_price: number | null
  category_id: string
  catalog_product_id: number | null
  tags: string[]
  order_backend: number
  use_thumbnail_id: boolean
  shipping: {
    free_shipping: true
  }
}

export interface Item extends Pick<ApiItem, 'id' | 'title' | 'condition'> {
  price: {
    currency: string
    amount: number
    decimals: number
  }
  picture: string
  free_shipping: true
}
