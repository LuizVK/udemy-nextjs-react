export default function handler(req, res) {
    res.status(200).json([
        { name: 'John Doe' },
        { name: 'Joana' },
        { name: 'Maria' },
        { name: 'Pedro' },
    ])
}