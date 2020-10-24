import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"

import { Modal, Button } from 'react-bootstrap'

import { updateContact } from '../store/actions/UpdateContact'
import FormContact from './FormContact'

export default function UpdateModal(props) {
  const history = useHistory()
  const data = props.data
  const dispatch = useDispatch()
  // console.log(props.data);
  

  const handleSubmit = (newContact) => {
    
    // console.log(newContact);
    dispatch(updateContact(props.data.id, newContact))
    history.push('/')
 
  }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.data.firstName}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormContact onSubmit={(newContact) => handleSubmit(newContact)}
          data={data}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}