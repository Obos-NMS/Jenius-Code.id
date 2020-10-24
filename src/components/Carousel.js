import React, { useEffect } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Box from '@material-ui/core/Box';
// import MovieCard from "../card/MovieCard"
import ContactCard from "../components/ContactCard"
import '../styles/DetailContact.css'

// import '../styles/DetailMovie.css'

// import MovieCard from "./MovieCard"

export default function Carousel(props) {

  // let data = props.data

  useEffect(() => {
    if (props) {
      console.log(props);
    }
  }, [props])
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true
        }
      }
    ]
  }

  return (
    <>
    
    
    <Box boxShadow={3} className="box-wrapper"
      style={{ 
        marginTop: '12.5%',
        // margin: '0 auto', 
        width: '80%', 
        padding: '3em', 
        backgroundColor: '#2C3948', 
        color: 'white', 
        borderRadius: '10px' }}>
      
      

      {props.data ?
        <Slider {...settings}>
        {props.data.map((el, i) => {
          return (
            <Box 
              key={i}
            >
              <ContactCard 
                lastName={el.lastName} firstName={el.firstName} photo={el.photo}
                age={el.age} _id={el.id} age={el.age}
              />
            </Box>
          )
        })}
      </Slider>
        : <h1>Loading..</h1>
      }
    </Box>
    
    </>
  )
}
