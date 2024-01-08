import Link from "next/link";

export default function Voltar(props) {
    return (
        <Link href={props.link} passHref>
            <button>Voltar</button>
        </Link>
    )
}