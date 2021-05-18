import React, { useState, useEffect } from 'react'
import ItemImage from '../../images/itemImage.jpeg'
import axios from 'axios'
import { Link } from 'react-router-dom'

// 컴포넌트
import Card from '../../components/Card/Card'
import Loading from '../../components/Loading/Loading'

function Orders({ history }) {
  const [ lists, setLists ] = useState([])
  const [ currentPage, setCurrentPage ] = useState(0)
  const [ totalPage, setTotalPage] = useState(0)


  // 데이터 처리
  useEffect(() => {
    axios.get(`http://106.10.53.116:8099/order?page=${currentPage}`)
    .then(res => {
      console.log(res)
      setLists(res.data.content)
      setTotalPage(res.data.totalPages)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])


  return(
    // 서버에서 1초 딜레이가 걸리므로 데이터가 없을시 로딩 발생 
    <div>
      {/* 아이템 영역 */}
      {
        lists.length > 0 ?
          <div style={{ display: 'flex', flexWrap:'wrap',justifyContent:'center', alignItems: 'center'}}>
            {
              lists?.map(item => {
                return(
                  <Link style={{ textDecoration: 'none', color: 'black'}} to={`/mypage/order/${item.id}`}>
                    <Card id={item.id} itemName={item.itemName}/>
                  </Link>
                )
              })
            }
          </div>
          : <Loading />
      }
      {
        lists.length > 0 ?
          <Pagination totals={totalPage} paginate={setCurrentPage}/>
          : null
      }
    </div>
  )
}

export default Orders

function Pagination({ totals, paginate}) {
  const pageNumbers = [];
  for (let i = 1; i <= totals; i++){
    pageNumbers.push(i)
  }
  return(
    <div style={{ display: 'flex', justifyContent:'center', alignItems: 'center'}}>
      {
        pageNumbers?.map(total => {
          return(
            <ui style={{ border: '1px solid black', padding: 5}} onClick={()=>paginate(total-1)}>{total}</ui>
          )
        })
      }
    </div>
  )
  
}