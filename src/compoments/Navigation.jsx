import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FaCartPlus } from "react-icons/fa";

import { Nav, Container, Navbar, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { useShopingCarte } from '../context/ShopingCarteProvider';

const Navigation = () => {
  const {openCart, carteItem} = useShopingCarte()

  const totaleQuantity = ()=>{
    return carteItem.reduce((total, item)=>{
    return total + item.quantity
  },0)}

  return (
  <Navbar sticky='top' className='bg-white shadow-sm mb-3'>
    <Container>
      <Nav>
        <Navbar.Brand href="#home">My Store</Navbar.Brand>
        <Nav.Link to={"/"} as={NavLink}>Home</Nav.Link>
        <Nav.Link to={"store"} as={NavLink}>Store</Nav.Link>
        <Nav.Link to={"about"} as={NavLink}>About</Nav.Link>
      </Nav>
      <Button variant='outline-primary' className='rounded-circle Carte' onClick={openCart}>
        
        <FaCartPlus/>
          {totaleQuantity()?<div className='rounded-circle bg-danger d-flex justify-content-center align-items-center ' >{totaleQuantity()}</div>:''}
        
      </Button>
    </Container>
  </Navbar>
  );
}

export default Navigation
