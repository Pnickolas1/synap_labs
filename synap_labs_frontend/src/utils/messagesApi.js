const api = 'https://morning-falls-3769.herokuapp.com/api'

const headers = {
  'Accept': 'application/json',
  'Authorization': 'lateroundpick'
}

export const getAll = () => 
  fetch(`${api}/messages`, { headers })
  .then(res => res.json())