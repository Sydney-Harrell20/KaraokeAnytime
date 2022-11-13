import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Login from './components/Login';
import Signup from './components/Signup';
import ForgotPassword from './components/ForgotPassword'
import { UserAuthContextProvider} from './contexts/AuthContext';
import Header from './components/Header';
import ProtectedRoute from "./components/ProtectedRoute"
import Home from "./components/Home"
import GenreSelect from "./components/GenreSelect"
import Genre from "./components/Genre";
import LoggedRoute from "./components/LoggedRoute"



function App() {



    return (
        
            
        <div className="background-image" >
                <UserAuthContextProvider>
                    <Router>
                    <Header></Header>
                    
                    <Container >
                        
                        <h1 className="text-center mt-4 ">Karaoke Anytime!</h1>

                        <Routes className="">
                            <Route exact path="/"
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
                            <Route path="/KaraokeRoom/:genre"
                                element={
                                    <ProtectedRoute>
                                            <Genre />
                                    </ProtectedRoute>
                                }></Route>

                            <Route exact path='/Signup' element={<Signup />}></Route>

                            <Route path="/login"
                                element={
                                    
                                        <LoggedRoute>
                                        
                                            <Login />
                                        
                                    </LoggedRoute>
                                }></Route>
                                
                                <Route exact path='/ForgotPassword' element={<ForgotPassword />}></Route>
                            </Routes>
                        </Container>
                    </Router>
                </UserAuthContextProvider>
        
            </div>
            
        
            )
    }
  


export default App;
