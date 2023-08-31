import { object, string, TypeOf, number } from "zod";

export const CekSaldoSchema = object({
  params: object({
    customer_number: string({
      required_error: "customer_number is required",
    }),
  }),
});

export type CekSaldoInput = TypeOf<typeof CekSaldoSchema>["params"];
