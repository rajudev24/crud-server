import httpStatus from 'http-status'
import { Content } from './content.model'
import { IContent } from './content.interface'
import ApiError from '../../../errors/ApiError'

const createContent = async (payload: IContent): Promise<IContent> => {
  const result = await Content.create(payload)
  return result
}

const getContents = async (): Promise<IContent[]> => {
  const result = await Content.find()
  return result
}

const getContent = async (contentId: string): Promise<IContent | null> => {
  const result = await Content.findById(contentId)
  if (!result) throw new ApiError(httpStatus.NOT_FOUND, 'Content Not Found')
  return result
}

const updateContent = async (
  contentId: string,
  updatedData: Partial<IContent>,
): Promise<IContent | null> => {
  const findContent = await Content.findById(contentId)
  if (!findContent)
    throw new ApiError(httpStatus.NOT_FOUND, 'Content Not Found')
  const result = await Content.findByIdAndUpdate(contentId, updatedData, {
    new: true,
  })
  return result
}

export const ContentService = {
  createContent,
  getContents,
  getContent,
  updateContent,
}
