import React, { useState } from 'react';
import { HeaderContainer, HeaderButton, MobileContainer, MobileItem } from './style.js'
import Spacer from '../Spacer/Spacer'
import Icon from '../../images/menuIcon.png'
import { Link } from 'react-router-dom'

import { useSelector } from 'react-redux';

function Header({ mobile }) {
  const [ isMobile, setIsMobile ] = useState(false)

  const user = useSelector(state => state.user)

  const onMenuClick = () => {
    setIsMobile(!isMobile)
  }
  return(
    mobile ?
    <HeaderContainer>
      <Link style={{ textDecoration: 'none', color: 'black'}} to='/'>
        <div style={{ padding: 20, fontSize: 20, fontWeight: 'bold' }}>Logo</div>
      </Link>
      <div style={{ paddingRight: 20, display: 'flex', flexDirection:'row', height: '100%' }}>
        <HeaderButton>서비스</HeaderButton>
        <Spacer right={10} />
        <Link style={{ textDecoration: 'none', color: 'black'}} to='/sign-up'>
          <HeaderButton>{user.tocken ? '마이페이지' : '회원가입'}</HeaderButton>
        </Link>
        <Spacer right={10} />
        <Link style={{ textDecoration: 'none', color: 'black'}} to='/login'>
          <HeaderButton>{user.tocken ? '로그아웃' : '로그인'}</HeaderButton>
        </Link>
      </div>
    </HeaderContainer>
    :
    <>
      <MobileContainer>
        <div style={{ padding: 20, fontSize: 20, fontWeight: 'bold' }}>Logo</div>
        <img onClick={onMenuClick} src={Icon} style={{ width: 50, height: 50 }} />
      </MobileContainer>
      <div style={{ display: isMobile ? 'block' : 'none' }}>
        <MobileItem>서비스</MobileItem>
        <MobileItem>회원가입</MobileItem>
        <MobileItem>로그인</MobileItem>
      </div>
    </>
  )
}

export default Header