import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProductDetail = () => {
    const { id } = useParams();
    const product = useSelector(state => state.products.products.find(product => product.id === id));

    useEffect(() => {
        
    }, [id]); 

    return (
        <div>
            {product ? (
                <div>
                    <h1>Product Detail</h1>
                    <p>ID: {product.id}</p>
                    <p>Name: {product.productName}</p>
                    <p>Category: {product.productCategory}</p>
                    <p>Freshness: {product.productFreshness}</p>
                    <p>Description: {product.productDescription}</p>
                    <p>Price: {product.productPrice}</p>
                </div>
            ) : (
                <p>Product not found</p>
            )}
        </div>
    );
};

export default ProductDetail;
