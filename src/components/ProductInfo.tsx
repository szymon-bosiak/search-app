import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { DETAIL_API_URL } from '../API';

const ProductInfo = ({ products, currentPageUrl, setCurrentPageUrl }: { products:any, currentPageUrl:string, setCurrentPageUrl:any }) => {

    const { id } = useParams();

    useEffect(() => {
        axios.get(currentPageUrl).then(res => {
            setCurrentPageUrl(`${DETAIL_API_URL}${id}`);
        }).catch(err => console.log(err))
    }, [products]);

    if (Number(useParams()) > 12) {
        return <h1>Error - page not foun</h1>
    }

    if (!products.length) {
        products = [products];
    }

    const updateColor = () => {
        setTimeout(() => {
            let domColors = document.querySelectorAll<HTMLElement>('.showcase_container-item');

            for (let i = 0; i < products.length; i++) {
                domColors[i].style.backgroundColor = `${products[i]['color']}`;
            }

        }, 5);
    }

    updateColor();

    return (
        <main className="showcase">
            <div className="showcase_container">
                {products.length &&
                    products.map((product:any) => {
                        return (
                            <div key={product['id']}
                                className="showcase_container-item">
                                <h4>{product['name']}</h4>
                                <p>{product['id']} - product ID</p>
                                <p>{product['year']} - product year</p>
                                <p>{product['color']} - product color</p>
                                <p>{product['pantone_value']} - pantone color</p>
                            </div>
                        );
                    })}
            </div>
        </main>
    )
}

export default ProductInfo