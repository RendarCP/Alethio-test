import React from 'react'
import ItemImage from '../../images/itemImage.jpeg' 
import { Link } from 'react-router-dom'

function Card(props) {
  return(
    <>
      <div
        style={{ 
          width: 250, 
          height: 200,
          border: '1px solid black', 
          padding: 20, 
          borderRadius: 10, 
          marginBottom: 20,
          }}>
        <div style={{ display: 'flex', justifyContent:'space-between'}}>
          <div>{props.id}</div>
          <div>{props.itemName}</div>
        </div>
        <div>
          <img src={ItemImage} style={{ width: "100%", height: 150 }}/>
        </div>
      </div>
      <div style={{ marginRight: 20 }}/>
    </>
  )
}

export default Card