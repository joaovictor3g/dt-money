declare module "transactions" {
  type SummaryType = "income" | "outcome" | "total";

  interface Transaction {
    id?: number;
    description: string;
    type: "income" | "outcome";
    price: number;
    createdAt?: Date;
    category: string;
    priceFormatted?: string;
    dateFormatted?: string;
  }
}
