import { Request, Response } from "express";
import { AccountRepo } from "../repository/AccountRepo";
import { ParsedUrlQuery } from "querystring";

interface Params extends ParsedUrlQuery {
  from_account_number: string;
  account_number: string;
}

class AccountController {
  private accountRepo: AccountRepo;

  constructor() {
    this.accountRepo = new AccountRepo();
  }

  transferAmount = async (req: Request, res: Response) => {
    try {
      const { from_account_number } = req.params as Params;
      const transfer = await this.accountRepo.transferAmount(
        parseInt(from_account_number),
        req.body,
      );
      res.status(201).json(transfer);
    } catch (error) {
      if (error instanceof Error) {
        res.status(404).json({
          status: "failed",
          message: error.message,
        });
      } else {
        res.status(500).json({
          status: "error",
          message: "Internal Server Error!",
        });
      }
    }
  };

  checkBalance = async (req: Request, res: Response) => {
    try {
      const { account_number } = req.params as Params;
      const balance = await this.accountRepo.checkBalance(
        parseInt(account_number),
      );
      res.status(200).json(balance);
    } catch (error) {
      if (error instanceof Error) {
        res.status(404).json({
          status: "failed",
          message: error.message,
        });
      } else {
        res.status(500).json({
          status: "error",
          message: "Internal Server Error!",
        });
      }
    }
  };
}

export default AccountController;
