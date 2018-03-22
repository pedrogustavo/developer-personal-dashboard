import React, { Component } from 'react'
import { localStorage } from '../../../utils'

import ListRepositories from '../../listRepositories'
import ListIssues from '../../listIssues'

class Dashboard extends Component {
  constructor () {
    super()
    this.state = {
      repositoriesUrl: localStorage.get('repositoriesUrl') ? localStorage.get('repositoriesUrl') : [],
      newRepositorie: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    this.setState({
      newRepositorie: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    let listRepos = this.state.repositoriesUrl
    listRepos.push(this.state.newRepositorie)

    this.setState({ repositoriesUrl: listRepos, newRepositorie: '' })
    localStorage.add('repositoriesUrl', this.state.repositoriesUrl)

  }

  render() {
    return (
      <div>
        <div className='container'>
          <div className='row'>

            <div className='col-md-8'>
              {this.state.repositoriesUrl.map((item, index) => (
                <ListIssues data={item} key={index} />
              ))}

              <div className="box-include-repo">
                <form onSubmit={this.handleSubmit}>
                  <div className="form-row">
                    <div className="col">
                      <input type="text" value={this.state.newRepositorie} onChange={this.handleChange} className="form-control" placeholder="Url do repositório" />
                    </div>
                    <div className="col">
                      <button type="submit" className="btn btn-primary">Adicionar</button>
                    </div>
                  </div>
                </form>
              </div>
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

export default Dashboard
