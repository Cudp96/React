import React from 'react'

const Button = (props) => {
  
  return (
    <>
    <button onClick={props.sumOfTwoNumber} >{props.name}</button>
    </>
  )
}

export default Button