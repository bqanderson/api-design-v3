import { Router } from 'express'
import controllers from './item.controllers'

const router = Router()

/** === @route /api/item === */
router
  .route('/')
  .get(controllers.getMany)
  .post(controllers.createOne)

/** === @route /api/item/:id === */
router
  .route('/:id')
  .get(controllers.getOne)
  .put(controllers.updateOne)
  .delete(controllers.removeOne)

export default router
