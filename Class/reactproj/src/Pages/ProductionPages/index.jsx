import React from 'react'
import ProductLister from '../../components/ProductLister';
import { getProductData } from '../../services/axios.service'
import { useEffect, useState } from 'react';




const ProductsPage = () => {
    const [products, setProducts] = useState([]);

    const getProds = async () => {
        const data = await getProductData();
        setProducts(data);
    };
    // console.log(products)

    useEffect(() => {
        getProds();

    }, []);

    return (
        <>
         <div className="container w-75 d-flex justify-content-center mt-4">
                <div className="products d-grid mb-2">
                    {products.map((product) => {
                        return <ProductLister key={product.id} product={product} />;
                    })}
                </div>
            </div>
        </>
    )
}

export default ProductsPage;