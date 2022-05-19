import React, { useEffect, useState } from 'react'
import { Container } from 'rsuite';
import { Carousel } from 'rsuite';
import axios from 'axios'

const Banner = () => {    /* Video: 5 */

  const [banner,setBanner] = useState([])

  useEffect(()=>{
    async function banner(){
      let {data} = await axios.get("http://localhost:8000/banner")
      setBanner(data);
    }
    banner()
  },[])

  return (
    <Carousel className="custom-slider">
      {banner.map((item)=>(
        <div className='sliderItem'>
          <div className='bannerimg' style={{backgroundImage: `url(${item.img})`}}>
          <Container className='container'>
            <h3> {item.subheading} </h3>
            <h1> {item.heading} </h1>
            <button> {item.button} </button>
          </Container>
          </div>
        </div>
      ))}
    </Carousel>
  )
}

export default Banner