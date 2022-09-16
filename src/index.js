import React from 'react'
import ReactDOM from 'react-dom'
import './styles.css'

//função
const App = () => {
    //definindo constante do objeto estiloBotao
    const estilosBotao = {marginTop: 12, paddingTop: 8, paddingBottom: 8, backgroundColor: 'blueviolet',
    color: 'white', border: 'none', width: '100%', borderRadius: 8}

    //definindo a constante do objeto textoDoRotulo
    const textoDoRotulo = 'Nome: '

    //arrow faction
    const obterTextoDoBotao = () => 'Enviar'

    //expressão JSX - extenção sintática a linguagem js
    //{{}} = 1º{} sair do contexto jsx e entrar no contexto js 2º{} delimitando/especificar o objeto json
    // , separa
    //kebab case (espeto) - ex: background-color
    //camelCase (camelo) - ex: backgroundColor
    return  (
        <div style={{margin: 'auto', width: 768, backgroundColor: '#EEE', padding: 12, borderRadius: 8}}>

            {/* <label className='rotulo' htmlFor="nome" style={{display:'block', marginBottom: 4}}>Nome: </label> */}
            <label className='rotulo' htmlFor="nome" style={{display:'block', marginBottom: 4}}>{textoDoRotulo}</label>

            <input type="text" id='nome' style={{paddingTop: 8, paddingBottom: 8, 
                borderStyle: 'hidden', width: '100%', borderRadius: 8, outline: 'none'}} />
            
            {/* <button style={{marginTop: 12, paddingTop: 8, paddingBottom: 8, 
                backgroundColor: 'blueviolet', color: 'white', border: 'none', width: '100%', borderRadius: 8}}>Enviar</button> */}

            {/* quando coloca o () na função ele já reinderiza */}
            <button style={estilosBotao}>{obterTextoDoBotao()}</button> 


            {/* sim
            onClick={obterTextoDoBotao}
            onClick={() => obterTextoDoBotao()}
            
            não
            onClick={obterTextoDoBotao()} */}
            
        </div>
    )

}

ReactDOM.render( //render = renderizar
    <App />,
    document.querySelector('#root') //busca por qualquer seletor e não só pelo id
)