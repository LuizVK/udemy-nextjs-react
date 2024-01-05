import { useState } from "react"

export default function formulario() {
    const [valor, setValor] = useState("inicial")

    const alterarInput = () => {
        setValor(valor + "!")
    }

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                
            }}
        >
            <span>{valor}</span>
            <input type="text" value={valor}
                onChange={e => setValor(e.target.value)}
            />
            <button onClick={alterarInput}>Alterar</button>
        </div>
    )
}