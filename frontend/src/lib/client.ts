import axios from "axios"

const headers = {
  'content-type': 'application/json',
}

const client = axios.create({
  headers,
  withCredentials: true
})

export default client