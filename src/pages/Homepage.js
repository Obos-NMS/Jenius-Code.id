import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import clsx from 'clsx'
import { makeStyles, useTheme } from '@material-ui/core/styles';

import Carousel from '../components/Carousel'
import ResponsiveNav from '../components/ResponsiveNav'
import { fetchContacts } from '../store/actions/FetchContacts'

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    // marginTop: '5%',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  
}))


export default function Homepage() {

  const classes = useStyles()
  const theme = useTheme()

  const dispatch = useDispatch()
  const contacts = useSelector((state) => state.contactReducer.contacts)
  const [open, setOpen] = useState(false)
  

  useEffect(() => {
    dispatch(fetchContacts())
  },[dispatch])

  return (
    <div className="d-flex justify-content-center"> 
      <h1>HOME</h1>
      <ResponsiveNav/>
      {/* <pre style={{marginTop: '10rem'}}> {JSON.stringify(contacts, null, 2)} </pre> */}
      <Carousel title='Contact' data={contacts.data}/>
      <main
      className={clsx(classes.content, {
        [classes.contentShift]: open,
      })}
      >
        
      </main>
      {/* <pre> {JSON.stringify(contacts, null, 2)} </pre> */}
    </div>
  )
}
