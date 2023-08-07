import React from 'react'

const Box = (props) => {
  return (
    <div class="box1 box">
    <div class="box-content">
      <h2>{props.heading}</h2>
      <div class="box-img">
        <a href={props.href}><img src={props.image} alt="" /></a>
      </div>
      <a href={props.href}><p>See more</p></a>
    </div>
  </div>
  )
}

export default Box
