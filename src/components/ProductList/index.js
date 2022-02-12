import Product from "../Product"
import './style.css'

function ProductList({salvarProdutos,produtos, cart, setCart}){
    return(
        <div className="container">  
            {salvarProdutos.length > 0 ? 
                salvarProdutos?.map((produto) => 
                <Product key={produto.id} name={produto.name} category ={produto.category} price={produto.price} cart={cart} setCart={setCart} img={produto.img}/>  
                )
                :( 
                produtos?.map((produto) => 
                <Product key={produto.id} name={produto.name} category ={produto.category} price={produto.price} cart={cart} setCart={setCart} img={produto.img}/>  
                )
            )}     
        </div>
    )
}

export default ProductList