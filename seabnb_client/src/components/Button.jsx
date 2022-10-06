import React from 'react'
import "../assets/css/Button.css"

const Button = ({title, styleName, onClickFunction}) => {
  return (
    <button className={"button " + (styleName ? styleName : "")} onClick={onClickFunction}>
        {title}
    </button>
  )
}

export default Button