"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchGitRepoRoute = void 0;
const constants_1 = require("../constant/constants");
const searchGitRepoRoute = (search, page, per_page, order, sort) => {
    return `${constants_1.GIT_BASE_URL}search/code?q=${search}+in:file&page=${page}&per_page=${per_page}&order=${order}&sort=${sort}`;
};
exports.searchGitRepoRoute = searchGitRepoRoute;
//# sourceMappingURL=routeHandlers.js.map