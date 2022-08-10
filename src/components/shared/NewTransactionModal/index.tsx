import * as Dialog from "@radix-ui/react-dialog";
import { X } from "phosphor-react";
import { Close, Content, Overlay } from "./styles";

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Nova Transação</Dialog.Title>

        <Close>
          <X size={24} />
        </Close>

        <form>
          <input type="text" placeholder="Descricao" required />
          <input type="text" placeholder="Preco" required />
          <input type="text" placeholder="Categoria" required />

          <button type="submit">Cadastrar</button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
