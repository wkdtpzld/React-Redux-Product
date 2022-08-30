import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "../assets/css/Cart.scss";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Cart = () => {
    
    const carts = useSelector((state) => state.cart.cart);
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
                <div className="slide">
                    <h1> Cart </h1>
                </div>
            </div>
        </div>
        
    )
};

export default Cart;