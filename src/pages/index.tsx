import Btn from '@/components/Btn';
import Layout from '@/components/Layout'
import Table from '@/components/Table'
import Form from '@/components/Form';
import useClientes from '@/hooks/useClientes';
import Head from 'next/head';

export default function Home() {
  const { selecionarCliente,
    novoCliente,
    salvarCliente,
    excluirCliente,
    cliente,
    clientes,
    tabelaVisivel,
    exibirTabela } = useClientes();
  return (
    <>
    <Head>
      <title>CRUD Clientes</title>
    </Head>
    <div className="flex h-screen justify-center items-center text-white bg-gradient-to-tr from-[#0F2027] via-[#203A43] to-[#2c5364]">
      <Layout titulo={tabelaVisivel ? "Tabela de clientes": "Cliente"}>
        {tabelaVisivel ? (
          <>
            <Table clientes={clientes} clienteSelecionado={selecionarCliente} clienteExcluido={excluirCliente}></Table>
            <div className='flex justify-center mt-8'>
              <Btn className='bg-[#0F2027] text-white hover:bg-[#0f2027cb]' onClick={novoCliente}>Novo Cliente</Btn>
            </div>
          </>
        ) : (
          <Form cliente={cliente} cancelado={exibirTabela} clienteMudou={salvarCliente}></Form>
        )}

      </Layout>
    </div>
    </>
    
  )
}
