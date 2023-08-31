"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckBalanceSchema = exports.TransferSchema = void 0;
const zod_1 = require("zod");
exports.TransferSchema = (0, zod_1.object)({
    body: (0, zod_1.object)({
        to_account_number: (0, zod_1.string)({
            required_error: "to_account_number is required",
        }),
        amount: (0, zod_1.number)({
            required_error: "amount is required",
        }).min(1, "amount must be greater than 0"),
    }),
    params: (0, zod_1.object)({
        from_account_number: (0, zod_1.string)({
            required_error: "from_account_number is required",
        }),
    }),
});
exports.CheckBalanceSchema = (0, zod_1.object)({
    params: (0, zod_1.object)({
        account_number: (0, zod_1.string)({
            required_error: "account_number is required",
        }),
    }),
});
