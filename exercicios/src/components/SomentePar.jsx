export default function SomentePar(props) {
    const numeroPar = props.numero % 2 === 0
    
    //Alternativa 3
    return (
        <div>
            {numeroPar ?
                <span>{props.numero}</span> :
                null
            }
        </div>
    )

    // Alternativa 2
    // return numeroPar ? <span>{props.numero}</span> :  null

    // Alternativa 1
    // if (props.numero % 2 === 0) {
    //     return <span>{props.numero}</span>
    // } else {
    //     return null
    // }
} 