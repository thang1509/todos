import axios from 'axios'

export type params = {
  query: string
  page: number
  num_pages: string
}

export const fetchToDo = () => {
  const options = {}

  // const url = 'https://jsearch.p.rapidapi.com/search'
  const url = 'https://jsonplaceholder.typicode.com/todos'

  return axios.get(url).then((response) => {
    return response.data
  })
}
