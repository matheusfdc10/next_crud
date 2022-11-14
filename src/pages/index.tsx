import Botao from '../component/Botao'
import Formulario from '../component/Formulario'
import Layout from '../component/Layout'
import Tabela from '../component/Tabela'
import useClientes from '../hooks/useClientes'

export default function Home() {

  const { 
    cliente,
    clientes, 
    novoCliente, 
    salvarCliente,
    selecionarCliente,  
    excluirCliente,
    tabelaVisivel,
    formularioVisivel,
    exibirTabela
  } = useClientes()
  
  return (
    <div className={`
    flex justify-center items-center h-screen  
    bg-gradient-to-r from-blue-500 to-purple-600
    text-white
    `}>
      <Layout titulo="Cadastro Simples">
        {tabelaVisivel ? (
          <>
          <div className="flex justify-end">
            <Botao cor="verde"
              className="mb-4" onClick={novoCliente}>
              Novo Cliente
            </Botao>
          </div>

          <Tabela clientes={clientes} 
            clienteSelecionado={selecionarCliente}
            clienteExcluido={excluirCliente}
          ></Tabela>
        </>
        ) : (
          <Formulario 
            cliente={cliente} 
            clienteMudou={salvarCliente}
            cancelado={exibirTabela}
          />
        )}        
      </Layout>
    </div>
  )
}
