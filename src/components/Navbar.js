import React from 'react'
import Moment from 'moment'
import './navbar.css'

const Navbar = () => {
  const [time, setTime] = React.useState([])
  const data = new Date()
  React.useEffect(() => {
    setTimeout(() => {
      setTime(Moment(data).format('MMMM Do YYYY, h:mm:ss a'))
    }, 1000)
  })
  return (
    <>

      <h1 className='h1'>i am frilanser!!</h1>
      <p className='p'>{time}
      </p>

    </>
  )
}

export default Navbar;
