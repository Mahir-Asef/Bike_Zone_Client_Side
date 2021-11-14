import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from '@fortawesome/free-solid-svg-icons';
import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import './Navigation.css'
import useAuth from './../../../hooks/useAuth';

const Navigation = () => {
  const {user,logout}=useAuth();
  return (
    <div>
      <Navbar  collapseOnSelect expand="lg" variant="dark" className="navbar" sticky="top">
        <Container>
          <NavLink className="logo text-center" to="/home">
            <div className="d-flex align-items-center">
              <span className="logo-text ms-2 fw-bold">Bike Zone</span>
            </div>
          </NavLink>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <NavbarCollapse className="mx-auto align-items-center">
          <Nav className="ms-auto align-items-center">
          <NavLink className="nav-item ms-5" to="/">
              Home
            </NavLink>
            <NavLink className="nav-item ms-5" to="/allbikes">
              All Bikes
            </NavLink>
            { user.displayName && 
                <NavLink className="nav-item ms-5" to="/dashboard">
                  Dashboard
                </NavLink>}
                
              { user.displayName ? <Button
                  className="button-light ms-sm-5"
                  onClick={logout}
                >
                  Log Out
                  <FontAwesomeIcon className="ms-2" icon={faUser} />
                </Button>
            : 
              <NavLink className="ms-sm-5 m-2" to="/login">
                <Button className="button-light">
                  Log In
                  <FontAwesomeIcon className="ms-2" icon={faUser} />
                </Button>
              </NavLink>
              
            }
             {user.email && <span className="text-white"> <span className="mx-3">Hi</span> {user.displayName }</span>}
          </Nav>
          </NavbarCollapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
