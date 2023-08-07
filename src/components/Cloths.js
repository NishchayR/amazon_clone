import React, { useEffect } from "react";
import Card from "./Card";

const Cloths = (props) => {

  useEffect(()=>{
    document.title=props.title
  },[props.title])

  return (
    <div>
      <div class="re">Results</div>
      <div class="clothes-main">
        <Card img={require('../images/tee.jpg')}/>
        <Card img={require('../images/tee.jpg')}/>
        <Card img={require('../images/tee.jpg')}/>
        <Card img={require('../images/tee.jpg')}/>
        <Card img={require('../images/tee.jpg')}/>
        <Card img={require('../images/tee.jpg')}/>
        <Card img={require('../images/tee.jpg')}/>
        <Card img={require('../images/tee.jpg')}/>
      </div>
    </div>
  );
};

export default Cloths;
