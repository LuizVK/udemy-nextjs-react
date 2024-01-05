export default function MegaSenaDisplay(props) {
    const numeros = props.numeros

    const estiloNumeroSorteado = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "50px",
        height: "50px",
        borderRadius: "25px",
        backgroundColor: "#17c96f",
        color: "#000",
        fontSize: "2rem",
        marginLeft: "5px"
    }

    const renderizarNumeros = () => {
        return numeros.map((numero, i) => {
            return (
                <div key={i} style={estiloNumeroSorteado} >{numero}</div>
            )
        })
    }

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100px"
            }}
        >
            {renderizarNumeros()}
        </div>
    )
}