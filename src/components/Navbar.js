import React from 'react'


import {
    BrowserRouter, Route, Routes,
    NavLink
} from 'react-router-dom';


const Navbar = () => {
    return (
        <>

            <div className="flex  p-4 items-center gap-12 justify-between">

                <div className="logo">
                    <img src="./images/logo.jpg" className='h-12' alt="" />
                </div>
                <div className="routes flex  p-4 items-center gap-12 justify-center">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/products">Products</NavLink>
                    <NavLink className="bg-pink-500 flex p-4 gap-1" to="/cart">
                        <span>10</span>
                        Cart Logo
                    </NavLink>
                </div>
            </div>

        </>
    )
}

export default Navbar