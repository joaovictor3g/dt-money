import { TransactionContext } from "@/contexts/TransactionContext";
import { useContext } from "react";

export function useTransaction() {
  return useContext(TransactionContext);
}
