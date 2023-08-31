"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseRouter_1 = __importDefault(require("./base/BaseRouter"));
const AccountController_1 = __importDefault(require("../controllers/AccountController"));
const validate_1 = __importDefault(require("../middleware/validate"));
const AccountSchema_1 = require("../schema/AccountSchema");
class AccountRoutes extends BaseRouter_1.default {
    routes() {
        const accountController = new AccountController_1.default();
        this.router.get("/:account_number", (0, validate_1.default)(AccountSchema_1.CheckBalanceSchema), accountController.checkBalance);
        this.router.post("/:from_account_number/transfer", (0, validate_1.default)(AccountSchema_1.TransferSchema), accountController.transferAmount);
    }
}
exports.default = new AccountRoutes().router;
