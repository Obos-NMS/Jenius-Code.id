import React from 'react'
import { Link } from "react-router-dom"

import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';


const useStyles = makeStyles ({
  media: {
    margin: '0 auto'
  }
})

export default function ContactCard(props) {
  const classes = useStyles()

  return (
    <>
      <Card style={{
        width: 375,
        backgroundColor: 'black',
        color: 'white',
        margin: '0 0.4em',
      }}>
        
        <Link
          style={{ color: 'white', textDecoration: 'none' }}
          to={`/${props._id}`}
        >
          <CardActionArea >
            <CardMedia
              className=""
              style={{
                height: 375,
                width: 300,
                marginTop: '9%',
                marginLeft: '9%',
                marginRight: '9%',
                marginBottom: '5%',
                alignItems: 'center',
                justify: 'center',
                paddingLeft: '2%'
              }}
              title="Contact"
            >
              
              <img src={props.photo} 
                style={{ 
                  height: "21rem", 
                  width: "19rem",
                  // justifyContent: "center"
                }}
              />
              
            </CardMedia>
            <CardContent>
              <div style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                textAlign: 'center' }}
              >
                <h5><b> {props.firstName} </b></h5> 
                <p> {props.lastName} </p>   
              </div>
            </CardContent>
          </CardActionArea>
        </Link>
      </Card>
      
      
    </>
  )
}

