import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios';


class Signup extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
            email: "",
            phone: "",
            work: "",
            password: "",
            cpassword: "",
            loginFail: false,
            
        }
        this.handleName = this.handleName.bind(this)
        this.handleEmail = this.handleEmail.bind(this)
        this.handlePhone = this.handlePhone.bind(this)
        this.handleWork = this.handleWork.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
        this.handleCpassword = this.handleCpassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    handleName(e) {
        this.setState({
            name: e.target.value
        })
    }
    handleEmail(e) {
        this.setState({
            email: e.target.value
        })
    }
    handlePhone(e) {
        this.setState({
            phone: e.target.value
        })
    }
    handleWork(e) {
        this.setState({
            work: e.target.value
        })
    }
    handlePassword(e) {
        this.setState({
            password: e.target.value
        })
    }
    handleCpassword(e) {
        this.setState({
            cpassword: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault()

        const registered = {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            work: this.state.work,
            password: this.state.password,
            cpassword: this.state.cpassword
        }

        axios.post('http://localhost:8000/app/signup', registered)
            .then(response => console.log(response.data))

        this.setState({
            name: "",
            email: "",
            phone: "",
            work: "",
            password: "",
            cpassword: ""
        })
    }
    render() {
        return (
            <div>
                <section className='signup'>
                    <div className='container mt-5'>
                        <div className="signup-content">
                            <div className='signup-form'>
                                <h2 className='"form-title'>Sign up</h2>
                                <form className='register-form' id="register-form" onSubmit={this.onSubmit}>
                                    <div className='form-group'>
                                        <label htmlFor='name'>
                                            <i class="zmdi zmdi-account material-icons-name"></i>
                                        </label>
                                        <input type="text" name="name" id="name" autoComplete='off'
                                            value={this.state.name}
                                            onChange={this.handleName}
                                            placeholder='Your Name' />
                                    </div>

                                    <div className='form-group'>
                                        <label htmlFor='email'>
                                            <i class="zmdi zmdi-email material-icons-name"></i>
                                        </label>
                                        <input type="email" name="email" id="email" autoComplete='off'
                                            value={this.state.email}
                                            onChange={this.handleEmail}
                                            placeholder='Your Email' />
                                    </div>

                                    <div className='form-group'>
                                        <label htmlFor='phone'>
                                            <i class="zmdi zmdi-phone-in-talk material-icons-name"></i>
                                        </label>
                                        <input type="number" name="phone" id="phone" autoComplete='off'
                                            value={this.state.phone}
                                            onChange={this.handlePhone}
                                            placeholder='Your Phone' />
                                    </div>

                                    <div className='form-group'>
                                        <label htmlFor='work'>
                                            <i class="zmdi zmdi-slideshow material-icons-name"></i>
                                        </label>
                                        <input type="text" name="work" id="work" autoComplete='off'
                                            value={this.state.work}
                                            onChange={this.handleWork}
                                            placeholder='Your Profession' />
                                    </div>

                                    <div className='form-group'>
                                        <label htmlFor='password'>
                                            <i class="zmdi zmdi-lock material-icons-name"></i>
                                        </label>
                                        <input type="password" name="password" id="password" autoComplete='off'
                                            value={this.state.password}
                                            onChange={this.handlePassword}
                                            placeholder='Your Password' />
                                    </div>

                                    <div className='form-group'>
                                        <label htmlFor='cpassword'>
                                            <i class="zmdi zmdi-lock-open material-icons-name"></i>
                                        </label>
                                        <input type="password" name="cpassword" id="cpassword" autoComplete='off'
                                            value={this.state.cpassword}
                                            onChange={this.handleCpassword}
                                            placeholder=' Confirm your Password' />
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
                                    <img src="https://ps.w.org/custom-registration-form-builder-with-submission-manager/assets/icon-256x256.png?rev=2547375" />
                                </figure>
                                <NavLink to="/login" className="signup-image-link"> I am already register</NavLink>
                            </div>
                        </div>
                    </div>

                </section >

            </div>
        );
    }
}


export default Signup
