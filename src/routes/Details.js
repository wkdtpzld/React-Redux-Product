import axios from "axios";
import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setProducts } from "../redux/actions/productActions";
import styles from "../assets/css/ProductCP.module.scss"
import { Link } from "react-router-dom";
import ProductCGCompoent from "../components/ProductCGComponent";

const Details = () => {

    const dispatch = useDispatch();
    const { category } = useParams();
    const products = useSelector((state) => state.allProducts.products);

    const fetch = useCallback(async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/category/${category}`)
            .catch((error) => {
                console.log(error.message);
            });
        
        dispatch(setProducts(response.data));
    }, [dispatch, category]);

    useEffect(() => {
        fetch();
    }, [fetch]);

    const fetchList = products?.map((product) => {

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
                    </div>
                </div>
            </div>
        )
    })

    return (
        <>
            <ProductCGCompoent />
            <div className={ styles.container }>
                { fetchList }
            </div>
        </>
        
    );
}

export default Details;