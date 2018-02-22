import React from 'react'
import Box from '../box'
import './listIssues.css'

const ListIssues = (props) => (
  <Box>
    {console.log('inner')}
    <div className="list-issues">
      <h3 className="title-repo">
        <a href="https://github.com/frontendbr/forum" title="frontendbr/forum">frontendbr/forum</a>
      </h3>
      <ul className="list-issues-group">
        <li className="list-issues-group-item">
          <a className="list-issues-group-item-name" href="https://github.com/frontendbr/forum/issues/952" title="Lugares para deixar anotações  de estudo ? ">{props.data.title}</a>
        </li>
      </ul>
      </div>
  </Box>
)

export default ListIssues
