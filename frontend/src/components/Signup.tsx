import React from 'react'

const Signup = () => {
  return (
    <div>
      <p>アカウント登録</p>
      <form action="submit">
        <div>
          <label htmlFor="email">名前：</label>
          <input type="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">パスワード：</label>
          <input type="password" />
        </div>
        <div>
          <label htmlFor="password-confirm">パスワード再確認：</label>
          <input type="password-confirm" />
        </div>
        <input type="submit" />
      </form>
    </div>
  )
}

export default Signup
