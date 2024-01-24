import Link from "next/link"

interface MenuItemProps {
    url?: string
    texto: string
    icone: any
    className?: string
    onClick?: (evento: any) => void
}

export default function MenuItem(props: MenuItemProps) {
    const estiloLink = `
        flex flex-col justify-center items-center h-20 w-20 
        text-gray-600 
        dark:text-gray-200 
        ${props.className}
    `
    
    function renderizarLink() {
        return (
            <>
                {props.icone}
                <span className={`text-xs font-light`}>{props.texto}</span>
            </>
        )
    }

    return (
        <li onClick={props.onClick} className={`
            hover:bg-gray-100
            dark:hover:bg-gray-800
            cursor-pointer
        `}>
            {props.url ? (
                <Link href={props.url} passHref className={estiloLink}>
                    {renderizarLink()}
                </Link>
            ) : (
                <a className={estiloLink}>
                    {renderizarLink()}
                </a>
            )}
        </li>
    )
}