import { localStorage } from '../utils'

export const saveGithubAcessToken = () => {
  let accessToken = prompt('Insira seu token de acesso do Github')
  localStorage.add('githubAcesstoken', accessToken)
}
