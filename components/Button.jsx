import React from 'react'

const Button = ({btnText,className}) => {
  return (
    <div className="bg-primary p-1.25 cursor-pointer">
        <button className={`cursor-pointer font-jost text-lg font-medium text-white bg-primary py-5.25 px-9.75 border border-white ${className}`}>{btnText}</button>
    </div>
  )
}

export default Button