import React, { useEffect } from "react";
import Card from "./Card";


const Health = (props) => {
  useEffect(()=>{
    document.title=props.title
  },[props.title])
  return (
    <div>
      <div class="re">Results</div>
      <div class="clothes-main">
        <Card img={require('../images/hel.jpg')}/>
        <Card img={require('../images/hel.jpg')}/>
        <Card img={require('../images/hel.jpg')}/>
        <Card img={require('../images/hel.jpg')}/>
        <Card img={require('../images/hel.jpg')}/>
        <Card img={require('../images/hel.jpg')}/>
        <Card img={require('../images/hel.jpg')}/>
        <Card img={require('../images/hel.jpg')}/>
      </div>
    </div>
  )
}

export default Health
