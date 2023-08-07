import React, { useEffect } from "react";
import Card from "./Card";


const Furniture = (props) => {
  useEffect(()=>{
    document.title=props.title
  },[props.title])
  return (
    <div>
      <div class="re">Results</div>
      <div class="clothes-main">
        <Card img={require('../images/fur.jpg')}/>
        <Card img={require('../images/fur.jpg')}/>
        <Card img={require('../images/fur.jpg')}/>
        <Card img={require('../images/fur.jpg')}/>
        <Card img={require('../images/fur.jpg')}/>
        <Card img={require('../images/fur.jpg')}/>
        <Card img={require('../images/fur.jpg')}/>
        <Card img={require('../images/fur.jpg')}/>
      </div>
    </div>
  )
}

export default Furniture
