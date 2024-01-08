"use client"
import styles from "../../../../styles/Jogo.module.css"
import { useEffect, useState } from "react"
import Porta from "../../../../components/Porta"
import { atualizarPortas, criarPortas } from "../../../../functions/portas"
import Link from "next/link"
import PortaModel from "../../../../model/porta"

export default function Jogo(props) {
    const { params } = props
    
    const [valido, setValido] = useState(false)
    const [portas, setPortas] = useState<PortaModel[]>([])

    useEffect(() => {
        const portas = +params.portas
        const temPresente = +params.temPresente
        
        const qtdePortasValidas = portas >= 3 && portas <=100
        const temPresenteValido = temPresente >= 1 && temPresente <= portas
        setValido(qtdePortasValidas && temPresenteValido)
    }, [portas, params])

    useEffect(() => {
        const portas = +params.portas
        const temPresente = +params.temPresente
        setPortas(criarPortas(portas, temPresente))
    }, [params])

    function renderizarPortas() {
        return portas.map(porta => {
            return <Porta key={porta.numero} value={porta} onChange={novaPorta => setPortas(atualizarPortas(portas, novaPorta))} />
        })
    }

    return (
        <div id={styles.jogo}>
            <div className={styles.portas}>
                {valido ? 
                    renderizarPortas() :
                    <h2>Valores inválidos</h2>    
                }
            </div>
            <div className={styles.botoes}>
                <Link href="/" >
                    <button>Reiniciar Jogo</button>
                </Link>
            </div>
        </div>
    )
}