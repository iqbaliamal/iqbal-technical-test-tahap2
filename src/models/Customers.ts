import { Model, Table, Column, DataType } from "sequelize-typescript";

@Table({
  tableName: Customers.CUSTOMERS_TABLE_NAME,
  timestamps: false,
})
export class Customers extends Model {
  public static CUSTOMERS_TABLE_NAME = "customers" as string;
  public static CUSTOMERS_NUMBER = "customer_number" as string;
  public static CUSTOMERS_NAME = "name" as string;

  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    field: Customers.CUSTOMERS_NUMBER,
  })
  customer_number!: number;

  @Column({
    type: DataType.STRING(100),
    field: Customers.CUSTOMERS_NAME,
  })
  name!: string;
}
