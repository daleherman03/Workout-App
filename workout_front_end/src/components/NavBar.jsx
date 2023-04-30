import { Link } from "react-router-dom"
import { logOut } from "../utilities"
import React, { useState, useContext } from 'react';
import { UserContext } from '../App';

export const NavBar = ()=> {
    const [user, setUser] = useContext(UserContext);

    return (
        <>
            <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a class="navbar-brand" href="#">Tango Fitness</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link class="nav-link" to={'/'}>Sign Up</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to={'/login/'}>Log In</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to={'/home/'}>Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to={'/search/'}>Search</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to={'/log/'}>Log</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to={'/history/'}>History</Link>
                            </li>
                            <li>
                                <button onClick={()=>logOut(setUser)}>LOG OUT</button>
                            </li>
                        </ul>
                </div>
            </div>
            </nav>  
        </>
    )
}