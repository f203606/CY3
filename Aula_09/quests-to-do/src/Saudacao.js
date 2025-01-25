/*Em React, as props (abreviação de "properties") são um mecanismo para passar dados de um componente pai para um componente filho. Elas permitem que um componente seja configurado dinamicamente com base em informações fornecidas pelo componente pai.

Como funcionam as props?
Componente Pai: Envia dados para o componente filho através das props.
Componente Filho: Recebe essas props e pode usá-las para exibir ou processar informações.*/

function Saudacao(props) {
    return (
        <div> 
            Olá, {props.nome}
        </div>
    )

}

export default Saudacao;