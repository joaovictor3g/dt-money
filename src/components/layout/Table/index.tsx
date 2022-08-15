import { api } from "@/services/api";
import { useEffect, useState } from "react";
import { SearchForm } from "./SearchForm";
import { Container, PriceHighlight, TransactionsTable } from "./styles";

interface TransactionProps {
  id: number;
  description: string;
  type: "income" | "outcome";
  price: number;
  createdAt: Date;
  category: string;
  priceFormatted?: string;
  dateFormatted?: string;
}

export function Table() {
  const [transactions, setTransactions] = useState<TransactionProps[]>([]);

  async function loadTransactions() {
    try {
      const response = await api.get<TransactionProps[]>("/transactions");

      const parsedTransactions = response.data.map((data) => ({
        ...data,
        priceFormatted: new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(data.price),
        dateFormatted: new Intl.DateTimeFormat("pt-BR").format(
          new Date(data.createdAt)
        ),
      }));

      setTransactions(parsedTransactions);
    } catch {}
  }

  useEffect(() => {
    loadTransactions();
  }, []);

  return (
    <Container>
      <SearchForm />
      <TransactionsTable>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td width="50%">{transaction.description}</td>
              <td>
                <PriceHighlight variant={transaction.type}>
                  {transaction?.priceFormatted ?? 0}
                </PriceHighlight>
              </td>
              <td>{transaction.category}</td>
              <td>{String(transaction?.dateFormatted ?? "No date")}</td>
            </tr>
          ))}
        </tbody>
      </TransactionsTable>
    </Container>
  );
}
