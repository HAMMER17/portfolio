import React from 'react'
import {
  BsFillCloudFill, BsFillCloudDrizzleFill, BsFillCloudLightningRainFill,
  BsFillCloudSleetFill, BsFillCloudSunFill, BsSnow
} from 'react-icons/bs'


const Icons = ({ data }) => {
  if ('Clouds' === data) {
    return <BsFillCloudFill size={50} />;
  } else if ('Rain' === data) {
    return <BsFillCloudDrizzleFill size={50} />;
  } else if ('Thunderstorm' === data) {
    return <BsFillCloudLightningRainFill size={50} />;
  } else if ('Clear' === data) {
    return <BsFillCloudSunFill size={50} />;
  } else if ('Drizzle' === data) {
    return <BsFillCloudSleetFill size={50} />;
  } else if ('Snow' === data) {
    return <BsSnow />;
  }
  console.log(data)
  return (
    <div>{data}</div>

  )
}

export default Icons
