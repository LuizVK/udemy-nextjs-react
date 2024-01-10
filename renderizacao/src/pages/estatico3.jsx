export function getStaticProps() {
    return {
        revalidate: 10, // segundos!
        props: {
            numero: Math.random()
        }
    }
}

export default function Estatico3(props) {
    return (
        <div>
            <h1>Estático #03</h1>
            <h2>{props.numero}</h2>
        </div>
    )
}

// "export function getStaticProps" é uma convensão para definir que a pagina será gerada de forma estática.
// A página será gerada de forma estática após o build do projeto (npm run build).
// Será servida de forma estática em produção (npm start).
// *** Neste caso, a página será gerada novamente na próxima requisição após o tempo definido em "revalidate" ser esgotado. Isto é, a página terá um período de validade. Quando esgotado será gerada novamente. 
// Enquando estiver em desenvolvimento (npm run dev), será gerada novamente a cada requisição.