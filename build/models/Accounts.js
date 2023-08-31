"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Accounts = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const Customers_1 = require("./Customers");
let Accounts = class Accounts extends sequelize_typescript_1.Model {
};
exports.Accounts = Accounts;
Accounts.ACCOUNTS_TABLE_NAME = "accounts";
Accounts.ACCOUNTS_NUMBER = "account_number";
Accounts.ACCOUNTS_CUSTOMER_NUMBER = "customer_number";
Accounts.ACCOUNTS_BALANCE = "balance";
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        primaryKey: true,
        field: Accounts.ACCOUNTS_NUMBER,
    }),
    __metadata("design:type", Number)
], Accounts.prototype, "account_number", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Customers_1.Customers),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        field: Accounts.ACCOUNTS_CUSTOMER_NUMBER,
    }),
    __metadata("design:type", Number)
], Accounts.prototype, "customer_number", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(100),
        field: Accounts.ACCOUNTS_BALANCE,
    }),
    __metadata("design:type", String)
], Accounts.prototype, "balance", void 0);
exports.Accounts = Accounts = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: Accounts.ACCOUNTS_TABLE_NAME,
        timestamps: false,
    })
], Accounts);
