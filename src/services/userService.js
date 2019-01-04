import Config from './config'

export const getUserDetail = async params => {
  const { token, orgUuid, userUuid, roles } = params

  let url = `${Config.SERVER_URL}/healthcare/v1/${orgUuid}/nurse/${userUuid}`

  if (roles.includes('doctor')) {
    url = `${Config.SERVER_URL}/healthcare/v1/${orgUuid}/doctor/${userUuid}`
  }

  return fetch(url, {
      method: 'get',
      headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      },
    }).then(res => res.json())
    .catch(error => {
      console.error(error)
    })
}
