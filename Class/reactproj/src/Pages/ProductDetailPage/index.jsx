import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductById } from "../../services/axios.service";
import './style.css'
import ProductLister from "../../components/ProductLister";
import { BiArrowBack } from 'react-icons/bi'
import {Button} from 'react-bootstrap'

const ProductDetailPage = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    const getProductData = async (id) => {
        const response = await getProductById(id);
        setProduct(response);
    }
    useEffect(() => {
        getProductData(id);
    }, [])

    const viewProductHandler = ()=>{
        console.log('button clicked');
        navigate(`/products`);
    }



    return (
        <>
        <button className="btn btn-primary" onClick={()=>viewProductHandler()}><BiArrowBack/></button>
          <div className="container-product d-flex h-50">
            <div className="image-section ">
                <img src={product.image} alt=""  />
            </div>
            <div className="details d-flex flex-column justify-content-center">
                <h2 className="text-center">{product.title}</h2>
                <p className="description">{product.description}</p>
                <span className="text-center price">Price : $ {product.price}</span>
            {/* <div className="other-details">
                <span className="text-center">Catergory: {product.category}</span>
            </div> */}
            <Button>Add TO Cart</Button>
            </div>
          </div>

        </>
    );
};

export default ProductDetailPage;
