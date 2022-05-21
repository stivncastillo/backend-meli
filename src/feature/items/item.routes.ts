import express from 'express'
import * as itemController from './item.controller'

const router = express.Router()

router.get('/', itemController.getItems)

// router.get('/:id', (_req, res) => {
//   res.send(itemServices.getItem())
// })

export default router
