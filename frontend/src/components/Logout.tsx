import React from 'react'
import axios from 'axios';
import { useCookies } from 'react-cookie'
import { useHistory } from 'react-router-dom'

const Logout = () => {
  // eslint-disable-next-line
  const [cookies, setCookie, removeCookie] = useCookies(["jwt"])
  const history = useHistory();

  const logoutHandler = () => {
    const options = {
      headers: {
        'content-type': 'application/json',
        'authorization': cookies.jwt
      },
      withCredentials: true
    }

    if (cookies.jwt) {
      axios.delete('http://localhost:3000/user/logout', options)
        .then(() => {
          removeCookie("jwt");
          history.push('/');
        })
        .catch((err) => {
          console.log(err);
        })
    } else {
      history.push('/login')
    }
  }

  return (
    <div>
      { cookies.jwt && <button onClick={logoutHandler}>ログアウト</button>}
    </div>
  )
}

export default Logout
