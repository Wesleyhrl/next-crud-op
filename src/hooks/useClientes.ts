import ClienteRepositorio from "@/backend/ClienteRepositorio";
import ColecaoCliente from "@/backend/db/ColecaoCliente";

import { useEffect, useState } from "react";
import Cliente from './../core/Cliente';
import useTableOrForm from "./useTableOrForm";


export default function useClientes(){
    const repo: ClienteRepositorio = new ColecaoCliente();

  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio());
  const [clientes, setClientes] = useState<Cliente[]>([]);

  useEffect(()=>{
    obterTodos();
  }, []);
  function obterTodos(){
    repo.obterTodos().then((clientes) => {
      setClientes(clientes);
      exibirTabela();
    });
  }
  function selecionarCliente(cliente:Cliente) {
    setCliente(cliente);
    exibirFormulario();
  }
  async function excluirCliente(cliente:Cliente) {
    await repo.excluir(cliente);
    obterTodos();
  }
  async function salvarCliente(cliente:Cliente) {
    await repo.salvar(cliente);
    obterTodos();
  }
  function novoCliente(cliente:Cliente) {
    setCliente(Cliente.vazio());
    exibirFormulario();
  }
  const {tabelaVisivel,formularioVisivel,exibirFormulario,exibirTabela} = useTableOrForm();

  return{
    
    cliente,
    clientes,
    novoCliente,
    salvarCliente,
    excluirCliente,
    selecionarCliente,
    obterTodos,
    tabelaVisivel,
    exibirTabela,
    
  }
}