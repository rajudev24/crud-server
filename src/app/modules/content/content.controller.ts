import { Request, Response } from 'express'
import catchAsync from '../../../shared/catchAsync'
import httpStatus from 'http-status'
import sendResponse from '../../../shared/sendResponse'
import { ContentService } from './content.service'

// Cretae Content
const createContent = catchAsync(async (req: Request, res: Response) => {
  const { ...content } = req.body
  const result = await ContentService.createContent(content)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Content created successfully',
    data: result,
  })
})

// GET all Contents
const getContents = catchAsync(async (req: Request, res: Response) => {
  const result = await ContentService.getContents()

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Contents retrive successfully',
    data: result,
  })
})

// GET single Content by ID
const getContent = catchAsync(async (req: Request, res: Response) => {
  const contentId = req.params.id
  const result = await ContentService.getContent(contentId)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Content retrive successfully',
    data: result,
  })
})

// Update All fileds of an Content
const updateContent = catchAsync(async (req: Request, res: Response) => {
  const contentId = req.params.id
  const updatedData = req.body
  const result = await ContentService.updateContent(contentId, updatedData)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Updated successfully',
    data: result,
  })
})

export const ContentController = {
  createContent,
  getContents,
  getContent,
  updateContent,
}
