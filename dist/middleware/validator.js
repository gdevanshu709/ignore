"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const errorCodes_1 = require("../constant/errorCodes");
const schema_1 = __importDefault(require("../validators/schema"));
const validator = (req, res, next) => {
    const validation = schema_1.default.validate(req.query);
    if (validation.error) {
        res.status(errorCodes_1.FAILURE).json({ message: validation.error.details[0].message });
    }
    else {
        return next();
    }
};
exports.default = validator;
//# sourceMappingURL=validator.js.map