export default function Experiencia() {
    return (
        <div className="frex flex-col items-center justify-around p-6 bg-black border border-zinc-800 rounded-2xl">
            <Item principal="+1 " label="Anos de experiência Profissional"/>
            <Item principal="+5 " label="Países atendidos"/>
            <Item principal="+10 " label="Projetos desenvolvidos"/>
        </div>
    )
}

function Item(props: {principal: string, label: string}) {
    return (
        <div className="flex flex-col items-center">
            <span className="text-red-500 text-3xl font-bold leading-6">{props.principal}</span>
            <span className="text-zinc-400 text-sm">{props.label}</span>
        </div>
    )
}