
import './App.css';

import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import About from './components/About';
import Contact from './components/Contact';
import Topbar from "./components/topbar/Topbar"

class App extends Component {
    render() {
        return (
            <div>

                <Router>

                    <Navbar />
                    <Route exact path="/" component={Home} />

                    <Route exact path="/signup" component={Signup} />

                    <Route exact path="/login" component={Login} />

                    <Route exact path="/about" component={About} />

                    <Route exact path="/contact" component={Contact} />

                </Router>
                {/* <Topbar/> */}
            </div>
        )
    }
}


export default App;
