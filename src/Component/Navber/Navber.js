import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import CustomLink from '../CustomLink/CustomLink';
import { useAuthState  } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const Navber = () => {
    const [ user ] = useAuthState(auth)
    const handleSignOut = () =>{
        signOut(auth);
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link className="navbar-brand" to="/">Random-Users</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <CustomLink className="nav-link" to="/">Home</CustomLink>
                            </li>
                            <li className="nav-item">
                                <CustomLink className="nav-link" to="/home">Home</CustomLink>
                            </li>
                            <li className="nav-item">
                                <CustomLink className="nav-link" to="/users">Users</CustomLink>
                            </li>
                            <li className="nav-item">
                                <CustomLink className="nav-link" to="/login">Login</CustomLink>
                            </li>
                        </ul>
                        {
                            user && <span className="navbar-text">
                            {user?.email} 
                            <button onClick={handleSignOut} className='border rounded'>sign-out</button>
                          </span> 
                        }
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navber;