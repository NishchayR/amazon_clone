import React from 'react'

const Card = (props) => {
  return (
    <div class="clothes-page">
    <img src={props.img} alt="" />
    <p><b>BULLMER</b></p>
    <p>Mens Cotton Henley Neck/Chinese Collar Tshirt</p>
    <div class="star" style={{color: "orange"}}>
      <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i
      ><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i
      ><i class="fa-solid fa-star"></i>
    </div>
    <br />
    <div class="ru">
      <i
        class="fa-solid fa-indian-rupee-sign"
        style={{fontSize: "12px", marginTop: "5px"}}
      ></i>
      <div class="all">
        <div class="rupee" style={{marginRight: "10px"}}>345</div>
        M.R.P:
        <div class="dis" style={{marginLeft: "5px", marginRight: "10px"}}>
          999
        </div>
        <div style={{fontSize: "20px"}}>(65% off)</div>
      </div>
    </div>

    <br />
    FREE Delivery by Amazon
  </div>
  )
}

export default Card
