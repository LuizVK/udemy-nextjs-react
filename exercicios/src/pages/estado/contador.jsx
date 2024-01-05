import { useState } from "react"
import NumerorDisplay from "../../components/NumerorDisplay"


export default function contador() {
    const [contador, setContador] = useState(0)

    const dec = () => setContador(contador - 1)
    const inc = () => setContador(contador + 1)

    return (
        <div style={{
            display: 'flex',
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: '100vh'
        }}>
            <h1>Contador</h1>
            <NumerorDisplay numero={contador} />
            <div>
                <button 
                    style={{ padding: "5px 10px" }} 
                    onClick={dec}
                >-</button>
                <button 
                    style={{ 
                        padding: "5px 10px", 
                        marginLeft: '10px' 
                    }} 
                    onClick={inc}
                >+</button>
            </div>
        </div>
    )
}