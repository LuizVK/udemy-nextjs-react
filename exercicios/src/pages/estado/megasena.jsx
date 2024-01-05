import { useEffect, useState } from "react";
import MegaSenaDisplay from "../../components/megaSena/MegaSenaDisplay";
import numeroRandomico from "../../utils/random";
import styles from "../../styles/Megasena.module.css";

function gerarSorteio(qtdNumeros = 6) {
    const sorteio = []

    let i = 0
    while (i < qtdNumeros) {
        const numeroSorteado = numeroRandomico(1, 60)
        if (!sorteio.includes(numeroSorteado)) {
            sorteio.push(numeroSorteado)
            i++
        }
    }

    return sorteio.sort((n1, n2) => n1 - n2)
}

export default function megasena() {
    const [quantidade, setQuantidade] = useState(6)
    const [sorteio, setSorteio] = useState([])

    useEffect(() => {
        setSorteio(gerarSorteio())
    }, [])

    const numerosSorteados = gerarSorteio()

    const handleChangeQuantidade = (e) => {
        const value = e.target.value

        if (value >= 1 && value <= 60) { }
            setQuantidade(value)
    }

    const handleButtonClick = () => {
        setSorteio(gerarSorteio(quantidade))
    }

    return (
        <div className={styles.megasena}>
            <h1>Mega Sena</h1>
            <div className={styles.formulario}>
                <div>
                    <label htmlFor="quantidade">Quantidade de números:</label>
                    <input id="quantidade" type="number" value={quantidade} min={6} max={15} onChange={handleChangeQuantidade} />
                </div>
                <button onClick={handleButtonClick}>Gerar Aposta</button>
            </div>
            <MegaSenaDisplay numeros={sorteio} />
        </div>
    )
}