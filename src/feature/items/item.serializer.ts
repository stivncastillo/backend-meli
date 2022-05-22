import { ApiFilter, ApiItemDescription, Category } from './../../types.d'
import { ApiItem, Item } from '../../types'

export const serializerItem = ({ item, description }: {item: ApiItem, description?: ApiItemDescription}): Item => {
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

export const serializerCategories = (filters: ApiFilter[]): Category[] => {
  const categoryFilter = filters.find(filter => filter.id === 'category')
  if (categoryFilter != null) {
    return categoryFilter.values[0].path_from_root.map(category => ({
      id: category.id,
      name: category.name
    }))
  }

  return []
}
