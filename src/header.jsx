import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom"
import { Container } from "reactstrap";
// import 'bootstrap/dist/css/bootstrap.css';
import React from "react";


const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">PostsApp</Navbar.Brand>
                    <Nav className="me-auto navbar_wrapper">
                        {
                            localStorage.getItem('user') ?
                                <>
                                    <Link to="/post">Add Post</Link>
                                </>
                                :
                                <>
                                    <Link to="/login" >Login</Link>
                                    <Link to="/" >Sign Up</Link>
                                </>
                        }
                    </Nav>
                </Container>
            </Navbar>
            {/* <Navbar bg="dark" variant="dark" >
                <Navbar.Brand href="/" >Navbar</Navbar.Brand>
                <Nav className="mr-auto nav_bar_wrapper" >
                  
                </Nav>
                <Nav>
                    <NavDropdown title="Name" ></NavDropdown>
                </Nav>
            </Navbar> */}
        </div>
    );
}

export default Header;