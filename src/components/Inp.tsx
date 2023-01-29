interface InputProps{
    tipo?: 'text' | 'number';
    texto : string;
    valor: any;
    apenasLeitura?: boolean;
    onChange?: (valor : any) => void;
}
export default function Input(props : InputProps){
    return (
        <div className="flex flex-col mx-1 min-w-[20%]">
            <label className="font-bold ">{props.texto}</label>
            <input className="bg-transparent  border-b-2   outline-none focus:border-gray-700 transition-all" 
            type={props.tipo ?? 'text'} value={props.valor} readOnly={props.apenasLeitura} onChange={(e)=> props.onChange?.(e.target.value)}/>
        </div>
    )
}