"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
const joi_1 = __importDefault(require("joi"));
const responseCodes_1 = require("../constant/responseCodes");
const errorCodes_1 = require("../constant/errorCodes");
exports.schema = joi_1.default.object({
    page: joi_1.default.number(),
    order: joi_1.default.string().valid(responseCodes_1.ASC_ORDER, responseCodes_1.DESC_ORDER),
    search: joi_1.default.string().required(),
    per_page: joi_1.default.number(),
    sort: joi_1.default.string(),
});
const validator = (req, res, next) => {
    const validation = exports.schema.validate(req.query);
    if (validation.error) {
        res.status(errorCodes_1.FAILURE).json({ message: validation.error.details[0].message });
    }
    else {
        return next();
    }
};
exports.default = validator;
//# sourceMappingURL=gitRepoValidator.js.map