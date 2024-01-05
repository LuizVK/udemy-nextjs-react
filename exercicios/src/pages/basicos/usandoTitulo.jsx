import Titulo from '../../components/Titulo'

export default function usandoTitulo() {
    return (
        <div>
            <Titulo 
                titulo="O título" 
                subtitulo="O subtítulo"
            />
            <Titulo 
                titulo="O título" 
                subtitulo="O subtítulo"
                pequeno={true}
            />
            <Titulo 
                titulo="O título" 
                subtitulo="O subtítulo"
                pequeno
            />
        </div>
    )
}