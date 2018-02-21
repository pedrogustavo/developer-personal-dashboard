import React, { Component } from 'react'
import { get } from '../../utils'
import './listRepositories.css'


class ListRepositories extends Component {

  constructor () {
    super()
    this.state = {
      repositories: []
    }
  }

  componentWillMount () {
    get('users/pedrogustavo/repos')
      .then((response) => {
        this.setState({
          repositories: response.data
        })
      })
  }
  
  render () {
    return (
      <div className="box-repositories">
        <h3 className="repo-title">Seus Repositórios <span className="count">{this.state.repositories.length}</span></h3>
        <ul className="repo-list">
          {this.state.repositories.map((repo, index) => (
            <li className="repo-list-item" key={index}>
              <a
                className={`repo-list-item-link ${repo.private ? 'private' : 'public'}`}
                target="_brank"
                href={repo.html_url}>
                  {repo.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}


export default ListRepositories
