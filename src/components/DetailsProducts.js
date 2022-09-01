import React from "react";
import styles from "../assets/css/ProductCP.module.scss"
import { Link } from "react-router-dom";
import AddCart from "./common/AddCart";

const DetailsProducts = ({product}) => {

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
                    <AddCart product={product} />
                </div>
            </div>
        </div>
    )
}

export default DetailsProducts;