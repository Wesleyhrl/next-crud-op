import Title from "./Title";
interface LayoutProps {
    titulo: string;
    children: any;
}

export default function Layout(props:LayoutProps){
    return(
        <div className="flex flex-col w-[70%]  text-gray-700">
            <Title>{props.titulo}</Title>
            <div className="bg-[#ffff] rounded-md p-6">
                {props.children}
            </div>
        </div>
    );
}