import React from 'react';
import  './NotFound.css' ;
import {Button} from 'react-bootstrap'
import { NavLink}  from "react-router-dom";
import img from '../../images/notfound.jpg';

const NotFound = () => {
    return (
        <div className="container not-found h-50 w-50 ">
            <div>
            <h1>Page not found <span><i class="far fa-sad-tear sad-icon"></i></span> </h1>
            </div>
            <div>
                <img className="img-fluid not-found-image" src={img} alt="" srcset="" />
            </div>
            <NavLink  to="/home"><Button className="btn-danger mt-2" >Back to Home</Button></NavLink>
        </div>
    );
};

export default NotFound;