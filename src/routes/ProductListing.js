import React, {useEffect, useCallback, useState} from "react";
import ProductComponent from "../components/ProductComponent";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setProducts, setCategory } from "../redux/actions/productActions";
import styles from "../assets/css/ProductCP.module.scss"
import ProductCGCompoent from "../components/ProductCGComponent";
import Loader from "../components/Loader";

const ProductListing = () => {
    
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);

    const fetchList = useCallback(async () => {
        const response = await axios
            .get("https://fakestoreapi.com/products")
            .catch((error) => {
                console.log(error.message);
            });
        
        dispatch(setProducts(response.data));

        const categoryResponse = await axios
            .get("https://fakestoreapi.com/products/categories")
            .catch((error) => {
                console.log(error);
            });
        dispatch(setCategory(categoryResponse.data));

        setIsLoading(false);
    }, [dispatch]);

    useEffect(() => {
        fetchList();
    }, [fetchList]);

    return (
        <div>
            {isLoading ? <Loader /> : 
                <>
                    <ProductCGCompoent />
                    <div className={styles.container}>
                        <ProductComponent />
                    </div>
                </>
                }
        </div>   
        
    )
}

export default ProductListing