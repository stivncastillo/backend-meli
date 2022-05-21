import { ItemDescription } from './../../types.d'
import { ApiItem, Item } from '../../types'

export const serializerItem = ({ item, description }: {item: ApiItem, description?: ItemDescription}): Item => {
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
    free_shipping: item.shipping.free_shipping,
    description: (description != null) ? description.plain_text : null
  }
}

export const serializerItems = (items: ApiItem[]): Item[] => {
  return items.map(item => serializerItem({ item }))
}
