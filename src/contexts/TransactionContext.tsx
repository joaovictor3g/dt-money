import { api } from "@/services/api";
import { dateFormatter, priceFormatter } from "@/utils/formatter";
import { ReactNode, useEffect, useState } from "react";
import { Transaction } from "transactions";
import { createContext } from "use-context-selector";

interface TransactionContextType {
  transactions: Transaction[];
  fetchTransactions: (query?: string) => Promise<void>;
  createTransaction: (transaction: Transaction) => Promise<void>;
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
          _sort: "createdAt",
          _order: "desc",
        },
      });

      const parsedTransactions = response.data.map((data) => ({
        ...data,
        priceFormatted: priceFormatter(data.price),
        dateFormatted: dateFormatter(new Date(data?.createdAt ?? "")),
      }));

      setTransactions(parsedTransactions);
    } catch {}
  }

  async function createTransaction(transaction: Transaction) {
    const { category, description, price, type } = transaction;

    try {
      const response = await api.post<Transaction>("/transactions", {
        category,
        description,
        price,
        type,
        createdAt: new Date(),
      });
      const { price: responsePrice, createdAt, ...rest } = response.data;
      const newTransaction = {
        ...rest,
        price: responsePrice,
        priceFormatted: priceFormatter(responsePrice),
        dateFormatted: dateFormatter(new Date(createdAt ?? "")),
      };

      setTransactions((oldTransactions) => [
        newTransaction,
        ...oldTransactions,
      ]);
    } catch {}
  }

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <TransactionContext.Provider
      value={{ transactions, fetchTransactions, createTransaction }}
    >
      {children}
    </TransactionContext.Provider>
  );
}
