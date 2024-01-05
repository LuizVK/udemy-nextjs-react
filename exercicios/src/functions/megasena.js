import numeroRandomico from "../utils/random"

export function mega(qtde = 6, numeros = []) {
    qtde = +qtde
    if (qtde < 6 && qtde > 60) {
        throw "Quantidade inválida!"
    }

    if (numeros.length === qtde) {
        return numeros.sort((n1, n2) => n1 - n2)
    }

    const numeroAleatorio = numeroRandomico(1, 60)
    if (!numeros.includes(numeroAleatorio)) {
        return mega(qtde, [...numeros, numeroAleatorio])
    } else {
        return mega(qtde, numeros)
    }
}