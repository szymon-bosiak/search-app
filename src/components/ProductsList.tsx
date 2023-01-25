import React from 'react'
import { ProductsShowcase } from '../Interfaces';
import ProductsElement from './Products';

const Products = ({ products, setCount, setCurrentPageUrl }: { products: ProductsShowcase, setCount: Function, setCurrentPageUrl: Function }) => {

    return (
        <main className="showcase">
            <div className="showcase_container">
                {products.length !== 0 ?               
                    <ProductsElement products={products} setCount={setCount} setCurrentPageUrl={setCurrentPageUrl} />
                :
                    <p>Page not found</p>
                }
            </div>
        </main>
    )
}

export default Products