"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gitRepoService_1 = require("../services/gitRepoService");
const constants_1 = require("../constant/constants");
const errorCodes_1 = require("../constant/errorCodes");
const constants_2 = require("../constant/constants");
const gitRepoController = async (req, res) => {
    var _a;
    try {
        const search = req.query.search;
        const page = req.query.page;
        const per_page = req.query.per_page || constants_2.PER_PAGE;
        const order = req.query.order || constants_1.ASC_ORDER;
        const sort = req.query.sort;
        const getRepo = await (0, gitRepoService_1.fetchGitRepoList)(page, order, search, per_page, sort);
        const data = (_a = getRepo === null || getRepo === void 0 ? void 0 : getRepo.data) === null || _a === void 0 ? void 0 : _a.items;
        return res.status(errorCodes_1.SUCCESS).json({ data });
    }
    catch (e) {
        res.status(403).json({ e });
    }
};
exports.default = gitRepoController;
//# sourceMappingURL=gitRepoController.js.map