export default function numeroRandomico(min, max) {
    return parseInt(Math.random() * (max - min) + min)
}

