import { useTransaction } from "@/hooks/useTransaction";
import { SearchForm } from "./SearchForm";
import { Container, PriceHighlight, TransactionsTable } from "./styles";

export function Table() {
  const { transactions } = useTransaction();

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
