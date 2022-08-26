import React from "react";
import { useSelector } from "react-redux";

const ProductCGCompoent = () => {

    const categories = useSelector((state) => state.category.categories);
    
    const renderList = categories?.map((category, index) => {
        return (
            <option value={category} key={index}> {category} </option>
        )
    });
    
    return (
        <>
            { renderList }         
        </>
    )
}

export default ProductCGCompoent;