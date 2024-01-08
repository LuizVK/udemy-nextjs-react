import CasaTabuleiro from "./CasaTabuleiro";

const configTabuleiro = {
    tamanhoTabuleiro: 800,
    quantidadeCasas: 8
}

const gerarTabuleiro = (quantidadeCasas: number = 8) => {
    const lista = []
    const quantidadeLinhas = quantidadeCasas
    
    const pretoOuBranco = (i: number, y: number) => {
        if (i % 2 === 0) {
            return y % 2 === 0 ? "white" : "black"
        } else {
            return y % 2 === 0 ? "black" : "white"
        }
    }

    for (let i = 0; i < quantidadeLinhas; i++) {
        

        for (let y = 0; y < quantidadeCasas; y++) {
            lista.push(<CasaTabuleiro cor={pretoOuBranco(i, y)} tamanhoCasa={configTabuleiro.tamanhoTabuleiro / configTabuleiro.quantidadeCasas} />)
        }
    }

    return lista
}

interface TabuleiroProps {
    tamanhoTabuleiro?: 400 | 600 | 800
}

export default function Tabuleiro(props: TabuleiroProps) {

    if (props.tamanhoTabuleiro)
        configTabuleiro.tamanhoTabuleiro = props.tamanhoTabuleiro
    
    return (
        <div
            className="flex flex-wrap bg-pink-600"
            style={{
                width: `${configTabuleiro.tamanhoTabuleiro}px`,
                height: `${configTabuleiro.tamanhoTabuleiro}px`,
            }}
        >
            {gerarTabuleiro(configTabuleiro.quantidadeCasas)}
        </div>
    )
}