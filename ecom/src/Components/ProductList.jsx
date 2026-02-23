import ProductCard from './ProductCard';
export default function ProductList({products,addToCart}){
    return(
        <div className="product-container">
            {products.map((item) => (
            <div className="product-card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>₹ {item.price}</p>
            <button onClick={() => addToCart(item)}>
            Add to Cart
            </button>
            </div>
            ))}
        </div>
    )
}