import React from 'react'
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { BsPeopleFill, BsEnvelopeOpenFill, BsFillTelephonePlusFill } from 'react-icons/bs'
import './style/portfolio.css'
import cat from '../img/cat.jpg';

const Portfolio = () => {
  return (
    <div className='container'>
      <div className='box1'>
        <span className='span'></span>
        <div className='box-cont'>
          <h2>card</h2>
          <img src={cat} width={100} style={{ borderRadius: 50, boxShadow: '0 0 35px black' }} alt="" />
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

          <Link to={'/'}><span className='span2'>
            <FaHome className='icon' />Home</span></Link>
        </div>
      </div>
      <div className='box1'>
        <span className='span'></span>
        <div className='box-cont'>
          <h2>card</h2>
          <img src={cat} width={100} style={{ borderRadius: 50, boxShadow: '0 0 35px black' }} alt="" />
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          <Link to={'/about'}><span className='span2'>
            <BsPeopleFill className='icon' />About</span></Link>
        </div>
      </div>
      <div className='box1'>
        <span className='span'></span>
        <div className='box-cont'>
          <h2>card</h2>
          <img src={cat} width={100} style={{ borderRadius: 50, boxShadow: '0 0 35px black' }} alt="" />
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          <Link to={'/contact'}><span className='span2'>
            <BsFillTelephonePlusFill className='icon' />
            Contact</span></Link>
        </div>
      </div>
      <div className='box1'>
        <span className='span'></span>
        <div className='box-cont'>
          <h2>card</h2>
          <img src={cat} width={100} style={{ borderRadius: 50, boxShadow: '0 0 35px black' }} alt="" />
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          <Link to={'/project'}><span className='span2'>
            <BsEnvelopeOpenFill className='icon' />
            Project</span></Link>
        </div>
      </div>

    </div>
  )
}

export default Portfolio
