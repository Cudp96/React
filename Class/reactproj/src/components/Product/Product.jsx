import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';


const Product = (props) => {
    const { product } = props;
    console.log(product);
    return (
        <>
            <div className="container h-75 p-2 ">
                <Card>
                    <Card.Img variant="top" className='h-75' src={product.image} />
                    <Card.Body>
                        <Card.Title>{product.title}</Card.Title>
                        <Card.Text className='text-center'>
                          {product.price}
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}

export default Product;