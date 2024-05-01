"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Content = exports.ContentSchema = void 0;
const mongoose_1 = require("mongoose");
exports.ContentSchema = new mongoose_1.Schema({
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
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.Content = (0, mongoose_1.model)('Content', exports.ContentSchema);
