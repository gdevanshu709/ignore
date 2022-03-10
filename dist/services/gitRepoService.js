"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchGitRepoList = void 0;
const axios_1 = __importDefault(require("../utils/axios"));
const customError_1 = require("../utils/customError");
const errorCodes_1 = require("../constant/errorCodes");
const routeHandlers_1 = require("../utils/routeHandlers");
const fetchGitRepoList = async (page, order, search, per_page, sort) => {
    try {
        const url = (0, routeHandlers_1.searchGitRepoRoute)(search, page, per_page, order, sort);
        const data = await axios_1.default.get(url);
        return data;
    }
    catch (e) {
        throw new customError_1.CustomError(e.message, errorCodes_1.FORBIDDEN);
    }
};
exports.fetchGitRepoList = fetchGitRepoList;
//# sourceMappingURL=gitRepoService.js.map