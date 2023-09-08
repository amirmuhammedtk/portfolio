import React from 'react'
 import 'bootstrap/dist/css/bootstrap.min.css';
 import './Nav.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';


function Navb() {


  return (
    <div >
          <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid className='bgc'>
        {/* <Navbar.Brand href="#" style={{ color: 'white' }}>AMIR MUHAMMED </Navbar.Brand> */}
        <Nav.Link as={Link} to="/Home" style={{ color: 'white' }}>AMIR MUHAMMED</Nav.Link>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
           <Nav.Link as={Link} to="/Home" style={{ color: 'white' }}>Home</Nav.Link>
              <Nav.Link as={Link} to="/About" style={{ color: 'white' }}>About</Nav.Link>
              <Nav.Link as={Link} to="/Qualification" style={{ color: 'white' }}>Qualification</Nav.Link>
              <Nav.Link as={Link} to="/Skills" style={{ color: 'white' }}>Skills</Nav.Link>
              <Nav.Link as={Link} to="/Contact" style={{ color: 'white' }}>Contact</Nav.Link>
              <Nav.Link as={Link} to="/Project" style={{ color: 'white' }}>Project</Nav.Link>

          </Nav>
        
        </Navbar.Collapse>
      </Container>
    </Navbar>
   <Outlet/>
    </div>
  )
}

export default Navb