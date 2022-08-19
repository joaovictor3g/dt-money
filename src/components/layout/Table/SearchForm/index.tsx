import { MagnifyingGlass } from "phosphor-react";
import { useForm } from "react-hook-form";
import { Container } from "./styles";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransaction } from "@/hooks/useTransaction";

const searchSchema = zod.object({
  query: zod.string(),
});

type SearchFormInputs = zod.infer<typeof searchSchema>;

export function SearchForm() {
  const { fetchTransactions } = useTransaction();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchSchema),
  });

  async function handleSearchTransactions(data: SearchFormInputs) {
    const { query } = data;
    await fetchTransactions(query);
  }

  return (
    <Container onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Busque uma transacao"
        {...register("query")}
      />
      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </Container>
  );
}
