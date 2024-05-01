import { z } from 'zod'

const createContentZodSchema = z.object({
  body: z.union([
    z.object({
      banner: z.object({
        heading: z.string({
          required_error: 'Heading is required for banner',
        }),
        subheading: z.string({
          required_error: 'Subheading is required for banner',
        }),
        imageUrl: z.string({
          required_error: 'Image URL is required for banner',
        }),
      }),
    }),
    z.object({
      sectionOne: z.object({
        heading: z.string({
          required_error: 'Heading is required for sectionOne',
        }),
        subheading: z.string({
          required_error: 'Subheading is required for sectionOne',
        }),
        imageUrl: z.string({
          required_error: 'Image URL is required for sectionOne',
        }),
      }),
    }),
    z.object({
      sectionTwo: z.object({
        heading: z.string({
          required_error: 'Heading is required for sectionTwo',
        }),
        subheading: z.string({
          required_error: 'Subheading is required for sectionTwo',
        }),
        imageUrl: z.string({
          required_error: 'Image URL is required for sectionTwo',
        }),
      }),
    }),
  ]),
})

const updateOrderZodSchema = z.object({
  body: z.object({
    userId: z.string({
      required_error: 'User ID is required',
    }),
    productId: z.string({
      required_error: 'Product ID is required',
    }),
    productQuantities: z.number({
      required_error: 'Product Quantities is required',
    }),
    totalAmount: z.number({
      required_error: 'Total Amount is required',
    }),
    payerName: z.string({
      required_error: 'Payer Name is required',
    }),
  }),
})
const partialUpdateOrderZodSchema = z.object({
  body: z.object({
    userId: z.string({
      required_error: 'User ID is required',
    }),
    productId: z.string({
      required_error: 'Product ID is required',
    }),
    productQuantities: z.number().optional(),
    totalAmount: z.number().optional(),
    payerName: z.string().optional(),
  }),
})

export const ContentDataValidation = {
  updateOrderZodSchema,
  partialUpdateOrderZodSchema,
  createContentZodSchema,
}
