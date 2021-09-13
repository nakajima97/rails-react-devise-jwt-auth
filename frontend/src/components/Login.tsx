import React from 'react'

const Login = () => {
  return (
    <div>
      <p>ログイン</p>
      <form action="submit">
        <div>
          <label htmlFor="email">名前：</label>
          <input type="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">パスワード：</label>
          <input type="password" />
        </div>
        <input type="submit" />
      </form>
    </div>
  )
}

export default Login
