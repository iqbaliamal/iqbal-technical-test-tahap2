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
exports.AccountRepo = void 0;
const Accounts_1 = require("../models/Accounts");
class AccountRepo {
    transferAmount(fromAccountNumber, body) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // check if from account exists
                const account = yield Accounts_1.Accounts.findOne({
                    where: {
                        account_number: fromAccountNumber,
                    },
                });
                if (!account) {
                    return Promise.reject(new Error("Account tidak ditemukan"));
                }
                // check if balance is sufficient
                const balance = parseInt(account.balance);
                const amount = body.amount;
                console.log(body.amount);
                console.log(balance, amount);
                if (balance < amount) {
                    return Promise.reject(new Error("Saldo tidak mencukupi"));
                }
                // check if to account exists
                const toAccount = yield Accounts_1.Accounts.findOne({
                    where: {
                        account_number: body.to_account_number,
                    },
                });
                console.log(toAccount);
                if (!toAccount) {
                    return Promise.reject(new Error("Account tujuan tidak ditemukan"));
                }
                // update balance
                yield Accounts_1.Accounts.update({
                    balance: (balance - amount).toString(),
                }, {
                    where: {
                        account_number: fromAccountNumber,
                    },
                });
                console.log((balance - amount).toString());
                yield Accounts_1.Accounts.update({
                    balance: (parseInt(toAccount.balance) + amount).toString(),
                }, {
                    where: {
                        account_number: body.to_account_number,
                    },
                });
            }
            catch (error) {
                throw new Error("Error while retrieving account data");
            }
        });
    }
    checkBalance(accountNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const account = yield Accounts_1.Accounts.findOne({
                    where: {
                        account_number: accountNumber,
                    },
                });
                if (!account) {
                    return Promise.reject(new Error("Account tidak ditemukan"));
                }
                return account;
            }
            catch (error) {
                throw new Error("Error while retrieving account data");
            }
        });
    }
}
exports.AccountRepo = AccountRepo;
