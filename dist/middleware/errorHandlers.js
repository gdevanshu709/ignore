"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const responseCodes_1 = require("../constant/responseCodes");
const errorCodes_1 = require("../constant/errorCodes");
function handleError(err, res, next) {
    const status = err.status || errorCodes_1.INTERNAL_SERVER_ERROR;
    const message = err.message || responseCodes_1.ERROR_MESSAGE;
    res.status(status).send({
        message,
        status,
    });
}
exports.default = handleError;
//# sourceMappingURL=errorHandlers.js.map