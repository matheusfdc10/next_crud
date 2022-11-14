interface BotaoProps {
    cor: 'azul' | 'verde' | 'cinza'
    className?: string
    children: any
    onClick?: () => void
}

export default function Botao(props: BotaoProps) {
    const cores = {verde: 'green', cinza: 'gray', azul: 'blue'}
    return (
        <button onClick={props.onClick} className={`
            text-white px-4 py-2 rounded-md
            ${props.className}
            bg-gradient-to-r from-${cores[props.cor]}-400 to-${cores[props.cor]}-700
        `}>
            {props.children}
        </button>
    )
}