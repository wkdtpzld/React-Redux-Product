import React, { useEffect, useCallback } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectProducts, removeProducts } from "../redux/actions/productActions";

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
                <div className="">
                <div className="">{product.description}</div>
                </div>
            )}
        </div>
    );
}

export default ProductDetail