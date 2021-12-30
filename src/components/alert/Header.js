import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../redux/actions/authAction'
const Header = () => {

    const navLinks = [
        { label: 'Home', icon: 'home', path: '/' },
        { label: 'Message', icon: 'near_me', path: '/message' },
        { label: 'Discover', icon: 'explore', path: '/discover' },
        { label: 'Notify', icon: 'favorite', path: '/notify' }

    ]
     const{ auth}= useSelector(state =>state)
     const dispatch = useDispatch()

    return (

        <nav class="navbar navbar-expand-lg navbar-light bg-light justify-content-between align-middle">
            <a class="navbar-brand" href="#">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_ZiruD7iucl-MRCbHiWb2HdcGScWQ5bluoA&usqp=CAU"
                    height="70px"
                    class="card-img-top" />
            </a>


            <div class="menu">
                <ul class="navbar-nav flex-row">
                    {
                        navLinks.map((link, index) => (
                            <li class="nav-item active">
                                <Link class="nav-link" to={link.path}>
                                    <span class="material-icons">{link.icon}</span>
                                </Link>
                            </li>
                        ))
                    }


                    <li class="nav-item dropdown">
                        <span class="nav-link dropdown-toggle"id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            User
                        </span>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            
                            <Link class="dropdown-item" to={`/profile/`}>Profile</Link>
                            <Link class="dropdown-item" to="/">Dark Mode</Link>

                            <div class="dropdown-divider"></div>
                            <Link class="dropdown-item" to="/"
                            onClick={()=>dispatch(logout())}>Logout</Link>                        </div>
                    </li>

                </ul>

            </div>
        </nav>

    )
}

export default Header
