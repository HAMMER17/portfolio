import axios from 'axios'
import React from 'react'
import Icons from './Icons'
// import { RotatingLines } from 'react-loader-spinner'
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


const API_URL = 'a8a235869a69d9b215946bc2f20c0681'
const Weather = () => {
  const [city, setCity] = React.useState(null)
  const [temp, setTemp] = React.useState(null)
  const [description, setDescription] = React.useState(null)
  const [main, setMain] = React.useState(null)

  React.useEffect(() => {
    let api = `https://api.openweathermap.org/data/2.5/weather?lat=${59.44}&lon=${32.00}&appid=${API_URL}&units=metric`
    axios.get(api)
      .then(res => {
        setCity(res.data.name)
        setTemp(res.data.main.temp)
        setDescription(res.data.weather[0].description)
        setMain(res.data.weather[0].main)
      })
      .catch(error => console.log(error))
  }, [])

  return (
    <>

      <h5>Weather today</h5>
      <hr />
      <div>{city}</div>
      <Icons data={main} />
      <div>{Math.round(temp)} °c</div>
      <div>{description}

      </div>
    </>
  )
}

export default Weather;
