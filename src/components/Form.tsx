import Inp from "./Inp";
import Cliente from './../core/Cliente';
import { useState } from "react";
import Btn from "./Btn";

interface FormProps {
    cliente: Cliente;
    cancelado?: () => void;
    clienteMudou?: (cliente: Cliente) => void;
}
export default function Form(props: FormProps) {
    const id = props.cliente?.id;
    const [nome, setNome] = useState(props.cliente?.nome ?? '');
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0);
    const [email, setEmail] = useState(props.cliente?.email ?? '');
    return (
        <div >
            <div className="flex flex-warp justify-evenly">
                {id ? <Inp texto="Id" tipo="text" valor={id} /> : false}
                <Inp texto="Nome" valor={nome} onChange={setNome} />
                <Inp texto="Idade" tipo="number" valor={idade} onChange={setIdade}></Inp>
                <Inp texto="Email" valor={email} onChange={setEmail} />
            </div>
            <div className="text-center mt-8">
                <Btn className="bg-[#0d8bbd] text-white hover:bg-[#0d8bbdcc]" 
                onClick={() => props.clienteMudou?.(new Cliente(nome, +idade, email, id))}>{id ? "Alterar" : "Salvar"}</Btn>
                <Btn className="bg-[#bd0d0d] text-white hover:bg-[#bd0d0dbd]" onClick={props.cancelado}>Cancelar</Btn>
            </div>



        </div>
    );
}