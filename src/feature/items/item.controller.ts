import { serializerResponse, serializerErrorResponse } from './../../utils/serializer'
import { RequestHandler } from 'express'
import { Item } from '../../types'
import { serializerItem, serializerItems } from './item.serializer'
import * as itemServices from './item.services'
import { ErrorMessages } from '../../config/errorsMessages'

export const getItems = (async (req, res) => {
  try {
    const { locals } = res
    const { q } = req.query

    if (q !== '' && q !== undefined) {
      const response = await itemServices.getItems(String(q))
      if (response !== undefined) {
        const serializedItems = serializerItems(response)
        res.status(200).send(serializerResponse({ author: locals.author, ...serializedItems }))
      }

      return
    }

    void res.status(200).send(serializerErrorResponse(ErrorMessages.NoQParam))
  } catch (error) {
    res.status(500).send(serializerErrorResponse(ErrorMessages.ApiNotAvailable))
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
        res.status(200).send(serializerResponse({ author: locals.author, ...serializeditem }))
      }

      return
    }

    void res.status(404).send(serializerErrorResponse(ErrorMessages.NoIdParam))
  } catch (error) {
    res.status(500).send(serializerErrorResponse(String(error)))
  }
}) as RequestHandler
