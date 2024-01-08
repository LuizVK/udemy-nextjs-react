interface CasaTabuleiroProps {
    cor: 'black' | 'white',
    tamanhoCasa: number
}

export default function CasaTabuleiro(props: CasaTabuleiroProps) {
    return (
        <div 
            style={{
                backgroundColor: props.cor,
                width: `${props.tamanhoCasa}px`,
                height: `${props.tamanhoCasa}px`
            }}
        >
            
        </div>
    )
}