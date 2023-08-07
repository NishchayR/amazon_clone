import React, { useEffect } from "react";
import Card from "./Card";


const Beauty = (props) => {
  useEffect(()=>{
    document.title=props.title
  },[props.title])
  return (
    <div>
         <div class="re">Results</div>
      <div class="clothes-main">
        <Card img={require('../images/bea.jpg')}/>
        <Card img={require('../images/bea.jpg')}/>
        <Card img={require('../images/bea.jpg')}/>
        <Card img={require('../images/bea.jpg')}/>
        <Card img={require('../images/bea.jpg')}/>
        <Card img={require('../images/bea.jpg')}/>
        <Card img={require('../images/bea.jpg')}/>
        <Card img={require('../images/bea.jpg')}/>
      </div>
    </div>
  )
}

export default Beauty
