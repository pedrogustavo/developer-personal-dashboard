import React, { Component } from 'react'
import { get } from '../../utils'
import Box from '../box'
import './listIssues.css'

class ListIssues extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listIssues: []
    }
  }

  componentWillMount () {
    get(`https://api.github.com/repos/${this.props.data}/issues`)
      .then((response) => this.setState({ listIssues: response.data }))
  }

  render() {
    return (
      <Box>
        <div className="list-issues">
          <h3 className="title-repo">
            <a href={`https://github.com/${this.props.data}`} title={this.props.data} target="_blank">{this.props.data}</a>
          </h3>
          <ul className="list-issues-group">
            {this.state.listIssues.map((repo, index) => (
              <li className="list-issues-group-item" key={index}>
                <a className="list-issues-group-item-name" href={repo.html_url} target="_blank" title={repo.title}>
                  {repo.title}
                  {repo.labels.map((label, index) => (
                    <span key={index} style={{ background: `#${label.color}` }}>{label.name}</span>
                  ))}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Box>
    )
  }
}

export default ListIssues
