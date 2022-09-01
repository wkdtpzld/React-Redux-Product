import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../../redux/actions/productActions";
import styles from "../../assets/css/ProductCP.module.scss"

const AddCart = ({product}) => {

    const dispatch = useDispatch();
    const products = useSelector((state) => state.allProducts.products);

    const addCartFetch = (cart, products) => {
        dispatch(addCart(cart, products));
    };

    return (
        <div className={styles.addCart} onClick={() => {
            addCartFetch(product, products);
        }} >Add Cart</div>
    )
}

export default AddCart