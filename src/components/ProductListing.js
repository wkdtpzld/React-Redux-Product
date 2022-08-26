import React, {useEffect, useCallback} from "react";
import ProductComponent from "./ProductComponent";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setProducts } from "../redux/actions/productActions";

const ProductListing = () => {

    const dispatch = useDispatch();

    const fetchList = useCallback(async () => {
        const response = await axios
            .get("https://fakestoreapi.com/products")
            .catch((error) => {
                console.log(error.message);
            });
        
        dispatch(setProducts(response.data));
    }, [dispatch]);

    useEffect(() => {
        fetchList();
    }, [fetchList]);


    return (
        <div className="ui gridcontainer">
            <ProductComponent />
        </div>
    )
}

export default ProductListing