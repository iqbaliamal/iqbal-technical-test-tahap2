"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CekSaldoSchema = void 0;
const zod_1 = require("zod");
exports.CekSaldoSchema = (0, zod_1.object)({
    params: (0, zod_1.object)({
        customer_number: (0, zod_1.string)({
            required_error: "customer_number is required",
        }),
    }),
});
