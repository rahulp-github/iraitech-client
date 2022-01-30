import React from 'react';
import { Link } from 'react-router-dom';

export default function Welcome({ isAuthenticated, username ,handleLogout}) {
    return (
        <>
            {isAuthenticated ?
                <>
                    <h1 className='greeting'>&#128075; Welcome {username}</h1>
                    <div className="quickLinks">
                        <div className="card">
                            <div className="card-header">
                                Quick Links
                            </div>
                            <div className="card-body">
                                <Link to='/profile' className="btn btn-primary">Profile</Link> &ensp;
                                <Link className="btn btn-danger" onClick={handleLogout}>Logout</Link> &ensp;
                            </div>
                        </div>
                    </div>
                </>
                :
                <>
                    <h1 className='greeting'>You Are Not Logged in &#10060;</h1>
                    <div className="quickLinks">
                        <div className="card">
                            <div className="card-header">
                                Quick Links
                            </div>
                            <div className="card-body">
                                <Link to='/register' className="btn btn-primary">Sign Up</Link> &ensp;
                                <Link to='/login' className="btn btn-danger">Sign In</Link> &ensp;
                            </div>
                        </div>
                    </div>
                </>
            }
        </>
    );
}
