export default function Cart({totalAmt}){
    return(
        <div className="cart-container">
            <h2>Your Cart: </h2>
            <h3>Total Cart Amount: {totalAmt}</h3>
        </div>
    )
}