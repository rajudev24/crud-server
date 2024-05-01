import mongoose, { Model } from 'mongoose'
export interface IBannerContent {
  heading: string
  subheading: string
  imageUrl: string
}
export interface ISectionOneContent {
  heading: string
  subheading: string
  imageUrl: string
}
export interface ISectionTwoContent {
  heading: string
  subheading: string
  imageUrl: string
}

export type IContent = {
  _id: mongoose.ObjectId
  banner?: IBannerContent
  sectionOne?: ISectionOneContent
  sectionTwo?: ISectionTwoContent
}

export type ContentModel = Model<IContent>
