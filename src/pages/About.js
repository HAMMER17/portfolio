import React from 'react'
import { Link } from 'react-router-dom'
import { IoHome, IoHelp } from 'react-icons/io5'
import { MdMessage, MdSettingsBluetooth } from 'react-icons/md'
import { BsPeopleFill, BsEnvelopeOpenFill, BsFillTelephonePlusFill, BsArrowRightSquareFill } from 'react-icons/bs'
import { SiProtondb } from 'react-icons/si'
import { FaTimes } from 'react-icons/fa'
import anime from '../img/video1.mp4'
import './style/about.css'

const About = () => {
  const [nav, setNav] = React.useState(false)
  const addNav = () => setNav(!nav)

  const [hour, setHour] = React.useState()
  const [min, setMin] = React.useState()
  const [sec, setSec] = React.useState()

  const Timer = () => {
    const data = new Date()
    const hh = data.getHours()
    const mm = data.getMinutes()
    const ss = data.getSeconds()
    if (hh < 10) setHour('0' + hh)
    else setHour(hh);
    if (mm < 10) setMin('0' + mm)
    else setMin(mm);
    if (ss < 10) setSec('0' + ss)
    else setSec(ss)
  }
  React.useEffect(() => {
    setInterval(Timer, 1000)
  })
  return (
    <div className="body">
      <div className={nav ? 'navigation2' : 'navigation2 active'} >
        <div className='times'>{nav ? <BsArrowRightSquareFill onClick={addNav} /> : <FaTimes onClick={addNav} />}</div>
        <ul className='ul-nav'>
          <li className='list active'> <Link to={'/'}>
            <span className='icon2'><IoHome /></span>
            <span className='title'>Home</span>
          </Link></li>
          <li className='list'> <Link to={'/about'}>
            <span className='icon2'><BsPeopleFill /></span>
            <span className='title'>About</span>
          </Link></li>
          <li className='list'> <Link to={'/contact'}>
            <span className='icon2'><BsEnvelopeOpenFill /></span>
            <span className='title'>Contact</span>
          </Link></li>
          <li className='list'> <Link to={'/project'}>
            <span className='icon2'><SiProtondb /></span>
            <span className='title'>Project</span>
          </Link></li>
          <li className='list'> <Link to={'/'}>
            <span className='icon2'><MdMessage /></span>
            <span className='title'>Message</span>
          </Link></li>
          <li className='list'> <Link to={'/phone'}>
            <span className='icon2'><BsFillTelephonePlusFill /></span>
            <span className='title'>Phone</span>
          </Link></li>
          <li className='list'> <Link to={'/'}>
            <span className='icon2'><IoHelp /></span>
            <span className='title'>Help</span>
          </Link></li>
          <li className='list'> <Link to={'/'}>
            <span className='icon2'><MdSettingsBluetooth /></span>
            <span className='title'>Setting</span>
          </Link></li>
        </ul>
      </div>
      <div className="clock">
        <div className="hours">{hour}<span> : </span>
        </div>
        <div className="mins">{min}<span> : </span>
        </div>
        <div className="secs">{sec}
        </div>
      </div>
      <div className="box3">
        <div>
          <span ><video autoPlay src={anime} /></span>
          <span ><video autoPlay src={anime} /></span>
          <span ><video autoPlay src={anime} /></span>
        </div>
      </div>

    </div>
  )
}

export default About
