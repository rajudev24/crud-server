import { Schema, model } from 'mongoose'
import { IContent, ContentModel } from './content.interface'

export const ContentSchema = new Schema<IContent, ContentModel>(
  {
    banner: {
      type: {
        heading: { type: String, required: true },
        subheading: { type: String, required: true },
        imageUrl: { type: String, required: true },
      },
      required: false,
    },
    sectionOne: {
      type: {
        heading: { type: String, required: true },
        subheading: { type: String, required: true },
        imageUrl: { type: String, required: true },
      },
      required: false,
    },
    sectionTwo: {
      type: {
        heading: { type: String, required: true },
        subheading: { type: String, required: true },
        imageUrl: { type: String, required: true },
      },
      required: false,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
)

export const Content = model<IContent, ContentModel>('Content', ContentSchema)
