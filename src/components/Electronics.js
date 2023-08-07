import React, { useEffect } from "react";
import Card from "./Card";


const Electronics = (props) => {
  useEffect(()=>{
    document.title=props.title
  },[props.title])
  return (
    <div>
      <div class="re">Results</div>
      <div class="clothes-main">
        <Card img={require('../images/ele.jpg')}/>
        <Card img={require('../images/ele.jpg')}/>
        <Card img={require('../images/ele.jpg')}/>
        <Card img={require('../images/ele.jpg')}/>
        <Card img={require('../images/ele.jpg')}/>
        <Card img={require('../images/ele.jpg')}/>
        <Card img={require('../images/ele.jpg')}/>
        <Card img={require('../images/ele.jpg')}/>
      </div>
    </div>
  )
}

export default Electronics
