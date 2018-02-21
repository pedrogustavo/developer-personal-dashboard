import React, { Component } from 'react'
import { localStorage } from './utils'
import { saveGithubAcessToken } from './service'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'

import ListRepositories from './components/listRepositories'
import ListIssues from './components/listIssues'

class App extends Component {
  componentWillMount() {
    localStorage.get('githubAcesstoken')
      ? console.log('você tem a chave')
      : saveGithubAcessToken()
  }

  render() {
    return (
      <div id='app'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-8'>
              <ListIssues />
            </div>
            <div className='col-md-4'>
              <ListRepositories />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App
