import React, { useEffect, useState } from 'react'
import { Container,Grid,Row,Col } from 'rsuite'
import axios from 'axios'


const Deal = () => {        /* Video: 6 */
    const [deal,setDeal] = useState([])

    useEffect(()=>{
        async function deal(){
            let {data} = await axios.get("http://localhost:8000/deal")
            setDeal(data);
        }
        deal()
    },[])


    return (
      <Container className='container deal-part'>
        <Grid>
            <Row className="show-grid"  gutter={30}>
                {deal.map((item,index)=>(
                    <Col xs={12}>
                        <div className='dealbox' style={{backgroundImage: `url(${item.img})`}}>
                            <h3 className={`dealtext${index}`}>{item.subheading} </h3>
                            <h1>{item.heading} {index}</h1>
                            <button className={`dealbtn${index}`}>{item.button} </button>
                        </div>
                    </Col>
                ))}
            </Row>
        </Grid>
      </Container>
    )
}

export default Deal