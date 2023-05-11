import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {useNavigate} from "react-router-dom"


const ProductLister = ({ product }) => {
    const navigate = useNavigate();
    

    const viewProductHandler = (id)=>{
        console.log(product.id);
        navigate(`/products/${id}`);
    }
  return (
    <>
      <div className="container mb-3">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={product.image} className="h-75" />
          <Card.Body>
            <div className="name">
              <Card.Title >
                {product.title.length > 35
                  ? product.title.slice(0, 35) + '...'
                  : product.title}
              </Card.Title>
              <Card.Title>$ {product.price}</Card.Title>
            </div>
            <Button variant="primary" onClick={()=>viewProductHandler(product.id)}>View Products</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default ProductLister;
