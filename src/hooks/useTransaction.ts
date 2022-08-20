import { TransactionContext } from "@/contexts/TransactionContext";
import { Transaction } from "transactions";
import { useContextSelector } from "use-context-selector";

interface TransactionContextType {
  transactions: Transaction[];
  fetchTransactions: (query?: string) => Promise<void>;
  createTransaction: (transaction: Transaction) => Promise<void>;
}

export function useTransaction(ctxObservers: (keyof TransactionContextType)[]) {
  const ctxSelector = useContextSelector(TransactionContext, (context) => {
    const observers = ctxObservers.reduce((acc, observer) => {
      return {
        ...acc,
        [observer]: context[observer],
      };
    }, {}) as TransactionContextType;

    return observers;
  });

  return ctxSelector;
}
