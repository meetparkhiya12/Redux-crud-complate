import React, { useEffect, useState } from 'react'
import './Studentdata.css'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import uuid from 'react-uuid'
import { useDispatch } from 'react-redux'
import { empAdd } from '../../Services/Action/action'
import { useNavigate } from 'react-router'



function Studentdata() {

    const dispatch = useDispatch();
    const navigate = useNavigate();



    const [inputValue, setInputValue] = useState({
        fname:'',
        lname:'',
        email:'',
        password:'',
        std : '',
        contact:'',
    })




    const handleSubmit =(e) =>{

        e.preventDefault();

        const uid = uuid().slice(0,4);
      

        const newData = {...inputValue , id : uid}



        dispatch(empAdd(newData))

        setInputValue({
            fname:'',
            lname:'',
            email:'',
            password:'',
            std : '',
            contact:'',
        })
        navigate('/view')



       
    }

    const handleChange = (e) =>{

        const name  = e.target.name;
        const value = e.target.value;
        
        setInputValue({...inputValue, [name]: value});

    }

  return (

       
        <Container>
                <Row className='align-items-center'>
                    <Col className='col-6'>
                        <br />
                        <h2 className='mb-3 text-align-center'>
                            Student Regitration
                        </h2>
                        <Form onSubmit={handleSubmit}>
                            <Row className='justify-content-center'>

                                <Form.Group className="mb-3 col-6" controlId="formBasicEmail">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter First Name"  name='fname' value={inputValue.fname} onChange={handleChange}/>
                                </Form.Group>

                                <Form.Group className="mb-3 col-6" controlId="formBasicEmail">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Last Name" name='lname' value={inputValue.lname} onChange={handleChange}/>
                                </Form.Group>

                                <Form.Group className="mb-3 col-6" controlId="formBasicEmail">
                                    <Form.Label>Personal Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter personal email" name='email' value={inputValue.email} onChange={handleChange}/>
                                </Form.Group>

        
                                <Form.Group className="mb-3 col-6" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" name='password' value={inputValue.password} onChange={handleChange}/>
                                </Form.Group>

                                <Form.Group className="mb-3 col-6" controlId="formBasicPassword">
                                    <Form.Label>Contact</Form.Label>
                                    <Form.Control type="text" placeholder="Contact No" name='contact' value={inputValue.contact} onChange={handleChange}/>
                                </Form.Group>

                                
                                <Form.Group className="mb-3 col-6" controlId="formBasicPassword">
                                    <Form.Label>cource</Form.Label>
                                    <Form.Control type="text" placeholder="standard" name='cource' value={inputValue.cource} onChange={handleChange}/>
                                </Form.Group>


                                <Form.Group className="mb-3">
                                    <Form.Label>Gender</Form.Label>
                                    <div className='d-flex'>
                                        {
                                            ['Male', 'Female'].map((label) => {
                                                return (
                                                    <div className='col-2'>
                                                        <Form.Check type='radio' label={label} name="gender" value={label} onChange={handleChange}/>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </Form.Group>

                                

                                <div className='col-3 text-center'>
                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </div>
                            </Row>
                        </Form>
                    </Col>
                    <Col className='col-6'>
                    <img src="https://img.freepik.com/premium-vector/happy-business-colleagues-team-portrait_179970-1271.jpg?w=360" className="Img" alt="" />
                    </Col>
                    
                </Row>
            </Container>

     

  )
}

export default Studentdata;