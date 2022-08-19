import { MagnifyingGlass } from "phosphor-react";
import { useForm } from "react-hook-form";
import { Container } from "./styles";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const searchSchema = zod.object({
  query: zod.string(),
});

type SearchFormInputs = zod.infer<typeof searchSchema>;

export function SearchForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchSchema),
  });

  async function handleSearchTransactions(data: SearchFormInputs) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const { query } = data;
    console.log(query);
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
