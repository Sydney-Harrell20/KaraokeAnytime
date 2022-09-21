import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Alert, Breadcrumb, Navbar, Nav, NavDropdown,Container } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link, NavLink, useNavigate } from "react-router-dom"
import { useUserAuth } from "../contexts/AuthContext"
 //you can make this dynamic and turn into something based on some outside factors. Ex: If I move past the first screen (more than one is the array), change the header to include the reset/logout

//reset button


const Header = (props) => {
    const [error, setError] = useState("")
    const { user } = useUserAuth()
    const navigate = useNavigate();
    return (

        <div>
            <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
                <Container className="text-center">
                    <Navbar.Brand onClick={() => { navigate("/home") }} style={{ cursor: 'pointer' }} >{user && user.email}</Navbar.Brand>
                    
                    
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    Karaoke Anytime
                    <Nav>
                        <NavLink hidden={user} to="/" className="btn btn-secondary">Sign In</NavLink>

                            <Nav.Link hidden={!user}onClick={() => { navigate("/genreSelect")}}>Play!</Nav.Link>
                    </Nav>
                    {/* <Nav>
                        <NavLink hidden={currentUser == null} to="./professorClasses" className= "btn btn-primary">ProfessorClasses</NavLink>
                    </Nav>
                    <Nav>
                        <NavLink hidden={currentUser == null} to="./createExperiment" className= "btn btn-primary">CreateExperiment</NavLink>
                    </Nav> */}

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )




    //use the getname function here to get a germ object.


}
export default Header