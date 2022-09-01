import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../assets/css/CartItem.module.scss";
import { adjustQty, removeCart } from "../redux/actions/productActions";
import DeleteIcon from '@mui/icons-material/Delete';

const CartItem = ({ cart }) => {

    const dispatch = useDispatch();
    const cartQty = useSelector((state) => state.cart.cart);
    const cartQ = cartQty.find((item) => item.id === cart.id);

    const [cnt, setCnt] = useState(cartQ.qty);

    const onChange = (event) => {
        const {
            target: {value}
        } = event

        dispatch(adjustQty(cart.id, value));
        setCnt(value);
    };

    useEffect(() => {
        setCnt(cartQ.qty)
    }, [cartQty, cartQ.qty]);

    const removeCartfetch = (itemID) => dispatch(removeCart(itemID));

    return (
        <div className={ styles.cartItem }>
            <img className={styles.cart__image} src={cart.image} alt={cart.title} />
            <div>
                <p className={styles.cart__title}> {cart.title.length > 15 ? `${cart.title.slice(0, 15)}...` : `${cart.title}`} </p>
                <p className={styles.cart__price}> Price: {cart.price}</p>
                <div>
                    <div className={styles.cart__qty}>
                        <label htmlFor="qty">Qty</label>
                        <input type="number" min="1" id="qty" name="qty" value={cnt} onChange={onChange} />
                    </div>
                    <button onClick={() => removeCartfetch(cart.id)}>
                        <DeleteIcon />
                    </button>
                </div>
                
            </div>
        </div>
    )
};

export default CartItem;