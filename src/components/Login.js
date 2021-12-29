import React, { useState } from 'react'
import { NavLink} from 'react-router-dom'
import axios from "axios";

const Login = () => {

    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const  login=()=>{
        axios.post("http://localhost:8000/app/login",user)
        .then(res=>alert(res))
    }

    // const history = useHistory();
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    // const loginUser = async (e) => {
    //     e.preventDefault();

    //     const res = await fetch('/signin', {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify({
    //             email,
    //             password
    //         })
    //     });

    //     const data = res.json()

    //     if (res.status === 400 || !data) {
    //         window.alert("Invalid Credentials")
    //     }
    //     else {
    //         window.alert("Login Successfull")
    //         history.push('/')
    //     }

    return (
        <div center>
           { console.log(user)}
            <section className='sign-in'>
                <div className='container mt-5'>
                    <div className="signin-content">

                        <div className='signin-image'>
                            <figure>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTGWB_-boeAKTKNFnE2azbu3iblEn9L1Aa_Q&usqp=CAU" />
                            </figure>
                            <NavLink to="/signup" className="signup-image-link"> Create an Account</NavLink>
                        </div>


                        <div className='signin-form'>
                            <h2 className='"form-title'>Sign In</h2>
                            <form method="POST" className='register-form' id="register-form"  >


                                <div className='form-group'>
                                    <label htmlFor='email'>
                                        <i class="zmdi zmdi-email material-icons-name"></i>
                                    </label>
                                    <input type="email" name="email" id="email" autoComplete='off'
                                        value={user.email}
                                        onChange={handleChange}
                                        placeholder='Your Email' />
                                </div>



                                <div className='form-group'>
                                    <label htmlFor='password'>
                                        <i class="zmdi zmdi-lock material-icons-name"></i>
                                    </label>
                                    <input type="password" name="password" id="password" autoComplete='off'
                                        value={user.password}
                                        onChange={handleChange}
                                        placeholder='Your Password' />
                                </div>


                                <div className='form-group form-button'>
                                    <input type="submit" name="signin" id="signin" className='form-submit'
                                        value="Log In" onClick={login} />

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
