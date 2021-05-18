import React, { useState } from 'react'
import { LoginContainer } from './style'

import Input from '../../components/Input/Input'
import Spacer from '../../components/Spacer/Spacer'
import Button from '../../components/Button/Button'

import { useDispatch } from 'react-redux'
import { login_success } from '../../modules/user';

import axios from 'axios'

function Login({ history }) {
  const [ inputs, setInputs ] = useState({
    email:'',
    password: '',
  })
  
  // 리덕스 처리
  const dispatch = useDispatch();
  const login = data => dispatch(login_success(data))
  
  const onChange = (e) => {
    const { value, name} = e.target
    setInputs({
      ...inputs,
      [name] : value
    })
  }
  
  // 로그인 처리
  const onLogin = () => {
    console.log('test')
    axios.post('http://106.10.53.116:8099/login',{
      email: inputs.email,
      password: inputs.password
    })
    .then(res => {
      console.log(res)
      login(res.data.token)
      history.push('/')
    }).catch(err => {
      console.log(err)
      alert('비밀번호를 확인해주세요')
    })
  }
  
  return(
    <LoginContainer>
      <div style={{ fontSize: 50, fontWeight: 'bold'}}>로그인</div>
      <div style={{ width: "50%"}}>
        <div>이메일</div>
        <Input 
          name="email"
          value={inputs.email}
          onChange={onChange}
          placeholder="이메일"
          valid={true}
        />

        <Spacer top={30} />
        <div>비밀번호</div>
        <Input 
          name="password"
          value={inputs.password}
          onChange={onChange}
          placeholder="비밀번호"
          type="password"
          valid={true}
        />

        <Spacer top={30} />
        <Button click={onLogin}>로그인</Button>
      </div>
    </LoginContainer>
  )
}

export default Login