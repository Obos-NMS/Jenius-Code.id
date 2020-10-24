import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { addContact } from '../store/actions/AddContact'


export default function AddPages() {
  
  const history = useHistory()
  const dispatch = useDispatch()
  const [_id, set_id] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [photo, setPhoto] = useState('')
  const [age, setAge] = useState()
  


  function handleGetFirstName(e) {
    setFirstName(e.target.value)
  }
  function handleGetLastName(e) {
    setLastName(e.target.value)
  }
  function handleGetPhoto(e) {
    setPhoto(e.target.value)
  }
  function handleGetAge(e) {
    setAge(e.target.value)
  }
  

  const handleSubmit = (e) => {
    let inputContact = {
      firstName: firstName,
      lastName: lastName,
      age: Number(age),
      photo: photo
    }
    dispatch(addContact(inputContact))
    history.push('/')
    
  }

  return (
    <div className="container">

      <Form onSubmit={ (e) => handleSubmit(e) }>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>First Name</Form.Label>
          <Form.Control 
            type="text" placeholder="Input First Name" value={firstName}
            onChange={ (e) => handleGetFirstName(e) }
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Last Name</Form.Label>
          <Form.Control 
            type="text" placeholder="Input Last Name" value={lastName}
            onChange={ (e) => handleGetLastName(e) }
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Age</Form.Label>
          <Form.Control 
            type="number" placeholder="Input Age" value={age}
            onChange={ (e) => handleGetAge(e) }
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Photo</Form.Label>
          <Form.Control 
            type="text" placeholder="Input Photo" value={photo}
            onChange={ (e) => handleGetPhoto(e) }
          />
        </Form.Group>
        
       
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      
      
    </div>
  )
}
