import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { useCookies } from 'react-cookie'

import client from '../lib/client'

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  // eslint-disable-next-line
  const [cookies, setCookie, removeCookie] = useCookies(["jwt"]);

  const history = useHistory()

  const signupHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const params = {
      "user" :{
        email,
        password
      }
    }

    client.post('http://localhost:3000/user', params)
      .then((res) => {
        setCookie("jwt", res.headers["authorization"]);
        history.push('/profile');
      })
      .catch((err) => {
        console.log(err);
      })
  }

  return (
    <div>
      <p>アカウント登録</p>
      <form action="submit" onSubmit={signupHandler}>
        <div>
          <label htmlFor="email">メールアドレス：</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="password">パスワード：</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div>
          <label htmlFor="password-confirm">パスワード再確認：</label>
          <input type="password" id="password-confirm" value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)}/>
        </div>
        <input type="submit" />
      </form>
    </div>
  )
}

export default Signup
