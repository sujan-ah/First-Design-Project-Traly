import React, { useState,useEffect } from 'react'
import { Container,Grid,Row,Col } from 'rsuite'
import Product from './Product'
import axios from 'axios'

const Feature = () => {     /* Video: 12 */
  const [product,setProduct] = useState([])
  const [featureCat,setFeatureCat] = useState([])

  useEffect(() => {
    async function fetchproduct(){
      let {data} = await axios.get('http://localhost:8000/products')

      let featureCat = await axios.get('http://localhost:8000/feature')
      setFeatureCat(featureCat.data);
      let featureArr = []

      data.map((item)=>{
        if(item.feature){
          featureArr.push(item)
        }
      })
      setProduct(featureArr);
    }
    fetchproduct()
  },[])


  return (
    <Container className='container featureProduct'>
      <Grid>
        <Row className="show-grid" gutter={30}>
          <Col xs={12}>
            <h1>Featured Collections</h1>
          </Col>
        </Row>
      </Grid>
      
      <Grid>
        <Row className="show-grid" gutter={30}>
      
          <Col xs={8} style={{height: 668, marginTop: 40}}>
            {featureCat.map((item)=>(
              item.position == "top" &&
              <Grid style={{backgroundImage: `url(${item.img})`}}>
                <Row className="show-grid"  gutter={30}>
                  <Col xs={12} >
                    <div className='box'>
                      <h2>{item.heading}</h2>
                      <button>{item.button}</button>
                    </div>
                  </Col>
                </Row>
              </Grid>
            ))}
          </Col>

          {product.map((item)=>(
            <Col xs={8}>
              <Product 
                img= {item.img} 
                heading= {item.name}
                rating= {item.rating}
                brand= {item.brand}
                colors={item.colors}
                sizes={item.sizes}
                price= {item.price}
              />
            </Col>
          ))}

          <Col xs={8} style={{height: 668,marginTop: 40}}>
            {featureCat.map((item)=>(
              item.position == "bottom" &&
              <Grid style={{backgroundImage: `url(${item.img})`}}>
                <Row className="show-grid"  gutter={30}>
                    <Col xs={12} >
                      <div className='box'>
                        <h2>{item.heading}</h2>
                        <button>{item.button}</button>
                      </div>
                  </Col>
                </Row>
              </Grid>
            ))}   
          </Col>
        </Row>
      </Grid>
    </Container>
  )
}

export default Feature