import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({isAuthenticated,handleLogout}) {


    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link to='/' className="navbar-brand" >IraiTech</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
                            </li>
                            { isAuthenticated && 
                            <li className="nav-item">
                                <Link className="nav-link active" to="/profile">Profile</Link>
                            </li>
                            }
                         </ul>
                    </div>
                    <div className='d-flex'>
                        { isAuthenticated ? 
                             <Link className="loginBtn" to="/" type="button" onClick={handleLogout}> Logout </Link>
                             :
                             <>
                                <Link className="loginBtn" to="/register" type="button">Sign Up</Link> &nbsp;
                                <Link className="loginBtn" to="/login" type="button">Login</Link>
                             </>
                        }                       
                    </div>
                 </div>
            </nav>
        </>
    )
}
