import axios from "axios"
import Cookies from 'js-cookie';

const jwt = Cookies.get('jwt')

const headers = {
  'content-type': 'application/json',
  'authorization': jwt
}

const client = axios.create({
  headers,
  withCredentials: true
})

export default client