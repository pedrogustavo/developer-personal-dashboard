import React from 'react'
import './listRepositories.css'

// get('users/pedrogustavo/repos')
//   .then((response) => {
//     console.log(response)
//   })

const ListRepositories = () => (
  <div className="box-repositories">
    <h3 className="repo-title">Seus Repositórios</h3>
    <ul className="repo-list">
      <li className="repo-list-item">
        <a className="repo-list-item-link" target="_brank" href="/stone-payments/onestap-developer-webapp">onestap-developer-webapp</a>
      </li>
    </ul>
  </div>
)


export default ListRepositories
