import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { setCategory } from "../redux/actions/productActions";
import styles from "../assets/css/ProductCP.module.scss"
import axios from "axios";

const ProductCGCompoent = () => {

    const categories = useSelector((state) => state.category.categories);
    const navigate = useNavigate();
    const { category } = useParams();
    const [select, SetSelect] = useState(category);
    const dispatch = useDispatch();

    const onSubmit = (event) => {
        event.preventDefault();
        const {
            target: { value }
        } = event;
        SetSelect(value);

        if (value === "main") {
            navigate("/main");
        } else {
            navigate(`/main/detail/${value}`)
        }
    };

    const fetchCategoryList = useCallback(async () => {
        const categoryResponse = await axios
            .get("https://fakestoreapi.com/products/categories")
            .catch((error) => {
                console.log(error);
            });
        dispatch(setCategory(categoryResponse.data));
    }, [dispatch])

    useEffect(() => {
        fetchCategoryList();
    }, [fetchCategoryList]);

    const renderList = categories?.map((category, index) => {
        return (
            <option value={category} key={index}> {category} </option>
        )
    });
    
    return (
        <div className={ styles.selectBox }>
            <h1> 카테고리 </h1>
            <select onChange={onSubmit} value={select}>
                <option value="main">All Category</option>      
                { renderList }  
            </select>
        </div>
    )
}

export default ProductCGCompoent;