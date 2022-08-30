import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "../assets/css/ProductCP.module.scss"
import { addCart } from "../redux/actions/productActions";

const ProductComponent = () => {
    
    const products = useSelector((state) => state.allProducts.products);
    const dispatch = useDispatch();
    const [cart, setCart] = useState([]);

    useEffect(() => {
        dispatch(addCart(cart));
    }, [cart, dispatch]);

    const renderList = products.map((product) => {
        return (
            <div className={ styles.cart } key={product.id}>
                <div className="">
                    <div className={ styles.imgContainer }>
                        <img src={product.image} alt={ product.title } />
                    </div>
                    <div className={ styles.textContainer }>
                        <div className={styles.title}><Link to={`/product/${product.id}`} >
                            {product.title.length > 15
                            ? `${product.title.slice(0, 15)}...`
                            : `${product.title}`}
                        </Link></div>
                        <div className={styles.price}>$ {product.price}</div>
                        <div className={styles.category}>category : {product.category}</div>
                        <div onClick={() => {
                            setCart([...cart, product]);
                        }} >Add Cart</div>
                    </div>
                </div>
            </div>
        );
    });

    return (
        <>
            { renderList }
        </>
    );
}

export default ProductComponent