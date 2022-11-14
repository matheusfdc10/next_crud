import { useState } from "react"
import Entrada from "./Entrada"
import Cliente from "../core/Cliente"
import Botao from "./Botao"

interface FormularioProps {
    cliente: Cliente
    clienteMudou?: (cliente: Cliente) => void
    cancelado?: () => void
}

export default function Formulario(props: FormularioProps) {
    const id = props.cliente?.getID
    const [nome, setNome] = useState(props.cliente?.getNome ?? '')
    const [idade, setIdade] = useState(props.cliente?.getIdade ?? null)

    const camposValido =  nome != '' && idade > 0  && idade <= 150

    function validarCampo() {
        if (nome == '' && idade <= 0) {
            document.getElementById('erro').innerHTML = 'Preencha com seus dados'
        } else if (nome == ''){
            document.getElementById('erro').innerHTML = 'Preencha seu nome'
        } else if (idade <= 0 || idade >= 150) {
            document.getElementById('erro').innerHTML = 'Preencha uma idade válida'
        }
    }

    return (
        <div>
            {id ? (
                <Entrada
                    somenteLeitura 
                    texto="Código" 
                    valor={id}
                    className="mb-5"
                />
            ) : false}
            <Entrada 
                texto="Nome" 
                valor={nome}
                valorMudou={setNome}
                className="mb-5"
            />
            <Entrada 
                texto="Idade"   
                tipo="number" 
                valor={idade}
                valorMudou={setIdade}
            />
            <div className="flex justify-end mt-7">
                <label className="text-red-500 w-full text-lg font-bold" id="erro"></label>
                <Botao cor="azul" className="mr-2" 
                    onClick={camposValido? () => props.clienteMudou?.(new Cliente(nome, +idade, id)) : validarCampo}>
                    {id ? 'Alterar' : 'Salvar'}
                </Botao>
                <Botao cor="cinza" 
                    onClick={props.cancelado}>
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}