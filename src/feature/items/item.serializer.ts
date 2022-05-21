import { ApiItem, Item } from '../../types'

export const serializerItem = (item: ApiItem): Item => {
  return {
    id: item.id,
    title: item.title,
    price: {
      currency: item.currency_id,
      amount: item.price,
      decimals: 2
    },
    picture: item.thumbnail,
    condition: item.condition,
    free_shipping: item.shipping.free_shipping
  }
}

export const serializerItems = (items: ApiItem[]): Item[] => {
  return items.map(serializerItem)
}
