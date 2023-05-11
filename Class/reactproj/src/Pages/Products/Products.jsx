import React, { useEffect, useState } from 'react'
import Product from '../../components/Product/Product'
import './style.css'


const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => {
        setProducts(json)
      })
  }, [])
  console.log(products)
  // const gettingProducts = async() => {
  //     const url = 'https://fakestoreapi.com/products';
  //     const response = await fetch(url);
  //     const newProducts = await response.json();
  //     console.log(newProducts);
  //     setProducts(newProducts);
  //     console.log(products)

  // }
  return (
    <>
      <div className='container-products'>
        <div className="products ">
          {
            products.map((product) => <Product key={product.id} product={product} />)
          }
        </div>

      </div>
    </>
  )
}

export default Products