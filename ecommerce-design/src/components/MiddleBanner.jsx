import React, { useEffect, useState } from 'react'
import axios from 'axios'


const MiddleBanner = () => {
    const [middle,setmiddle] = useState({})

    useEffect(()=>{
        async function midban(){
            let {data} = await axios.get('http://localhost:8000/middle')
            setmiddle(data)
        }
        midban()
    },[])
    return (
        <div className='middle' style={{backgroundImage: `url(${middle.img})`}}>
            <h3>{middle.heading} </h3>
            <button>{middle.button}</button>
        </div>
    )
}

export default MiddleBanner