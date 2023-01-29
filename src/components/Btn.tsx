interface BtnProps{
    className?: string;
    children: any;
    onClick?: (valor? :any)=> void;
}
export default function Btn(props: BtnProps){
 return (
    <button onClick={props.onClick} className={`p-2 m-2 rounded-lg  ${props.className}`}>{props.children}</button>
 )
}