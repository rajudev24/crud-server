import express from 'express'
import { ContentController } from './content.controller'
import validateRequest from '../../middlewares/validateRequest'
import { ContentDataValidation } from './content.validation'

const router = express.Router()

router.post(
  '/create-content',
  validateRequest(ContentDataValidation.createContentZodSchema),
  ContentController.createContent,
)

router.get('/get-contents', ContentController.getContents)

router.get('/:id', ContentController.getContent)

router.patch('/:id', ContentController.updateContent)

export const ContentRoutes = router
