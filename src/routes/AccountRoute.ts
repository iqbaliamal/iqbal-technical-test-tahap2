import BaseRoutes from "./base/BaseRouter";
import AccountController from "../controllers/AccountController";
import validate from "../middleware/validate";
import { TransferSchema, CheckBalanceSchema } from "../schema/AccountSchema";

class AccountRoutes extends BaseRoutes {
  public routes(): void {
    const accountController = new AccountController();

    this.router.get(
      "/:account_number",
      validate(CheckBalanceSchema),
      accountController.checkBalance,
    );
    this.router.post(
      "/:from_account_number/transfer",
      validate(TransferSchema),
      accountController.transferAmount,
    );
  }
}

export default new AccountRoutes().router;
