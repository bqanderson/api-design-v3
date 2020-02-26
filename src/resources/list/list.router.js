import { Router } from 'express'
import controllers from './list.controllers'

const router = Router()

/**
 * @route   /api/list
 */
router
  .route('/')
  .get(controllers.getOne)
  .post(controllers.createOne)

/**
 * @route   /api/list/:id
 */
router
  .route('/:id')
  .get(controllers.getOne)
  .put(controllers.updateOne)
  .delete(controllers.deleteOne)

export default router
