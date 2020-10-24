import React from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import ResponsiveNav from '../components/ResponsiveNav'
import FormContact from '../components/FormContact'

import { addContact } from '../store/actions/AddContact'

export default function AddContact() {
  const history = useHistory()
  const dispatch = useDispatch()
  
  const handleSubmit = (newContact) => {
    let inputContact = {
      firstName: newContact.firstName,
      lastName: newContact.lastName,
      age: Number(newContact.age),
      photo: newContact.photo
    }
    dispatch(addContact(inputContact))
    history.push('/')
  }
  return (
    <div className="" style={{color: "white", fontSize: "20px"}} >
      <ResponsiveNav/>
      <h2 style={{textAlign: "center", marginTop: "9%"}}> Add New Contact </h2>

     <FormContact onSubmit={(newContact) => handleSubmit(newContact)} />
    </div>
  )
}
