import React, { useEffect, useState } from 'react'
import Card from '../../components/Card/Card'
import { useParams } from "react-router-dom";
import axios from 'axios';

import Loading from '../../components/Loading/Loading'

function Order() {
  let params = useParams()
  
  const [ item, setItems ] = useState()
  
  useEffect(() => {
    axios.get(`http://106.10.53.116:8099/order/${params.id}`)
    .then( res => {
      console.log(res)
      setItems(res.data)
    }).catch(err => {
      console.log(err)
    })
  },[])
  
  return(
    // 아이템이 없을시 로딩을 발생시켜 사용자가 기다릴수있게
    item ? 
    <div style={{ display:'flex', justifyContent: 'center'}}>
      <Card id={item.id} itemName={item.itemName} />
    </div>
    : <Loading />
  )
}

export default Order