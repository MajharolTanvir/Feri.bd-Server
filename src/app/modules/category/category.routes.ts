import express from 'express'
import { CategoryValidation } from './category.validation'
import { CategoryController } from './category.controller'
import validateRequest from '../../middleware/validateRequest'
const router = express.Router()

router.post(
  '/add-category',
  validateRequest(CategoryValidation.createCategoryZodSchema),
  CategoryController.addCategory,
)

export const CategoryRoutes = router
