import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { DETAIL_API_URL } from '../API';
import { ProductsInformations, ProductsShowcase } from '../Interfaces'

const ProductInfo = ({ products, currentPageUrl, setCurrentPageUrl }:
    { products: ProductsShowcase, currentPageUrl: string, setCurrentPageUrl: Function }) => {

    const { id } = useParams();

    useEffect(() => {
        axios.get(currentPageUrl).then(res => {
            setCurrentPageUrl(`${DETAIL_API_URL}${id}`);
        }).catch(err => console.log(err))

        let domColors = document.querySelectorAll<HTMLElement>('.showcase_container-item');
        for (let i = 0; i < products.length; i++) {
            domColors[i].style.backgroundColor = `${products[i]['color']}`;
        }
    });

    return (
        <main className="showcase">
            <div className="showcase_container">
                {products.length &&
                    products.map((product: ProductsInformations) => {
                        const { id, name, year, color, pantone_value } = product;
                        return (
                            <div key={id}
                                className="showcase_container-item">
                                <h4>{name}</h4>
                                <p>{id} - product ID</p>
                                <p>{year} - product year</p>
                                <p>{color} - product color</p>
                                <p>{pantone_value} - pantone color</p>
                            </div>
                        );
                    })}
            </div>
        </main>
    )
}

export default ProductInfo