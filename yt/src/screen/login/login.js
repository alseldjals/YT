import React from 'react'
import './login.scss'

const Login = () => {
    return (
        <div className='login'>
        <div className='login__container'>
           <h1>너튜브</h1>
           <img
              src='https://www.freepnglogos.com/uploads/google-logo-png/file-google-logo-svg-wikimedia-commons-23.png'
              alt=''
           />
           <button>이메일 또는 휴대전화</button>
           <p>구글이 처음이신가요?</p>
        </div>
     </div>
  )
}

export default Login;