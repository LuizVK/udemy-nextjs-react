import Link from "next/link"

interface MenuItemProps {
    url?: string
    texto: string
    icone: any
    ativo?: boolean
    className?: string
    onClick?: (evento: any) => void
}

export default function MenuItem(props: MenuItemProps) {
    const { url, texto, icone, ativo = false, className, onClick } = props

    const estiloLink = `
        flex flex-col justify-center items-center h-20 w-20 
        ${ativo ? `text-emerald-500 dark:text-purple-500` : 'text-gray-600 dark:text-gray-200'}  
        ${className}
    `

    function renderizarLink() {
        return (
            <>
                {icone}
                <span className={`text-xs font-light`}>{texto}</span>
            </>
        )
    }

    return (
        <li onClick={onClick} className={`
            hover:bg-gray-100
            dark:hover:bg-gray-800
            ${ativo ? `bg-gray-100 dark:bg-gray-800` : ''}
            cursor-pointer
        `}>
            {url ? (
                <Link href={url} passHref className={estiloLink}>
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