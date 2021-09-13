import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { useCookies } from 'react-cookie'

import client from '../lib/client'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  // eslint-disable-next-line
  const [cookies, setCookie, removeCookie] = useCookies(["jwt"]);

  const history = useHistory()

  const loginHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const params = {
      "user" :{
        email,
        password
      }
    }

    client.post('http://localhost:3000/user/login', params)
      .then((res) => {
        if (res.headers["authorization"] === undefined) {
          setMessage("ログイン失敗")
        } else {
          setCookie("jwt", res.headers["authorization"]);
          history.push('/profile');
        }
      })
      .catch((err) => {
        console.log(err);
      })
  }

  return (
    <div>
      <p>ログイン</p>
      <form action="submit" onSubmit={loginHandler}>
        <div>
          <label htmlFor="email">名前：</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label htmlFor="password">パスワード：</label>
          <input type="password"  value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <input type="submit" />
      </form>
      { message && <p>{message}</p>}
    </div>
  )
}

export default Login
