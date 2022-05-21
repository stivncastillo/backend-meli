import express from 'express'
import * as itemController from './item.controller'

const router = express.Router()

router.get('/', itemController.getItems)
router.get('/:id', itemController.getItem)

export default router
