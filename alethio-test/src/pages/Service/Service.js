import React from 'react';
import Image from '../../images/service.jpeg'

import Button from '../../components/Button/Button'

function Service() {
  return(
    <div>
      <img src={Image} style={{ display: "flex", width: "50%", height: "100%", margin: "0 auto" }}/>
      <div>
        <Button>
          <div>주문하기</div>
        </Button>
      </div> 
    </div>
  )
}

export default Service