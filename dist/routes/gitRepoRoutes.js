"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const gitRepoController_1 = __importDefault(require("../controllers/gitRepoController"));
const validator_1 = __importDefault(require("../middleware/validator"));
const router = express_1.default.Router();
router.get('/', validator_1.default, gitRepoController_1.default);
exports.default = router;
//# sourceMappingURL=gitRepoRoutes.js.map