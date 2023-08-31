import { object, string, TypeOf, number } from "zod";

export const TransferSchema = object({
  body: object({
    to_account_number: string({
      required_error: "to_account_number is required",
    }),
    amount: number({
      required_error: "amount is required",
    }).min(1, "amount must be greater than 0"),
  }),
  params: object({
    from_account_number: string({
      required_error: "from_account_number is required",
    }),
  }),
});

export const CheckBalanceSchema = object({
  params: object({
    account_number: string({
      required_error: "account_number is required",
    }),
  }),
});

export type TransferInput = TypeOf<typeof TransferSchema>["body"];
export type TransferParams = TypeOf<typeof TransferSchema>["params"];

export type CheckBalanceInput = TypeOf<typeof CheckBalanceSchema>["params"];
