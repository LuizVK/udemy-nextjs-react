"use client"
import Link from "next/link"
import { useRouter, usePathname, useSearchParams } from "next/navigation"

export default function Rotas() {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    function navegacaoSimples(url) {
        router.push(url)
    }

    function navegacaoComParams() {
        const nome = "Didio"
        const id = 1
        router.push(`/rotas/params?nome=${nome}&id=${id}`)
    }

    return (
        <div>
            <h1>Rotas index</h1>
            <ul>
                <Link href="/rotas/params?nome=Didio&id=1" passHref>
                    <li>Params</li>
                </Link>
                <Link href="/rotas/123/buscar" passHref>
                    <li>Buscar</li>
                </Link>
                <Link href="/rotas/312/Daniel" passHref>
                    <li>Daniel</li>
                </Link>
            </ul>
            <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
                <button onClick={navegacaoComParams}>Params</button>
                <button onClick={() => router.push("/rotas/123/buscar")}>Buscar</button>
                <button onClick={() => navegacaoSimples("/rotas/312/Daniel")}>Daniel</button>
            </div>
        </div>
    )
}