import './style.css'

function CartProduct({cart , removeCart}){

    return (
        <div>
            {cart.length < 1 ? <div className='divP'> <p className='p1'>Sua sacola está vazia</p> <p className='p2'>Adicione itens</p> </div> : <div></div>}
            {cart.map((produto, index) => {
            return (
                <div className='flex' key={produto.id}>
                    <div className='fundo'>
                        <img className="cImage" src={produto.img}/>    
                    </div> 
                    <div>
                        <p className='cName'>{produto.name}</p>
                        <p className='cCategory'>{produto.category}</p>
                    </div>
                    <div>
                    <button className='cBotao' onClick={() => removeCart(index)}>Remover</button>
                    <p className='cQuantidade'>{produto.quantidade}</p>
                    </div>
                  </div>
                );
            })}
            </div>
    )
}

export default CartProduct