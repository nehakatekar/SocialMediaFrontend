import React, { useState, useEffect } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { login } from '../redux/actions/authAction'
import { useDispatch, useSelector } from 'react-redux'
import LoginImages from '../images/login.jpg'
const Login = () => {
    const initialState = { email: '', password: '' }
    const [userData, setUserData] = useState(initialState)
    const { email, password } = userData
    const [typePass, setTypePass] = useState(false)
    const { auth } = useSelector(state => state)
    const dispatch = useDispatch()
    const history = useHistory()
    useEffect(() => {
        if(auth.token) history.push("/")
    }, [auth.token, history])
    const handleChangeInput = e => {
        const { name, value } = e.target
        setUserData({ ...userData, [name]: value })
    }
    const handleSubmit = e => {
        e.preventDefault()
  
        dispatch(login(userData))
    }
    return (
        <div center>
            <section className='sign-in'>
                <div className='container mt-5'>
                    <div className="signin-content">
                        <div className='signin-image'>
                            <figure>
                            <img src={LoginImages} alt="login" />
                            </figure>
                            <NavLink to="/register" className="signup-image-link"> Create an Account</NavLink>
                        </div>
                        <div className='signin-form'>
                            <h2 className='"form-title'>Sign In</h2>
                            <form onSubmit={handleSubmit} className='register-form' id="register-form"  >
                                <div className='form-group'>
                                    <label htmlFor='email'>
                                        <i class="zmdi zmdi-email material-icons-name"></i>
                                    </label>
                                    <input type="email" name="email" id="email" autoComplete='off'
                                        onChange={handleChangeInput} value={email}
                                        placeholder='Your Email' />
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='password'>
                                        <i class="zmdi zmdi-lock material-icons-name"></i>
                                    </label>   
                                        <input type={typePass ? "text" : "password"}
                                            name="password" id="password" autoComplete='off'
                                            onChange={handleChangeInput} value={password}
                                            placeholder='Your Password' />
                                        <small onClick={() => setTypePass(!typePass)}>
                                            {typePass ? 'Hide' : 'Show'}
                                        </small>  
                                </div>
                                <div className='form-group form-button'>
                                    <input type="submit" name="signin" id="signin" className='form-submit'
                                        value="Log In"
                                      disabled={email && password ? false : true} />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section >
        </div>
    )
}

export default Login
