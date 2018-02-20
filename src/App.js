import React, { Component } from 'react'
import { localStorage, get } from './utils'
import { saveGithubAcessToken } from './service'
import './App.css'

class App extends Component {
  componentWillMount() {
    localStorage.get('githubAcesstoken')
      ? console.log('você tem a chave')
      : saveGithubAcessToken()
  }

  render() {
    get('users/pedrogustavo/repos')
      .then((response) => {
        console.log(response)
      })
    return (
      <div>
       eu
      </div>
    );
  }
}

export default App
