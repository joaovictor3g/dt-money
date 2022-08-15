import { useTransaction } from "@/hooks/useTransaction";
import { SummaryCard } from "../../shared/SummaryCard";
import { Container } from "./styles";

export function Summary() {
  const { transactions } = useTransaction();

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "income") {
        acc.income += transaction.price;
        acc.total += transaction.price;
      } else if (transaction.type === "outcome") {
        acc.outcome += transaction.price;
        acc.total -= transaction.price;
      }
      return acc;
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    }
  );

  return (
    <Container>
      {Object.entries(summary).map(([key, value]) => (
        <SummaryCard
          key={key}
          type={key as "income" | "outcome" | "total"}
          variant={key === "total" ? "green" : undefined}
          price={value}
        />
      ))}
    </Container>
  );
}
