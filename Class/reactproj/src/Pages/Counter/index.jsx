import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


const Counter = () => {
    const [count, setCount] = useState(0);
    const [errorMessage, setErrorMessage] = useState('')

    const counterIncrement = () => {
        setCount(count + 1);
        setErrorMessage('');
    }
    const resetCounter = () => {
        setCount(0);
        setErrorMessage('');
    };
    const counterDrecement = () => {
        if (count <= 0) {
            setErrorMessage("Cannot decrement counter more!!!")
        } else {
            setCount(count - 1);
        }
    }
    return (
        <>
            <Card className='w-50 d-flex justify-content-center align-content-center mx-auto my-5'>
                <Card.Header className='text-center'>Counter App</Card.Header>
                <Card.Body className='text-center text-bold'>{count<=0?errorMessage:count}</Card.Body>
                <Card.Footer className='d-flex justify-content-center'>
                    <Button variant="primary" onClick={counterIncrement}>Increment</Button>
                    <Button variant='danger' className='ms-2' onClick={resetCounter}>Reset</Button>
                    <Button variant='secondary' className='ms-2' onClick={counterDrecement}>Decrement</Button>
                </Card.Footer>
                <div>{errorMessage}</div>
            </Card>
        </>
    )
}

export default Counter