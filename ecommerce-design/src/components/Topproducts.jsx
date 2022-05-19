import React, { useState,useEffect } from 'react'
import { Container,Grid,Row,Col } from 'rsuite'
import Product from './Product'
import axios from 'axios'

const Topproducts = () => {     /* Topproducts-Part 1 / Video: 7 */
    const [product,setProduct] = useState([])

    useEffect(() => {
        async function fetchproduct(){
            let {data} = await axios.get('http://localhost:8000/products',)
            setProduct(data)
            console.log(data);
        }
        fetchproduct()
    },[])
    


  return (
    <Container className='topproduct'>
        <Grid>
            <Row className="show-grid" gutter={30}>
                <Col xs={12}>
                    <h2>Top Products</h2>
                </Col>
                <Col xs={12}>
                    <ul>
                        <li><span></span> All</li>
                        <li><span></span> Boys Collection</li>
                        <li><span></span> Girl Collection</li>
                        <li><span></span> Shose Collection</li>
                    </ul>
                </Col>
            </Row>
        </Grid>
        
        <Grid>
            <Row className="show-grid" gutter={30}>
                {product.map((item)=>(
                    <Col xs={6}>
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
                
            </Row>
        </Grid>
    </Container>
  )
}

export default Topproducts