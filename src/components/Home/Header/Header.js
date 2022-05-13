import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo.png'
const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth)
  }
    return (
        <>
  <Navbar collapseOnSelect expand="lg" sticky='top' bg="primary" variant="dark">
  <Container>
            <Navbar.Brand as={Link} to="/home">
              <img width={100} height={40} src={logo} alt="" />
            </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as= {Link} to="inventory">Inventory</Nav.Link>
      <Nav.Link as= {Link} to="myitems">My Items</Nav.Link>
      <Nav.Link as={Link} to="blog">Blogs</Nav.Link>
      
    </Nav>
    <Nav>
      <Nav.Link as={Link} to="about">About</Nav.Link>
      {
        user && <>
          <Nav.Link as={Link} to="addnewitem">Add New Items</Nav.Link> 
          <Nav.Link as={Link} to="manageinventory">Manage Inventory</Nav.Link> 
        </>
      }
      {
        user ? <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>Signout</button>
        :
        <Nav.Link as={Link} to="login">
        Login
      </Nav.Link>
      }
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>

</>
    );
};

export default Header;