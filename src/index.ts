import express, { Application, Request, Response } from "express";
import Database from "./config/database";
import AccountRoute from "./routes/AccountRoute";

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.databaseSync();
    this.plugins();
    this.routes();
  }

  protected plugins(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  protected databaseSync(): void {
    const db = new Database();
    db.sequelize?.sync({ force: false });
    db.sequelize?.models.Accounts.belongsTo(db.sequelize?.models.Customers, {
      foreignKey: "customer_number",
      targetKey: "customer_number",
    });
  }

  protected routes(): void {
    this.app.route("/").get((req: Request, res: Response) => {
      res.send("Welcome to Technical Test by Iqbal Ikhlasul Amal 🔥");
    });
    this.app.use("/api/v1/account", AccountRoute);
  }
}

const port: number = 8000;
const app = new App().app;

app.listen(port, () => {
  console.log("✅ Server started successfully!");
});

export default app;
