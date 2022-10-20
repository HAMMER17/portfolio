import React from 'react'
import { Link } from 'react-router-dom'
import Weather from '../components/Weather'
import Calculator from './Calculator'
import './style/project.css'

const Project = () => {

  return (
    <div className='project'>
      <ul className='nav-ul'>
        <li className='li'> <Link to={'/'}>home</Link></li>
        <li className='li'> <Link to={'/about'}>about</Link></li>
        <li className='li'> <Link to={'/contact'}>contact</Link></li>
        <li className='li'> <Link to={'/project'}>project</Link></li>
      </ul>
      <div className="cube-nav">
        <ul className='cube'>
          <li className='hello' >githab</li>
          <li className='hello1' >contact</li>
          <li className='hello'>email</li>
        </ul>
      </div>
      <div className='p3'><Weather /></div>
      <div className='p2'>
        <Calculator />
      </div>
    </div>
  )
}

export default Project
