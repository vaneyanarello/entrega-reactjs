import '../assets/styles/NavBar.css'
import CartWidget from './CartWidget'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';

const NavBar = ()=>{
    return(
        
        <Navbar expand="lg" className="navbar-custom" sticky="top">
      <Container fluid>
         <Navbar.Brand as={NavLink} to='/'><img className='logo' src='https://i.postimg.cc/pTJtdxzT/logo.png' alt="logo" /></Navbar.Brand>
        <Navbar.Brand as={NavLink} to='/'>Home Spa</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={NavLink} to='/'>Inicio</Nav.Link>
            <Nav.Link as={NavLink} to='/category/Box'>Box</Nav.Link>
            <NavDropdown title="Categorías" id="navbarScrollingDropdown">
              <NavDropdown.Item as={NavLink} to='/category/Cuidado'>Cuidado</NavDropdown.Item>                
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to='/category/Velas y Aromas'>
                Velas y Aromas
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to='/category/Accesorios'>
                Accesorios
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to='/category/Box'>
                Box
              </NavDropdown.Item>
            </NavDropdown>
            {/* <Nav.Link has={NavLink} to='/contacto' >
              Contacto
            </Nav.Link> */}
          </Nav>
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
          
          <CartWidget/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default NavBar