import React, { Component } from 'react'
import { localStorage } from './utils'
import { saveGithubAcessToken } from './service'
// import Dashboard from './components/views/dashboard'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import 'bootstrap-social/bootstrap-social.css'

class App extends Component {
  constructor () {
    super()
  }

  componentWillMount() {
    localStorage.get('githubAcesstoken')
      ? console.log('você tem a chave')
      : saveGithubAcessToken()
  }

  render() {
    return (
      <div id='app'>
        <button className="btn btn-block btn-social btn-lg btn-github">Sign in with Github</button>
      </div>
    );
  }
}

export default App
