import { api } from "@/services/api";
import { dateFormatter, priceFormatter } from "@/utils/formatter";
import { createContext, ReactNode, useEffect, useState } from "react";
import { Transaction } from "transactions";

interface TransactionContextType {
  transactions: Transaction[];
  fetchTransactions: (query?: string) => Promise<void>;
}

interface TransactionProviderProps {
  children: ReactNode;
}

export const TransactionContext = createContext({} as TransactionContextType);

export function TransactionsProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  async function fetchTransactions(query?: string) {
    try {
      const response = await api.get<Transaction[]>("/transactions", {
        params: {
          q: query,
        },
      });

      const parsedTransactions = response.data.map((data) => ({
        ...data,
        priceFormatted: priceFormatter(data.price),
        dateFormatted: dateFormatter(new Date(data.createdAt)),
      }));

      setTransactions(parsedTransactions);
    } catch {}
  }

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <TransactionContext.Provider value={{ transactions, fetchTransactions }}>
      {children}
    </TransactionContext.Provider>
  );
}
