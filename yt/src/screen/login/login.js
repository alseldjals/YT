import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './login.scss'
import { useHistory } from 'react-router-dom'
import {login} from '../../redux/action/auth_action'

const Login = () => {

    const dispatch = useDispatch()

    const accessToken = useSelector(state=>state.auth.accessToken)

    const handleLogin = () => {
        dispatch(login())
    }

    const history = useHistory()

    useEffect(()=>{
        if(accessToken) {
            history.push('/')
        }
    },[accessToken, history])
    return (
        <div className='login'>
        <div className='login__container'>
           <h1>너튜브</h1>
           <img
              src='https://www.freepnglogos.com/uploads/google-logo-png/file-google-logo-svg-wikimedia-commons-23.png'
              alt=''
           />
           <button onClick = {handleLogin}>이메일 또는 휴대전화</button>
           <p>구글이 처음이신가요?</p>
        </div>
     </div>
  )
}

export default Login;