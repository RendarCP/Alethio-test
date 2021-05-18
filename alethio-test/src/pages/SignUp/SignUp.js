import React, { useState, useRef } from 'react'
import { SignUpContainer } from './style'
import Input from '../../components/Input/Input'
import Spacer from '../../components/Spacer/Spacer'
import Button from '../../components/Button/Button'
import Validation from '../../components/Validation/Validation'

import { useDispatch } from 'react-redux'
import { login_success } from '../../modules/user';

import axios from 'axios'

function SignUp({ history }) {
  const [ emailValid, setemailValid ] = useState(false)
  const [ passValid, setPassValid] = useState(false)
  const [ inputs, setInputs ] = useState({
    email:'',
    password: '',
    paswordConfirm: '',
    mobile: '',
  })

  const emailInput = useRef()

  // 이메일 정규표현식
  const emailRegex = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

  // 전역상태 리덕스 처리
  const dispatch = useDispatch();
  const login = data => dispatch(login_success(data))
  
  // input 관련 함수 처리
  const onChange = (e) => {
    const { value, name} = e.target
    setInputs({
      ...inputs,
      [name] : value
    })
    checkEmailValid()
    passwordValid()
  }
  
  // 이메일 validation
  const checkEmailValid = () => {
    if(emailRegex.test(inputs.email)){
      setemailValid(true)
    }
    else{
      setemailValid(false)
    }
  }

  // password validation
  const passwordValid = () => {
    if(inputs.password.length > 1 && inputs.password === inputs.paswordConfirm){
      setPassValid(true)
    }
    else{
      setPassValid(false)
    }
  }

  // 회원가입 함수
  const onSignUp = () => {
    if(inputs.password.length < 8 || inputs.password.length > 16){
      alert('비밀번호는 8 ~ 15자리만 가능합니다')
    }
    if(!emailRegex.test(inputs.email)){
      alert('이메일을 확인해주세요!')
    }
    else{
      axios.post('http://106.10.53.116:8099/sign-up',{
        email: inputs.email,
        password: inputs.password,
        mobile: inputs.mobile
      })
      .then( res => {
        console.log(res.data.token)
        login(res.data.token)
        history.push('/')
      })
      .catch( err => {
        console.log(err)
      })
    }
  }

  return(
    <SignUpContainer>
      <div style={{ fontSize: 50, fontWeight: 'bold'}}>회원가입</div>
      <div style={{ width: "50%"}}>
        <div>이메일</div>
        <Input 
          name="email"
          value={inputs.email}
          onChange={onChange}
          placeholder="이메일"
          valid={emailRegex.test(inputs.email)}
          ref={emailInput}
        />
        {
          emailRegex.test(inputs.email) ? '': <Validation title="이메일 형식이 아닙니다"/>
        }

        <Spacer top={30} />
        <div>비밀번호</div>
        <Input 
          name="password"
          value={inputs.password}
          onChange={onChange}
          placeholder="비밀번호"
          type="password"
          valid={passValid}
        />

        <Spacer top={30} />
        <div>비밀번호 확인</div>
        <Input 
          name="paswordConfirm"
          value={inputs.paswordConfirm}
          onChange={onChange}
          placeholder="비밀번호 확인"
          type="password"
          valid={passValid}
        />
        {
          inputs.password.length > 1 && inputs.password === inputs.paswordConfirm ? '': <Validation title="비밀번호가 틀립니다"/>
        }
        
        <Spacer top={30} />
        <div>연락처</div>
        <Input 
          name="mobile"
          value={inputs.mobile}
          onChange={onChange}
          placeholder="연락처"
          valid={true}        
        />

        <Spacer top={30} />
        <Button click={onSignUp}>회원가입</Button>
      </div>

    
    </SignUpContainer>
  )
}

export default SignUp