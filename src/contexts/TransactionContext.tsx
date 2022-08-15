import { api } from "@/services/api";
import { dateFormatter, priceFormatter } from "@/utils/formatter";
import { createContext, ReactNode, useEffect, useState } from "react";
import { Transaction } from "transactions";

interface TransactionContextType {
  transactions: Transaction[];
}

interface TransactionProviderProps {
  children: ReactNode;
}

export const TransactionContext = createContext({} as TransactionContextType);

export function TransactionsProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  async function loadTransactions() {
    try {
      const response = await api.get<Transaction[]>("/transactions");

      const parsedTransactions = response.data.map((data) => ({
        ...data,
        priceFormatted: priceFormatter(data.price),
        dateFormatted: dateFormatter(new Date(data.createdAt)),
      }));

      setTransactions(parsedTransactions);
    } catch {}
  }

  useEffect(() => {
    loadTransactions();
  }, []);

  return (
    <TransactionContext.Provider value={{ transactions }}>
      {children}
    </TransactionContext.Provider>
  );
}
