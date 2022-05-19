import React, { useState } from 'react'
import { Panel,Rate } from 'rsuite';
import { BsStarFill,BsStarHalf,BsStar } from 'react-icons/bs';
import { HiOutlineShoppingBag } from 'react-icons/hi';



const Product = (props) => { /* Topproducts-Part -2 / Video: 8 */

  const [activeColor,setActiveColor] = useState('')
  const [activeSize,setActiveSize] = useState('')


  return (
    <div className='singleproduct'>
      <Panel bodyFill style={{ display: 'inline-block', width: "100%"}}>
        <img src={props.img} style={{ width: "100%"}}  />

        {/* Topproducts-Part -3 / Video: 9 */}
        <div className='productbox'>
          <div className='producticon'>
            {props.rating >=1
              ? <BsStarFill className='star-icon'/> 
              : props.rating >=.5? <BsStarHalf className='star-icon'/>
              : <BsStar className='star-icon'/>
            }
            {props.rating >=2
              ? <BsStarFill className='star-icon'/> 
              : props.rating >=1.5? <BsStarHalf className='star-icon'/>
              : <BsStar className='star-icon'/>
            }
            {props.rating >=3
              ? <BsStarFill className='star-icon'/> 
              : props.rating >=2.5? <BsStarHalf className='star-icon'/>
              : <BsStar className='star-icon'/>
            }
            {props.rating >=4
              ? <BsStarFill className='star-icon'/> 
              : props.rating >=3.5? <BsStarHalf className='star-icon'/>
              : <BsStar className='star-icon'/>
            }
            {props.rating >=5
              ? <BsStarFill className='star-icon'/> 
              : props.rating >=4.5? <BsStarHalf className='star-icon'/>
              : <BsStar className='star-icon'/>
            }
          </div>
          <div className='brand'>
            <p className='product-brand'>{props.brand}</p>
          </div>
        </div>
        {/* Topproducts-Part -3 / Video: 9 */}

        <Panel header={props.heading}>
          
          <div className='productbox'>
            <div className='producticon'>
              {props.colors.map((item)=>(
                <span  style={{background: `${item}`}}
                  /* Topproducts-Part -4 / Video: 10 */
                  className={activeColor == item 
                  ? 'productColor activeColor' 
                  : 'productColor'} 
                 
                  onClick={()=>setActiveColor(item)}
                  /* Topproducts-Part -4 / Video: 10 */
                >

                </span>
              ))}
            </div>
            <div className='productsize'>
              {props.sizes.map((item)=>(
                <span 
                  className={activeSize == item
                  ? 'productSize productActivesize'
                  : 'productSize'}
                  onClick={()=>setActiveSize(item)}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <span className='cart'>
            <HiOutlineShoppingBag className='productcart'/>
          </span>
          <span className='productprice'>
            ${props.price}
          </span>
           {/* Topproducts-Part -4 / Video: 10 */}
        </Panel>
      </Panel>
    </div>
  )
}

export default Product