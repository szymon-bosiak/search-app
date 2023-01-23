import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const ProductsElement = ({ products, setCount, setCurrentPageUrl }: { products: any, setCount: Function, setCurrentPageUrl: Function }) => {

    interface ProductsInformations {
        id: number;
        name: string;
        year: number;
        color: string;
        pantone_value: string;
    }

    const navigate = useNavigate();

    let pageNumber = Number(useParams().id)

    useEffect(() => {
        setCount(pageNumber)
        setCurrentPageUrl(`https://reqres.in/api/{resource}?page=${pageNumber}+&per_page=5`);
    }, []);

    useEffect(() => {
        let domColors = document.querySelectorAll<HTMLElement>('.showcase_container-item');
        for (let i = 0; i < products.length; i++) {
            domColors[i].style.backgroundColor = `${products[i]['color']}`;
        }
    });

    if (!products.length) {
        products = [products];
    }

  return (
    <div>
          {products.length &&
              products.map((product: ProductsInformations) => {
                  return (
                      <div key={`${product['id']}`} onClick={() => navigate(`../product/${product.id}`, { replace: true })}
                          className="showcase_container-item clickable">
                          <h4>{product['name']}</h4>
                          <p>{`${product['id']} - product ID`}</p>
                          <p>{`${product['year']} - product year`}</p>
                      </div>
                  );
              })}
    </div>
  )
}

export default ProductsElement