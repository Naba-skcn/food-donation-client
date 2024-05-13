import React, {useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from './providers/AuthProvider';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark'); 

    useEffect(() =>{
        localStorage.setItem('theme', theme); // Use setItem instead of setTheme
        document.querySelector('html').setAttribute('data-theme', theme);
    }, [theme]);

    const handleToggle = () => {
        setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark')); 
    };

    const handleLogOut = () => {
        logout()
            .then(() => console.log('User logged out successfully'))
            .catch(error => console.error(error));
    };
    
    const navLinks = (
        <>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/available">Available Foods</NavLink></li>
            {user && <li><NavLink to="/add">Add a Food</NavLink></li>
            }
            {user && <li><NavLink to="/myFood">Manage My Foods</NavLink></li>
            }
        </>
    );

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[20] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <div className="btn btn-ghost text-1xl lg:text-2xl font-bold"><img className='hidden lg:grid md:grid w-[70px] h-[55px]' src="https://media.istockphoto.com/id/1038356020/vector/restaurant-icon.jpg?s=612x612&w=0&k=20&c=Tk_v3JuJA4lz_8ZRJi78xS4p75Idqt97uEtYJciVtFI=" alt="" />Nutri<span className='text-[#66A000]'>Harvest</span></div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <label className="cursor-pointer place-items-center ml-[70px] hidden lg:grid lg:ml-[20px]">
                <input onChange={handleToggle} type="checkbox" checked={theme === 'light'} className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"/>
                <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
                <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
            </label>
            <div className="navbar-end">
                {user ? (
                    <>
                        <div className="hidden md:grid lg:grid tooltip tooltip-left" data-tip={user.displayName}>
                            <span><img className='rounded-full size-[30px]' src={user.photoURL} alt="" /></span>
                        </div>
                        <button onClick={handleLogOut} className="btn btn-sm  bg-[#66A000] border-[#66A000] text-white ml-1">Sign out</button>
                    </>
                ) : (
                    <>
                        <Link to="/login"><button className="btn btn-sm bg-[#66A000] border-white text-white">Sign in</button></Link>
                        <Link to="/register"><button className="btn btn-sm bg-[#66A000] border-white text-white hidden lg:block">Sign up</button></Link>
                    </>
                )}
            </div>
        </div>
    );
};

export default Navbar;
