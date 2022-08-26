import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductComponent = () => {
    
    const products = useSelector((state) => state.allProducts.products);
    
    const renderList = products.map((product) => {
        return (
            <div className="foure column wide" key={product.id}>
                <Link to={`/product/${product.id}`} >
                <h1 className="ui link cards">
                    <div className="card">
                        <div className="image">
                            <img src={product.image} alt={ product.title } />
                        </div>
                        <div className="content">
                            <div className="header">{product.title}</div>
                            <div className="meta price">$ {product.price}</div>
                            <div className="meta"> {product.category}</div>
                        </div>
                    </div>
                </h1>
                </Link>
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