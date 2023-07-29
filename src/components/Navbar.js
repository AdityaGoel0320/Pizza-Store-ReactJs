import React from 'react'


import {
    BrowserRouter, Route, Routes,
    NavLink
} from 'react-router-dom';


const Navbar = () => {
    return (
        <>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
        </>
    )
}

export default Navbar