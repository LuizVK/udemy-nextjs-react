import { useState } from "react"

export default function mouse() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const estilo = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#222",
        color: "#fff",
        height: '100vh'
    }

    function quandoMover(event) {
        setX(event.clientX)
        setY(event.clientY)
    }

    return (
        <div style={estilo} onMouseMove={quandoMover}>
            <span>Eixo X: {x}</span>
            <span>Eixo Y: {y}</span>
        </div>
    )
}
