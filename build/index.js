"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_1 = __importDefault(require("./config/database"));
const AccountRoute_1 = __importDefault(require("./routes/AccountRoute"));
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.databaseSync();
        this.plugins();
        this.routes();
    }
    plugins() {
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
    }
    databaseSync() {
        var _a, _b, _c;
        const db = new database_1.default();
        (_a = db.sequelize) === null || _a === void 0 ? void 0 : _a.sync({ force: false });
        (_b = db.sequelize) === null || _b === void 0 ? void 0 : _b.models.Accounts.belongsTo((_c = db.sequelize) === null || _c === void 0 ? void 0 : _c.models.Customers, {
            foreignKey: "customer_number",
            targetKey: "customer_number",
        });
    }
    routes() {
        this.app.route("/").get((req, res) => {
            res.send("Welcome to Technical Test by Iqbal Ikhlasul Amal 🔥");
        });
        this.app.use("/api/v1/account", AccountRoute_1.default);
    }
}
const port = 3005;
const app = new App().app;
app.listen(port, () => {
    console.log("✅ Server started successfully!");
});
