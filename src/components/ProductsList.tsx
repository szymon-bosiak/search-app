import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Products = ({ products, setCount, setCurrentPageUrl }: { products: any, setCount: any, setCurrentPageUrl: any }) => {

    const navigate = useNavigate();

    let pageNumber = Number(useParams().id) 

    useEffect(() => {       
        setCount(pageNumber)
        setCurrentPageUrl(`https://reqres.in/api/{resource}?page=${pageNumber}+&per_page=5`);
    }, [pageNumber, setCount, setCurrentPageUrl]);

    if (pageNumber > 3) {
        return <h1>Error - page not found</h1>
    }

    const updateColor = () => {
        setTimeout(() => {
            let domColors = document.querySelectorAll<HTMLElement>('.showcase_container-item');
            for (let i = 0; i < products.length; i++) {
                domColors[i].style.backgroundColor = `${products[i]['color']}`;
            }
        });
    }

    updateColor();

    if (!products.length) {
        products = [products];
    }

    return (     
        <main className="showcase">
            <div className="showcase_container">
                {products.length &&
                    products.map((product: { [x: string]: any; id: any; }) => {
                        return (
                            <div key={`${product['id']}`} onClick={() => navigate(`../product/${product.id}`, { replace: true })}
                                className="showcase_container-item">
                                <h4>{product['name']}</h4>
                                <p>{product['id']} - product ID</p>
                                <p>{product['year']} - product year</p>
                            </div>
                        );
                    })}
            </div>
        </main>
    )
}

export default Products