import { SummaryCard } from "../../shared/SummaryCard";
import { Container } from "./styles";

export function Summary() {
  return (
    <Container>
      <SummaryCard type="income" />
      <SummaryCard type="outcome" />
      <SummaryCard type="total" variant="green" />
    </Container>
  );
}
