import {
  Model,
  Table,
  Column,
  DataType,
  ForeignKey,
} from "sequelize-typescript";
import { Customers } from "./Customers";

@Table({
  tableName: Accounts.ACCOUNTS_TABLE_NAME,
  timestamps: false,
})
export class Accounts extends Model {
  public static ACCOUNTS_TABLE_NAME = "accounts" as string;
  public static ACCOUNTS_NUMBER = "account_number" as string;
  public static ACCOUNTS_CUSTOMER_NUMBER = "customer_number" as string;
  public static ACCOUNTS_BALANCE = "balance" as string;

  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    field: Accounts.ACCOUNTS_NUMBER,
  })
  account_number!: number;

  @ForeignKey(() => Customers)
  @Column({
    type: DataType.INTEGER,
    field: Accounts.ACCOUNTS_CUSTOMER_NUMBER,
  })
  customer_number!: number;

  @Column({
    type: DataType.STRING(100),
    field: Accounts.ACCOUNTS_BALANCE,
  })
  balance!: string;

  // Customer data
  customer!: Customers;
}
