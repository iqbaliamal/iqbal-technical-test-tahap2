"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const AccountRepo_1 = require("../repository/AccountRepo");
class AccountController {
    constructor() {
        this.transferAmount = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { from_account_number } = req.params;
                const transfer = yield this.accountRepo.transferAmount(parseInt(from_account_number), req.body);
                res.status(201).json(transfer);
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(404).json({
                        status: "failed",
                        message: error.message,
                    });
                }
                else {
                    res.status(500).json({
                        status: "error",
                        message: "Internal Server Error!",
                    });
                }
            }
        });
        this.checkBalance = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { account_number } = req.params;
                const balance = yield this.accountRepo.checkBalance(parseInt(account_number));
                res.status(200).json(balance);
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(404).json({
                        status: "failed",
                        message: error.message,
                    });
                }
                else {
                    res.status(500).json({
                        status: "error",
                        message: "Internal Server Error!",
                    });
                }
            }
        });
        this.accountRepo = new AccountRepo_1.AccountRepo();
    }
}
exports.default = AccountController;
