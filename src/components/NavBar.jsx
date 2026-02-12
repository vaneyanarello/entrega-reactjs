import '../assets/styles/NavBar.css'
import CartWidget from './CartWidget'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = ()=>{
    return(
        // <nav className='nav-container'>
        //     <a className='enlace' href="">
        //         <img className='logo' src='../public/logo.png' alt="logo" />
        //     </a>
        //     <a className='enlace' href="">Productos</a>
        //     <a className='enlace' href="">Sale</a>
        //     <a className='enlace' href="">Contacto</a>
        //     <CartWidget/>
        // </nav>
        <Navbar expand="lg" className="navbar-custom" sticky="top">
      <Container fluid>
         <img className='logo' src='https://i.postimg.cc/pTJtdxzT/logo.png' alt="logo" />
        <Navbar.Brand href="#">Home Spa</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Inicio</Nav.Link>
            <Nav.Link href="#action2">Box</Nav.Link>
            <NavDropdown title="Categorías" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Cuidado</NavDropdown.Item>                
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action4">
                Velas y Aromas
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action4">
                Accesorios
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Box
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" >
              Contacto
            </Nav.Link>
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