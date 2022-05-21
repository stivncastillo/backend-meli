import { RequestHandler } from 'express'
import { Item } from '../../types'
import { serializerItem, serializerItems } from './item.serializer'
import * as itemServices from './item.services'

export const getItems = (async (req, res) => {
  try {
    const { q } = req.query

    if (q !== '' && q !== undefined) {
      const response = await itemServices.getItems(String(q))
      if (response !== undefined) {
        res.status(200).send(serializerItems(response))
      }

      return
    }

    void res.status(200).send({ message: 'No hay un parametro q' })
  } catch (error) {
    res.status(500).json({ message: 'Papi falló' })
  }
}) as RequestHandler

export const getItem = (async (req, res) => {
  try {
    const { locals } = res
    const { id } = req.params

    if (id !== '' && id !== undefined) {
      const promiseItemInfo = await Promise.all([
        itemServices.getItem(String(id)),
        itemServices.getItemDescription(String(id))
      ])

      const [item, description] = promiseItemInfo

      if (item !== null && description !== null) {
        const serializeditem: Item = serializerItem({ item, description })
        res.status(200).send({ author: locals.author, ...serializeditem })
      }

      return
    }

    void res.status(404).send({ message: 'No hay un parametro id' })
  } catch (error) {
    res.status(500).json({ message: error })
  }
}) as RequestHandler
