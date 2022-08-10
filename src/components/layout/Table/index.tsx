import { SearchForm } from "./SearchForm";
import { Container, PriceHighlight, TransactionsTable } from "./styles";

export function Table() {
  return (
    <Container>
      <SearchForm />
      <TransactionsTable>
        <tbody>
          <tr>
            <td width="50%">Desenvolvimento de site</td>
            <td>
              <PriceHighlight variant="income">R$ 12.000,00</PriceHighlight>
            </td>
            <td>Venda</td>
            <td>13/04/2022</td>
          </tr>
          <tr>
            <td width="50%">Desenvolvimento de site</td>
            <td>
              <PriceHighlight variant="outcome"> - R$ 12.000,00</PriceHighlight>
            </td>
            <td>Venda</td>
            <td>13/04/2022</td>
          </tr>
          <tr>
            <td width="50%">Desenvolvimento de site</td>
            <td>
              <PriceHighlight variant="income">R$ 12.000,00</PriceHighlight>
            </td>
            <td>Venda</td>
            <td>13/04/2022</td>
          </tr>
        </tbody>
      </TransactionsTable>
    </Container>
  );
}
