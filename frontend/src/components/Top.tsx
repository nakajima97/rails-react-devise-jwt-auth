import React from 'react'
import { Link } from 'react-router-dom'

const Top = () => {
  return (
    <div>
      <p>トップページ</p>
      <p><Link to="/signup">新規登録</Link></p>
      <p><Link to="/login">ログイン</Link></p>
      <p><Link to="/profile">プロフィールページ</Link></p>
    </div>
  )
}

export default Top
