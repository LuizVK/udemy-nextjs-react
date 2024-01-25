import useAuth from "@/data/hook/useAuth";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface AvatarUsuarioProps {
    className?: string
}

export default function AvatarUsuario(props: AvatarUsuarioProps) {
    const { usuario } = useAuth()
    const pathname = usePathname()

    return (
        <Link href="/perfil">
            <img 
                src={usuario?.imagemUrl ?? "/images/avatar.svg"} 
                alt="Avatar do Usuário" 
                className={`
                    h-10 w-10 rounded-full cursor-pointer 
                    ${props.className}
                    ${pathname === '/perfil' ? `border-2 border-emerald-500 dark:border-purple-500`: ''}
                `}
            />
        </Link>
    )
}