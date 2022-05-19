import React, { useEffect, useState } from 'react'
import { Navbar, Nav, Dropdown, Container } from 'rsuite';
import { FaRegUserCircle, } from 'react-icons/fa';
import { AiOutlineHeart,AiOutlineShoppingCart } from 'react-icons/ai';
import { BiGitCompare, } from 'react-icons/bi';
import axios from 'axios'


const Menubar = () => {     /* Video: 3 */
  const [logo,setLogo] = useState({})

  useEffect(()=>{
    async function menu(){
      let {data} = await axios.get("http://localhost:8000/logo")
      setLogo(data.img);
    }
    menu()
  },[])

  return (
    <Container className='container'>
      <Navbar className='menu'>
        <Navbar.Brand href="#">
          <img src={logo} />
        </Navbar.Brand>
        
        <Nav className='menu-item'>
          <Nav.Item>Home</Nav.Item>
          <Nav.Item>Pages</Nav.Item>
          <Nav.Item>Blog</Nav.Item>
          <Nav.Item>Contacts</Nav.Item>
        </Nav>
        <Nav pullRight>
          <div className='navicon'>
            <FaRegUserCircle className='icon'/>
            <AiOutlineHeart className='icon'/>
            <BiGitCompare className='icon'/>
            <AiOutlineShoppingCart className='icon'/>
            <span className='round'>15</span>
          </div>
        </Nav>
    </Navbar>
    </Container>
    
  )
}

export default Menubar