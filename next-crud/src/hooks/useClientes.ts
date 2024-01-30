import ColecaoCliente from "@/backend/db/ColecaoCliente"
import Cliente from "@/core/Cliente"
import ClienteRepositorio from "@/core/ClienteRepositorio"
import { useEffect, useState } from "react"
import useTableaOuForm from "./useTabelaOuForm"

export default function useClientes() {
    const { tabelaVisivel, exibirTabela, exibirFormulario } = useTableaOuForm()
    const repo: ClienteRepositorio = new ColecaoCliente()

    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
    const [clientes, setClientes] = useState<Cliente[]>([])

    useEffect(obterTodos, [])
    
    function obterTodos() {
        repo.obterTodos().then(clientes => {
            setClientes(clientes)
            exibirTabela()
        })
    }

    function selecionarCliente(cliente: Cliente) {
        setCliente(cliente)
        exibirFormulario()
    }

    async function excluirCliente(cliente: Cliente) {
        await repo.excluir(cliente)
        obterTodos()
    }

    async function salvarCliente(cliente: Cliente) {
        await repo.salvar(cliente)
        obterTodos()
    }

    function adicionarCliente() {
        setCliente(Cliente.vazio())
        exibirFormulario()
    }

    return {
        cliente,
        setCliente,
        clientes,
        setClientes,
        adicionarCliente,
        salvarCliente,
        excluirCliente,
        selecionarCliente,
        obterTodos,
        tabelaVisivel,
        exibirTabela        
    }
}