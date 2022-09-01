import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setProducts } from "../redux/actions/productActions";
import styles from "../assets/css/ProductCP.module.scss"
import Loader from "../components/Loader";
import ProductCGCompoent from "../components/ProductCGComponent";
import DetailsProducts from "../components/DetailsProducts";

const Details = () => {

    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);
    const { category } = useParams();
    const products = useSelector((state) => state.allProducts.products);

    const fetch = useCallback(async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/category/${category}`)
            .catch((error) => {
                console.log(error.message);
            });
        
        dispatch(setProducts(response.data));
        setIsLoading(false);
    }, [dispatch, category]);

    useEffect(() => {
        fetch();
    }, [fetch]);

    const fetchList = products?.map((product) => {

        return (
            <DetailsProducts product={product} key={product.id} />
        )
    })

    return (
        <>
            {isLoading ? <Loader /> :
            <>
            <ProductCGCompoent />
            <div className={ styles.container }>
                { fetchList }
            </div>
            </>
            }
            
        </>
        
    );
}

export default Details;