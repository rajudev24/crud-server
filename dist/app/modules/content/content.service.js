"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const content_model_1 = require("./content.model");
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const createContent = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield content_model_1.Content.create(payload);
    return result;
});
const getContents = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield content_model_1.Content.find();
    return result;
});
const getContent = (contentId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield content_model_1.Content.findById(contentId);
    if (!result)
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Content Not Found');
    return result;
});
const updateContent = (contentId, updatedData) => __awaiter(void 0, void 0, void 0, function* () {
    const findContent = yield content_model_1.Content.findById(contentId);
    if (!findContent)
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Content Not Found');
    const result = yield content_model_1.Content.findByIdAndUpdate(contentId, updatedData, {
        new: true,
    });
    return result;
});
exports.ContentService = {
    createContent,
    getContents,
    getContent,
    updateContent,
};
