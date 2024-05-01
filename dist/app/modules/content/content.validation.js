"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentDataValidation = void 0;
const zod_1 = require("zod");
const createContentZodSchema = zod_1.z.object({
    body: zod_1.z.union([
        zod_1.z.object({
            banner: zod_1.z.object({
                heading: zod_1.z.string({
                    required_error: 'Heading is required for banner',
                }),
                subheading: zod_1.z.string({
                    required_error: 'Subheading is required for banner',
                }),
                imageUrl: zod_1.z.string({
                    required_error: 'Image URL is required for banner',
                }),
            }),
        }),
        zod_1.z.object({
            sectionOne: zod_1.z.object({
                heading: zod_1.z.string({
                    required_error: 'Heading is required for sectionOne',
                }),
                subheading: zod_1.z.string({
                    required_error: 'Subheading is required for sectionOne',
                }),
                imageUrl: zod_1.z.string({
                    required_error: 'Image URL is required for sectionOne',
                }),
            }),
        }),
        zod_1.z.object({
            sectionTwo: zod_1.z.object({
                heading: zod_1.z.string({
                    required_error: 'Heading is required for sectionTwo',
                }),
                subheading: zod_1.z.string({
                    required_error: 'Subheading is required for sectionTwo',
                }),
                imageUrl: zod_1.z.string({
                    required_error: 'Image URL is required for sectionTwo',
                }),
            }),
        }),
    ]),
});
const updateOrderZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        userId: zod_1.z.string({
            required_error: 'User ID is required',
        }),
        productId: zod_1.z.string({
            required_error: 'Product ID is required',
        }),
        productQuantities: zod_1.z.number({
            required_error: 'Product Quantities is required',
        }),
        totalAmount: zod_1.z.number({
            required_error: 'Total Amount is required',
        }),
        payerName: zod_1.z.string({
            required_error: 'Payer Name is required',
        }),
    }),
});
const partialUpdateOrderZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        userId: zod_1.z.string({
            required_error: 'User ID is required',
        }),
        productId: zod_1.z.string({
            required_error: 'Product ID is required',
        }),
        productQuantities: zod_1.z.number().optional(),
        totalAmount: zod_1.z.number().optional(),
        payerName: zod_1.z.string().optional(),
    }),
});
exports.ContentDataValidation = {
    updateOrderZodSchema,
    partialUpdateOrderZodSchema,
    createContentZodSchema,
};
