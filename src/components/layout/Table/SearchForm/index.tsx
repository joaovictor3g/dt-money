import { MagnifyingGlass } from "phosphor-react";
import { Container } from "./styles";

export function SearchForm() {
  return (
    <Container>
      <input type="text" placeholder="Busque uma transacao" />
      <button type="submit">
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </Container>
  );
}
