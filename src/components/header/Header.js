import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../redux/actions/authAction'
import Search from './Search'
import Avatar from '../Avatar'
const Header = () => {
    const navLinks = [
        { label: 'Home', icon: 'home', path: '/' },
        { label: 'Message', icon: 'near_me', path: '/message' },
        { label: 'Discover', icon: 'explore', path: '/discover' },
        { label: 'Notify', icon: 'notifications', path: '/notify' }
    ]
    const { auth } = useSelector(state => state)
    const dispatch = useDispatch()
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between align-middle">
            <a className="navbar-brand" href="#">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_ZiruD7iucl-MRCbHiWb2HdcGScWQ5bluoA&usqp=CAU"
                    height="70px"
                    className="card-img-top" />
            </a>
            <Search />
            <div className="menu">
                <ul className="navbar-nav flex-row">
                    {
                        navLinks.map((link, index) => (
                            <li className="nav-item px-2" key={index}>
                                <Link className="nav-link" to={link.path}>
                                    <span className="material-icons">{link.icon}</span>
                                </Link>
                            </li>
                        ))
                    }
                    <li className="nav-item dropdown">
                        <span className="nav-link dropdown-toggle" id="navbarDropdown"
                            role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <Avatar src={auth.user.avatar} size="medium-avatar" />
                        </span>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link className="dropdown-item" to={`/profile/${auth.user._id}`}>Profile</Link>
                            <div className="dropdown-divider"></div>
                            <Link className="dropdown-item" to="/"
                                onClick={() => dispatch(logout())}>Logout</Link>                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default Header
