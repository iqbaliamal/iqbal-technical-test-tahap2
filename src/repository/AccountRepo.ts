import { Accounts } from "../models/Accounts";

interface IAccountRepo {
  transferAmount(fromAccountNumber: number, body: any): Promise<void>;
  checkBalance(accountNumber: number): Promise<Accounts>;
}

export class AccountRepo implements IAccountRepo {
  async transferAmount(fromAccountNumber: number, body: any): Promise<void> {
    try {
      // check if from account exists
      const account = await Accounts.findOne({
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
      const toAccount = await Accounts.findOne({
        where: {
          account_number: body.to_account_number,
        },
      });
      console.log(toAccount);
      if (!toAccount) {
        return Promise.reject(new Error("Account tujuan tidak ditemukan"));
      }

      // update balance
      await Accounts.update(
        {
          balance: (balance - amount).toString(),
        },
        {
          where: {
            account_number: fromAccountNumber,
          },
        },
      );

      console.log((balance - amount).toString());

      await Accounts.update(
        {
          balance: (parseInt(toAccount.balance) + amount).toString(),
        },
        {
          where: {
            account_number: body.to_account_number,
          },
        },
      );
    } catch (error) {
      throw new Error("Error while retrieving account data");
    }
  }

  async checkBalance(accountNumber: number): Promise<Accounts> {
    try {
      const account = await Accounts.findOne({
        where: {
          account_number: accountNumber,
        },
      });
      if (!account) {
        return Promise.reject(new Error("Account tidak ditemukan"));
      }
      return account;
    } catch (error) {
      throw new Error("Error while retrieving account data");
    }
  }
}
