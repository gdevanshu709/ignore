"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const constants_1 = require("../constant/constants");
const schema = joi_1.default.object({
    page: joi_1.default.number(),
    order: joi_1.default.string().valid(constants_1.ASC_ORDER, constants_1.DESC_ORDER),
    search: joi_1.default.string().required(),
    per_page: joi_1.default.number(),
    sort: joi_1.default.string(),
});
exports.default = schema;
//# sourceMappingURL=schema.js.map