import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const Register = () => {

    const [credentials, setCredentials] = useState([]);

    const firstNameValue = (e)=>{
        e.preventDefault();
        console.log(e.target.value)
        
    }
    return (
        <>
            <Form className='container border-dark'>
                <h3 className='text-center text-bold'>Register</h3>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridFirst-Name">
                        <Form.Label>First-Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter First Name" onClick={firstNameValue}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGriLast-Name">
                        <Form.Label>Last-Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Last Name" />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="1234 Main St" />
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Select defaultValue="Choose...">
                            <option>Choose...</option>
                            <option>...</option>
                        </Form.Select>
                    </Form.Group>

                </Row>

                <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Button variant="primary" type="submit" className='mb-3 '>
                    Submit
                </Button>
            </Form>
        </>
    )
}

export default Register