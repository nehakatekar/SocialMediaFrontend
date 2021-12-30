import { useEffect } from 'react'
import './index.css'

import { BrowserRouter as Router, Route } from 'react-router-dom'

import pageRender from './PageRender';

import Home from './pages/home'
import Login from './pages/login'

import Alert from './components/alert/Alert';
import Header from './components/alert/Header';

import { useSelector, useDispatch } from 'react-redux'
import { refreshToken } from './redux/actions/authAction';

function App() {
  const { auth } = useSelector(state => state)
  const dispatch =useDispatch()

  useEffect(()=>{
    dispatch(refreshToken())
  },[dispatch])

  return (
    <Router>
      <Alert />
      <input type="checkbox" id="theme" />
      <div className='App'>
        <div className="main">
        {auth.token && <Header/>}
          <Route exact path="/" component={auth.token ? Home : Login} />
          {/* <Route exact path="/" component={Login} /> */}
          <Route exact path="/:page" component={pageRender} />
          <Route exact path="/:page/:id" component={pageRender} />
        </div>
      </div>
    </Router>
  );
}
export default App;