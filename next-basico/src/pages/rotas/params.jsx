import Link from "next/link"
import { useRouter } from "next/router"


export default function Params() {
    const router = useRouter()

    // const id = router.query.id
    // const nome = router.query.nome
    const {id, nome} = router.query

    return (
        <div>
            <h1>Rotas Params: {id} - {nome} </h1>
            <Link href="/rotas" passHref>
                <button>
                    Voltar
                </button>
            </Link>
        </div>
    )
}