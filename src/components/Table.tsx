import Cliente from './../core/Cliente';
import { IconEdit, IconRemove, iconSearch } from './Icons';
import { useState } from 'react';

interface TabelaProps {
    clientes: Cliente[];
    clienteSelecionado?: (cliente: Cliente) => void;
    clienteExcluido?: (cliente: Cliente) => void;
}

export default function Table(props: TabelaProps) {
    const [pesquisa , setPesquisa] = useState("");
    const exbirAcoes = props.clienteExcluido || props.clienteSelecionado;
    function renderizarDados() {

        return props.clientes?.filter((c) => c.nome.toLowerCase().includes(pesquisa.toLowerCase().trim())).map((c, i) => {
            return (
                <tr key={c.id} className={`border-b-2 border-gray-300  ${i % 2 === 0 ? "bg-gray-50" : "bg-gray-200"}`}>
                    <td className='p-2 '>{c.id}</td>
                    <td className='p-2'>{c.nome}</td>
                    <td className='p-2'>{c.idade}</td>
                    <td className='p-2'>{c.email}</td>
                    {exbirAcoes ? renderizarAcoes(c) : false}
                </tr>
            )
        })
    }
    function renderizarAcoes(cliente: Cliente) {
        return (
            <td className='flex justify-center items-center'>
                {props.clienteSelecionado ? (
                    <button onClick={() => props.clienteSelecionado?.(cliente)} className='p-1 m-1 rounded-md hover:bg-slate-400 hover:text-white'>{IconEdit}</button>
                ) : false}
                {props.clienteExcluido ? (
                    <button onClick={() => props.clienteExcluido?.(cliente)} className='p-1 m-1 rounded-md hover:bg-slate-400 hover:text-white'>{IconRemove}</button>
                ) : false}

            </td>
        )
    }
    return (
        <div className='h-[40vh] mb-12'>
            <div className='flex m-2 justify-end '>
                <button className='p-1 border-2 border-[#0F2027] bg-[#0F2027] text-white rounded-l-md'>{iconSearch}</button>
                <input className='w-1/5 p-1 border-2 border-[#0F2027] outline-none focus:bg-gray-100 rounded-r-md' 
                type="text" value={pesquisa} onChange={(e)=> setPesquisa(e.target.value)}  placeholder="Pesquisar Clientes"/>
            </div>
            <div className='h-full overflow-y-auto'>
            <table className='w-full  '>
                <thead className=' bg-[#0F2027] text-white  font-black'>
                    <tr >
                        <th className='p-2'>ID</th>
                        <th className='p-2'>Nome</th>
                        <th className='p-2'>Idade</th>
                        <th className='p-2'>Email</th>
                        {exbirAcoes ? <th className='p-2'>Ações</th> : false}
                    </tr>
                </thead>
                <tbody className='text-center'>
                    {renderizarDados()}
                </tbody>
            </table>
            </div>
            
        </div>
    )
}