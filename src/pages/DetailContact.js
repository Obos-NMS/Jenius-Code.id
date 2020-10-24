import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useParams, useLocation, useHistory } from 'react-router-dom'

import { 
  Box,
  Card,
  CardActionArea, 
  CardActions, 
  CardContent,
  CardMedia,
  Button,
  Typography } from '@material-ui/core'
import StarIcon from '@material-ui/icons/Star';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import FavoriteIcon from '@material-ui/icons/Favorite';

import ResponsiveNav from '../components/ResponsiveNav'
import UpdateModal from '../components/UpdateModal'

import { fetchOneContact } from '../store/actions/FetchOneContact'
import { deleteContact } from '../store/actions/DeleteContact'

export default function DetailContact() {

  
  const { id } = useParams()
  const history = useHistory()
  const dispatch = useDispatch()

  const oneContact = useSelector((state) => state.contactReducer.contact)
  const [modalShow, setModalShow] = React.useState(false)

  useEffect(() => {
    // console.log('HIT');
    dispatch(fetchOneContact(id))
  },[dispatch])

  
  const handleDeleteContact = () => {
    dispatch(deleteContact(id))
    history.push('/')
  }

  return (
    <div>
      <ResponsiveNav/>
      <UpdateModal
        show={modalShow}
        data={oneContact}
        onHide={() => setModalShow(false)}
      />
      <div className="container" style={{marginTop: "12.5%"}}>
      <Card style={{background: "black"}}>
        
        <div className="row">
          <div className="col-sm-3 col-md-6 col-lg-4">
            <img src={oneContact.photo}
              style={{width: "25em", height: "28.5em"}}
            />
          </div>
          
          
          <div className="col-sm-9 col-md-6 col-lg-8">
            <h1 style={{textAlign: "center", color: "white", marginTop: "3%", marginBottom: "2%"}}> {oneContact.firstName} </h1>
            <h6 style={{textAlign: "center", color: "white", fontSize: "21px", }}> {oneContact.lastName} </h6>
      
            <div className="row" style={{marginBottom: "3%", marginLeft: "5%", marginTop: "10%"}}>
              
              <Button onClick={() => setModalShow(true)} >
                <CreateIcon style={{ color: "#7CCFA9", fontSize: "35px" }} />
                <h6 style={{color: "white", marginLeft: "2%", marginTop: "1.1%", fontSize: "20px"}}>Update</h6>
              </Button>

              {/* <Button onClick={() => handleFavoriteContact()}> */}
                <FavoriteIcon style={{ color: "#FF707D", fontSize: "35px", marginLeft: "7.5%", marginTop: ".5%" }} />
                <h6 style={{color: "white", marginLeft: "2%", marginTop: "1%", fontSize: "20px"}}> {oneContact.age} years old</h6>
              {/* </Button> */}
              
                
                

                
              
            </div>
            
            <div className="row" style={{marginBottom: "7.5%", marginLeft: "5%"}}>
              <Button onClick={() => handleDeleteContact()}>
                <DeleteIcon style={{ color: "#FF707D", fontSize: "35px" }} />
                <h6 style={{color: "white", marginLeft: "2%", marginTop: ".9%", fontSize: "20px"}}>Delete</h6>
              </Button>

            
            </div>

              
            
            

            
          </div>
        </div>
      </Card>
        </div>
    
    </div>
  )
}
