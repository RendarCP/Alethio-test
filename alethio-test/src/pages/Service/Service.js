import React from 'react';
import Image from '../../images/service.jpeg'

import Button from '../../components/Button/Button'

import { useSelector } from 'react-redux';

function Service({ history }) {
  const user = useSelector(state => state.user)

  const onOrderClick = () => {
    if(user.tocken !== ''){
      alert('주문성공')
    }
    else{
      alert('로그인해주세요!')
      history.push('/login')
    }
  }
  return(
    <div>
      <img src={Image} style={{ display: "flex", width: "50%", height: "100%", margin: "0 auto" }}/>
      <div>
        <Button click={onOrderClick}>
          <div>주문하기</div>
        </Button>
      </div> 
    </div>
  )
}

export default Service