export function getStaticProps() {
    return {
        props: {
            numero: Math.random()
        }
    }
}

export default function Estatico2(props) {
    return (
        <div>
            <h1>Estático #02</h1>
            <h2>{props.numero}</h2>
        </div>
    )
}

// "export function getStaticProps" é uma convensão para definir que a pagina será gerada de forma estática.
// A página será gerada de forma estática após o build do projeto (npm run build).
// Será servida de forma estática em produção (npm start).
// Enquando estiver em desenvolvimento (npm run dev), será gerada novamente a cada requisição.