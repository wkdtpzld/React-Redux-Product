import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "../assets/css/Cart.scss";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CartItem from "./CartItem";

const Cart = () => {
    const carts = useSelector((state) => state.cart.cart);

    const [totalPrice, setTotalPrice] = useState(0);
    const [totalItem, setTotalItem] = useState(0);

    useEffect(() => {
        let items = 0;
        let price = 0;

        carts.forEach((item) => {
            items += item.qty;
            price += item.price * item.qty
        });
        setTotalPrice(price);
        setTotalItem(items);
    },[carts])

    const [onoff, setOnoff] = useState(true);
    const onoffStyle = (value) => {
        if (value === true) {
            return "clickbar"
        } else {
            return "clickbar2"
        }
    }

    const onClick = () => {
        setOnoff((current) => !current);
    };

    return (
        <div className="cart">
            <button className={`${onoffStyle(onoff)}`} onClick={ onClick }>
                <ShoppingCartIcon className="shoppingCart" />
            </button>
            <div className="cartBox">
                <div className="cartItems">
                    <h1> Cart </h1>
                    {carts.map((item) => (
                        <CartItem cart={item} key={item.id} />
                    ))}
                    <div className="cartTotal">
                        <h2> totalItem : {totalItem}</h2>
                        <h2> totalPrice : { totalPrice }</h2>
                    </div>
                </div>
            </div>
        </div>
        
    )
};

export default Cart;