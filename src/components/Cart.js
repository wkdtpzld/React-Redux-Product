import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "../assets/css/Cart.scss";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CartItem from "./CartItem";

const Cart = () => {
    const carts = useSelector((state) => state.cart.cart);

    const [totalPrice, setTotalPrice] = useState(0);
    const [totalItem, setTotalItem] = useState(0);
    const [onoff, setOnoff] = useState("clickbar2");

    useEffect(() => {
        let items = 0;
        let price = 0;

        carts.forEach((item) => {
            items += parseInt(item.qty);
            price += Math.round(item.price * item.qty);
        });
        setTotalPrice(price);
        setTotalItem(items);
    },[carts, totalPrice, totalItem, setTotalItem, setTotalPrice])

    const onClick = () => {
        if (onoff === "clickbar") {
            setOnoff("clickbar2");
        } else {
            setOnoff("clickbar");
        }
    };

    return (
        <div className="cart">
            <button className={onoff} onClick={ onClick }>
                <ShoppingCartIcon className="shoppingCart" />
            </button>
            <div className="cartBox">
                <div className="cartItems">
                    <ArrowForwardIcon className="cartCloseBtn" onClick={onClick}/>
                    <h1> Cart </h1>
                    {carts.map((item) => (
                        <CartItem cart={item} key={item.id} />
                    ))}
                    <div className="cartTotal">
                        <h2> totalItem : {totalItem}</h2>
                        <h2> totalPrice : {totalPrice}</h2>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Cart;