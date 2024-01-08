"use client"
import Tabuleiro from '../components/MeuXadrez/Tabuleiro'
import Tabuleiro2 from '../components/XadrexProfessor/Tabuleiro'
import { useState } from 'react'

export default function Home() {
  const [tamanho, setTamanho] = useState<400 | 600 | 800>(400)

  const handleChangeTamanho = (e: any) => {
    setTamanho(e.target.value)
  }

  return (
    <main className="flex min-h-screen flex-col justify-center items-center">
      <label htmlFor="tamanho">Tamanhos:</label>
      <select id="tamanho" onChange={handleChangeTamanho}>
        <option value={400}>400</option>
        <option value={600}>600</option>
        <option value={800}>800</option>
      </select>

      <Tabuleiro tamanhoTabuleiro={tamanho}/>
      {/* <Tabuleiro2 /> */}
    </main>
  )
}
