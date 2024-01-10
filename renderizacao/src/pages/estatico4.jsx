export async function getStaticProps() {
    console.log('[Server] gerando props para o componente...')
    const resp = await fetch('http://localhost:3000/api/produtos')
    const produtos = await resp.json()

    return {
        props: {
            produtos 
        }
    }
}

export default function Estatico4(props) {
    console.log('[Cliente] renderizando o componente...')
    function renderizarProdutos() {
        return props.produtos.map(produto => {
            return (
                <li key={produto.id}>
                    {produto.id} - {produto.nome} tem preço de R${produto.preco}
                </li>
            )
        })
    }
    return (
        <div>
            <h1>Estático #04</h1>
            <ul>
                {renderizarProdutos()}
            </ul>
        </div>
    )
}

// "export function getStaticProps" é uma convensão para definir que a pagina será gerada de forma estática.
// A página será gerada de forma estática após o build do projeto (npm run build).
// *** Neste caso, quando realizado o build, do projeto será realizado a consulta na API para gerar as informações estáticas para a página. Isso acontecerá apenas do lado do servidor, no momento do build (npm run build)
// Será servida de forma estática em produção (npm start).
// Enquando estiver em desenvolvimento (npm run dev), será gerada novamente a cada requisição.