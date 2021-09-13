import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useCookies } from 'react-cookie'
import Logout from './Logout';

const Profile = () => {
  // eslint-disable-next-line
  const [email, setEmail] = useState("")

  // eslint-disable-next-line
  const [cookies, setCookie, removeCookie] = useCookies(["jwt"])

  useEffect(() => {
    const options = {
      headers: {
        'content-type': 'application/json',
        'authorization': cookies.jwt
      },
      withCredentials: true,
    }

    axios.get("http://localhost:3000/profile", options)
      .then((res) => setEmail(res.data.email))
      .catch((error) => console.log(error))
  }, [cookies.jwt])

  return (
    <>
      <p>プロフィールページ</p>
      {email ? <p>メールアドレス: {email}</p> : <p>ログインしてください</p>}
      <Logout />
    </>
  )
}

export default Profile
