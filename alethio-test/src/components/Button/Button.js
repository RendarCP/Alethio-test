import React from 'react'

function Button(props) {
  return(
    <div 
      onClick={props.click}
      style={{ 
        width: '100%',
        backgroundColor: props.color ? props.color : '#f6be44' ,
        borderRadius: 10,
        padding: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize: 15
      }}>
      {props.children}
    </div>
  )
}

export default Button