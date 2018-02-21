import React from 'react'
import './box.css'

const Box = (props) => (
  <div className="box">
    {props.children}
  </div>
)

export default Box
