import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { API_URL_BEFORE, API_URL_AFTER } from '../API';
import { ProductsInformations, ProductsShowcase } from '../Interfaces'

const ProductsElement = ({ products, setCount, setCurrentPageUrl }:
    { products: ProductsShowcase, setCount: Function, setCurrentPageUrl: Function }) => {

    const navigate = useNavigate();

    let pageNumber = Number(useParams().id)

    useEffect(() => {
        setCount(pageNumber)
        setCurrentPageUrl(`${API_URL_BEFORE}${pageNumber}${API_URL_AFTER}`);
    }, []);

    useEffect(() => {
        let domColors = document.querySelectorAll<HTMLElement>('.showcase_container-item');
        for (let i = 0; i < products.length; i++) {
            domColors[i].style.backgroundColor = `${products[i]['color']}`;
        }
    });

    return (
        <div>
            {products.length &&
                products.map((product: ProductsInformations) => {
                    const { id, name, year } = product;
                    return (
                        <div key={id} onClick={() => navigate(`../product/${product.id}`, { replace: true })}
                            className="showcase_container-item clickable">
                            <h4>{name}</h4>
                            <p>{id} - product ID</p>
                            <p>{year} - product year</p>
                        </div>
                    );
                })}
        </div>
    )
}

export default ProductsElement