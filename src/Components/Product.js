import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { add } from '../store/CartSlice';
const Products = () => {
    const [products, setProducts] = useState([])
    const dispatch = useDispatch()
    useEffect(() => {

        const fetchProducts = async () => {
            const res = await axios.get('https://fakestoreapi.com/products');
            const data = await res.data;
            // console.log(data);
            setProducts(data);
        };
        fetchProducts();
    }, []);

    const handleAdd = (product) => {
        dispatch(add(product))
    }
    return (
        <div className="productsWrapper">
            {products.map((product) => (
                <div className="card" key={product.id}>
                    <img src={product.image} alt="" />
                    <h4>{product.title}</h4>
                    <h5>{product.price}</h5>
                    <button onClick={() => handleAdd(product)} className="btn">
                        Add to cart
                    </button>

                </div>
            ))}
        </div>
    );
};

export default Products;