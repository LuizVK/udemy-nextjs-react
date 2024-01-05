import If from "../../components/If"

export default function condicional2() {
    const numero = 4
    return (
        <div>
            <If cond={numero % 2 === 0}>
                <h1>O número {numero} é par</h1>
            </If>
            <If cond={numero % 2 === 1}>
                <h1>O número {numero} é impar</h1>
            </If>
        </div>
    )
}