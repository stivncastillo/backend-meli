import { RequestHandler } from 'express'
import { serializerItems } from './item.serializer'
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
