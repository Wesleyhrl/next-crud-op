interface TitleProps{
    children: string;
}

export default function Title(props : TitleProps){
    return(
        <div className="flex flex-col justify-center">
            <h1 className="text-center p-4 text-white text-3xl">{props.children}</h1>
        </div>
    )
}