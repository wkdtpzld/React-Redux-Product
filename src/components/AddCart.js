import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../redux/actions/productActions";


const AddCart = ({ item }) => {
    
    const carts = useSelector((state) => state.cart.cart);
    const [cart, setCart] = useState(carts);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(addCart(cart));
    }, [cart, dispatch]);

    return (
        <div onClick={() => {
            setCart([...cart, item.id]);
        }} >Add Cart</div> 
    )
};

export default AddCart