import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link, NavLink} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Container, Nav} from 'react-bootstrap';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';
import { UserAuthContextProvider, useUserAuth } from './contexts/AuthContext';
import Header from './components/Header';
import ProtectedRoute from "./components/ProtectedRoute"
import Home from "./components/Home"
import GenreSelect from "./components/GenreSelect"

function App() {
    

    return (
        
            
            <div className="background-image" >
                
                <UserAuthContextProvider>
                    <Router>
                    <Header></Header>
                        <Container>                            
                        <Routes>
                            <Route exact path="/home"
                                element={
                                    <ProtectedRoute>
                                        <Home />
                                    </ProtectedRoute>
                                }></Route>
                            <Route exact path="/genreSelect"
                                element={
                                    <ProtectedRoute>
                                        <GenreSelect />
                                    </ProtectedRoute>
                                }></Route>
                                <Route exact path='/Signup' element={<Signup />}></Route>
                                <Route exact path='/' element={<Login />}></Route>
                            </Routes>
                        </Container>
                    </Router>
                </UserAuthContextProvider>
        
            </div>
            
        
            )
    }
  


export default App;
