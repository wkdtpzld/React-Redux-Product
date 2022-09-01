import React, { useEffect, useCallback } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectProducts, removeProducts } from "../redux/actions/productActions";
import styles from "../assets/css/Detail.module.scss"
import AddCart from "../components/common/AddCart";

const ProductDetail = () => {

    const product = useSelector((state) => state.product);
    const { id } = useParams();
    const dispatch = useDispatch();
    
    const fetchProductDetail = useCallback(async () => {
        const response = await axios
            .get(`https://fakestoreapi.com/products/${id}`)
            .catch((error) => {
                console.log(error.message);
        });

        dispatch(selectProducts(response.data));
    }, [dispatch, id]);

    useEffect(() => {
        if (id && id !== "") {
            fetchProductDetail();
        }
        return () => {
            dispatch(removeProducts());
        }
    }, [fetchProductDetail, id, dispatch]);

    return (
        <div className="">
            {Object.keys(product).length === 0 ? (
                <div>...Loading</div>
            ) : (
                <div className={styles.gridBox}>
                    <div className={styles.textBox}>
                        <h1>{product.title}</h1>
                        <h3>{product.description}</h3>
                        <div className={styles.price}>$ {product.price}</div>
                        <AddCart product={product} className={styles.addCart}/>
                    </div>
                    <div className={styles.imgBox}>
                        <img src={product.image} alt={product.title} />
                    </div>
                </div>
            )};
        </div>
    );
}

export default ProductDetail