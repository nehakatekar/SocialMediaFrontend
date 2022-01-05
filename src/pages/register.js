import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, NavLink } from 'react-router-dom'
import { register } from '../redux/actions/authAction'
import RegisterImages from '../images/register.jpg'
const Register = () => {
    const { auth, alert } = useSelector(state => state)
    const dispatch = useDispatch()
    const history = useHistory()
    const initialState = {
        fullname: '', username: '', email: '', password: '', cf_password: '', gender: 'male'
    }
    const [userData, setUserData] = useState(initialState)
    const { fullname, username, email, password, cf_password, gender } = userData
    const [typePass, setTypePass] = useState(false)
    const [typeCfPass, setTypeCfPass] = useState(false)
    useEffect(() => {
        if (auth.token) history.push("/")
    }, [auth.token, history])
    const handleChangeInput = e => {
        const { name, value } = e.target
        setUserData({ ...userData, [name]: value })
    }
    const handleSubmit = e => {
        e.preventDefault()
        dispatch(register(userData))
    }
    return (
        <div>
            <div center>
                <section className='signup'>
                    <div className='container mt-5'>
                        <div className="signup-content">
                            <div className='signup-form'>
                                <h2 className='form-title'>Sign up</h2>
                                <form className='register-form' id="register-form" onSubmit={handleSubmit}>
                                    <div className='form-group'>
                                        <label htmlFor='fullname'>
                                            <i class="zmdi zmdi-account material-icons-name"></i>
                                        </label>
                                        <input type="text" name="fullname" id="fullname" autoComplete='off'
                                            onChange={handleChangeInput} value={fullname}
                                            placeholder='Enter FullName'/>
                                        <small className="form-text text-danger">
                                            {alert.fullname ? alert.fullname : ''}
                                        </small>
                                    </div>
                                    <div className='form-group'>
                                        <label htmlFor='username'>
                                            <i class="zmdi zmdi-accounts-list-alt"></i>
                                        </label>
                                        <input type="text"
                                            name="username" id="username" autoComplete='off'
                                            placeholder='Enter UserName'
                                            onChange={handleChangeInput} value={username}
                                           />
                                        <small className="form-text text-danger">
                                            {alert.username ? alert.username : ''}
                                        </small>
                                    </div>
                                    <div className='form-group'>
                                        <label htmlFor='exampleInputEmail1'>
                                            <i class="zmdi zmdi-email material-icons-name"></i>
                                        </label>
                                        <input type="email"
                                            name="email" id="exampleInputEmail1" autoComplete='off'
                                            placeholder='Your Email'
                                            onChange={handleChangeInput} value={email}
                                            />
                                        <small className="form-text text-danger">
                                            {alert.email ? alert.email : ''}
                                        </small>
                                    </div>
                                    <div className='form-group'>
                                        <label htmlFor='exampleInputPassword1'>
                                            <i class="zmdi zmdi-lock material-icons-name"></i>
                                        </label>
                                        <input type={typePass ? "text" : "password"}
                                            name="password" id="exampleInputPassword1" autoComplete='off'
                                            placeholder='Your Password'
                                            onChange={handleChangeInput} value={password}
                                           />
                                        <small onClick={() => setTypePass(!typePass)}>
                                            {typePass ? 'Hide' : 'Show'}
                                        </small>
                                        <small className="form-text text-danger">
                                            {alert.password ? alert.password : ''}
                                        </small>
                                    </div>

                                    <div className='form-group'>
                                        <label htmlFor='cf_password'>
                                            <i class="zmdi zmdi-lock material-icons-name"></i>
                                        </label>
                                        <input type={typeCfPass ? "text" : "password"}
                                            name="cf_password" id="cf_password" autoComplete='off'
                                            placeholder='Confirm Password'
                                            onChange={handleChangeInput} value={cf_password}
                                            />
                                        <small onClick={() => setTypeCfPass(!typeCfPass)}>
                                            {typeCfPass ? 'Hide' : 'Show'}
                                        </small>
                                        <small className="form-text text-danger">
                                            {alert.cf_password ? alert.cf_password : ''}
                                        </small>
                                    </div>
                                    <div className="row justify-content-between mx-0 mb-2">
                                        <label htmlFor="male">
                                            Male: <input type="radio" id="male" name="gender"
                                                value="male" defaultChecked onChange={handleChangeInput} />
                                        </label>
                                        <label htmlFor="female">
                                            Female: <input type="radio" id="female" name="gender"
                                                value="female" onChange={handleChangeInput} />
                                        </label>
                                        <label htmlFor="other">
                                            Other: <input type="radio" id="other" name="gender"
                                                value="other" onChange={handleChangeInput} />
                                        </label>
                                    </div>
                                    <div className='form-group form-button'>
                                        <input type="submit" name="signup" id="signup"
                                            className='btn btn-primary'
                                            value="Register" />
                                    </div>
                                </form>
                            </div>
                            <div className='signup-image'>
                                <figure>
                                <img src={RegisterImages} alt="register" />
                                </figure>
                                <NavLink to="/" className="signup-image-link"> I am already register</NavLink>
                            </div>
                        </div>
                    </div>
                </section >
            </div>
        </div>

    )
}

export default Register
