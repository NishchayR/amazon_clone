import React from 'react'
import Box from './Box'


const Shop = () => {
  return (
    <div class="shop-section">
        <Box heading="Clothing" image={require('../images/box1_image.jpg')} href={'/clothes'}/>
        <Box heading="Health & Personal Care" image={require('../images/box2_image.jpg')} href={'/health'}/>
        <Box heading="Furniture" image={require('../images/box3_image.jpg')} href={'/furniture'}/>
        <Box heading="Electronics" image={require('../images/box4_image.jpg')} href={'/electronics'}/>
        <Box heading="Beauty picks" image={require('../images/box5_image.jpg')} href={'/beauty'}/>
        <Box heading="Pet Care" image={require('../images/box6_image.jpg')} href={'/clothes'}/>
        <Box heading="New Arrival in Toys" image={require('../images/box7_image.jpg')} href={'/clothes'}/>
        <Box heading="Discover Fashion Trends" image={require('../images/box8_image.jpg')} href={'/clothes'}/>
    </div>
  )
}

export default Shop
