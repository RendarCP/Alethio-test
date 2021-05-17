import React from 'react'

function Input(props) {
  return(
    <input
      style={{ 
        width: '100%', 
        padding: 15, 
        borderRadius: 5,
        borderColor: props.valid ? '' : 'red'
      }}
      type={props.type}
      name={props.name}
      onChange={props.onChange}
      value={props.value} 
      placeholder={props.placeholder}
      ref={props.ref}
    />
  )
}

export default Input