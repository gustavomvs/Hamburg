import imagem from '../../image/Mask Group.svg'
import './style.css'
import {useState} from 'react'

function Header({produtos, setSalvarProdutos}){

  const [busca, setBusca] = useState("");

  function filtro(){
    const produtoAchado = produtos.filter((produto) => produto.category === busca)
    if(produtoAchado){
        setSalvarProdutos(produtoAchado)
    }else{
        setSalvarProdutos([])
    }
}

    return (
        <div>
            <div className='header'>
                <img className='img' src={imagem}/>
                <div className='busca'>
                <input className='pesquisa' placeholder='Digite Pesquisa' onChange={(e) => setBusca(e.target.value)}/>
                <button className='botao' onClick={filtro}>Pesquisar</button>
                </div>
            </div>
        </div>
    )
}

export default Header