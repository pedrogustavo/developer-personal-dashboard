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

    this.redirectToSignin = this.redirectToSignin.bind(this)
  }

  redirectToSignin () {
    console.log('redirect')
    window.location.assign(`https://github.com/login/oauth/authorize?client_id=d21867fa77ab8ad34efc&redirect_uri=${window.location.href}`)
  }

  componentWillMount() {
    localStorage.get('githubAcesstoken')
      ? console.log('você tem a chave')
      : saveGithubAcessToken()
  }

  render() {
    return (
      <div id='app'>
        <button className="btn btn-block btn-social btn-lg btn-github" onClick={this.redirectToSignin}>Sign in with Github</button>
      </div>
    );
  }
}

export default App
