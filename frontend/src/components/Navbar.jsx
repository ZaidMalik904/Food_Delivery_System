import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../context/StoreContext';
import { ShoppingCart, LogOut, User } from 'lucide-react';

const Navbar = ({ setShowLogin }) => {

    const { getTotalCartAmount, token, setToken, menu, setMenu } = useContext(StoreContext);
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token");
        setToken("");
        navigate("/");
    }

    return (
        <div className="navbar sticky top-0 z-50 bg-white flex justify-between items-center py-5 px-[5vw] shadow-sm">
            <Link to='/'><img src='/logo.svg' alt="YumGo." className="w-[150px]" /></Link>
            <ul className="navbar-menu flex gap-5 text-black text-lg font-medium cursor-pointer ">
                <a href='/#home' onClick={() => setMenu("home")} className={menu === "home" ? "border-[tomato] border rounded-[50px] py-2 px-7 hover:bg-[#fff4f2] transition duration-300" : "relative after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:h-[2px] after:w-0 after:bg-[tomato] after:transition-all after:duration-500 hover:after:w-full pb-1"}>Home</a>
                <a href='/#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "border-[tomato] border rounded-[50px] py-2 px-7 hover:bg-[#fff4f2] transition duration-300" : "relative after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:h-[2px] after:w-0 after:bg-[tomato] after:transition-all after:duration-500 hover:after:w-full pb-1"}>Menu</a>
                <a href='/#about-us' onClick={() => setMenu("about-us")} className={menu === "about-us" ? "border-[tomato] border rounded-[50px] py-2 px-7 hover:bg-[#fff4f2] transition duration-300" : "relative after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:h-[2px] after:w-0 after:bg-[tomato] after:transition-all after:duration-500 hover:after:w-full pb-1"}>About Us</a>
                <a href='/#footer' onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "border-[tomato] border rounded-[50px] py-2 px-7 hover:bg-[#fff4f2] transition duration-300" : "relative after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:h-[2px] after:w-0 after:bg-[tomato] after:transition-all after:duration-500 hover:after:w-full pb-1"}>Contact Us</a>
            </ul>
            <div className="navbar-right flex items-center gap-10">
                <div className="navbar-search-icon relative">
                    <Link to='/cart'><ShoppingCart className='w-7 h-7 text-black' /></Link>
                    <div className={getTotalCartAmount() === 0 ? "" : "absolute min-w-[10px] min-h-[10px] bg-[tomato] rounded-full top-[-8px] right-[-8px]"}></div>
                </div>
                {!token ?
                    <button onClick={() => setShowLogin(true)} className='bg-transparent text-[18px] font-bold text-black border border-[tomato] py-2.5 px-7 rounded-[50px] hover:bg-[#fff4f2] transition duration-300'>Sign In</button>
                    : <div className='navbar-profile relative group'>
                        <User className='w-7 h-7 text-[tomato] cursor-pointer' />
                        <ul className='nav-profile-dropdown absolute hidden right-0 z-10 group-hover:flex flex-col gap-2.5 bg-[#fff2ef] py-3 px-6 rounded border border-[tomato] outline-2 outline-white list-none min-w-[140px]'>
                            <li onClick={() => navigate('/my-orders')} className='flex items-center gap-2.5 cursor-pointer hover:text-[tomato]'><ShoppingCart className='w-5 h-5' /><p>Orders</p></li>
                            <hr className='h-[1px] w-full bg-[#e2e2e2] border-none' />
                            <li onClick={logout} className='flex items-center gap-2.5 cursor-pointer hover:text-[tomato]'><LogOut className='w-5 h-5' /><p>LogOut</p></li>
                        </ul>
                    </div>
                }
            </div>
        </div>
    )
}

export default Navbar
