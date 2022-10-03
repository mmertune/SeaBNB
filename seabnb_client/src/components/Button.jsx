import React from 'react'
import "../assets/css/Button.css"

const Button = ({title, styleName}) => {
  return (
    <button className={"button " + (styleName ? styleName : "")}>
        {title}
    </button>
  )
}

export default Button