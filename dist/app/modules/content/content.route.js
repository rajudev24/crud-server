"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentRoutes = void 0;
const express_1 = __importDefault(require("express"));
const content_controller_1 = require("./content.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const content_validation_1 = require("./content.validation");
const router = express_1.default.Router();
router.post('/create-content', (0, validateRequest_1.default)(content_validation_1.ContentDataValidation.createContentZodSchema), content_controller_1.ContentController.createContent);
router.get('/get-contents', content_controller_1.ContentController.getContents);
router.get('/:id', content_controller_1.ContentController.getContent);
router.patch('/:id', content_controller_1.ContentController.updateContent);
exports.ContentRoutes = router;
