import React from 'react'
import { Link } from 'react-router-dom'
import { FaHome, FaRProject } from 'react-icons/fa'
import { BsFillPeopleFill, BsFillTelephoneFill, BsGithub, BsTwitter, BsFacebook } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'

import '../pages/style/contact.css'

const Contact = () => {

  return (
    <div className='contact' >
      <ul className='cont-item' >
        <li className='l' style={{ zIndex: 8 }}> <Link to={'/'}><span><FaHome /></span>home</Link></li>
        <li className='l' style={{ zIndex: 7 }}> <Link to={'/about'}><span><BsFillPeopleFill /></span>about</Link></li>
        <li className='l' style={{ zIndex: 6 }}> <Link to={'/contact'}><span><BsFillTelephoneFill /></span>contact</Link></li>
        <li className='l' style={{ zIndex: 5 }}> <Link to={'/project'}><span><FaRProject /></span>project</Link></li>
        <li className='l' style={{ zIndex: 4 }}> <Link to={'/'}><span><BsGithub /></span>githab</Link></li>
        <li className='l' style={{ zIndex: 3 }}> <Link to={'/'}><span><BsFacebook /></span>facebook</Link></li>
        <li className='l' style={{ zIndex: 2 }}> <Link to={'/'}><span><BsTwitter /></span>twitter</Link></li>
        <li className='l' style={{ zIndex: 1 }}> <Link to={'/'}><span><MdEmail /></span>email</Link></li>
      </ul>
      <p className='pp2'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo voluptates exercitationem voluptate id tempora obcaecati repellat! Dicta molestiae, officiis nulla, eligendi, exercitationem architecto ad magnam assumenda dolor incidunt quidem voluptas!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta reiciendis accusantium asperiores facere! Inventore, illo magni error, nemo pariatur corrupti consequuntur ex optio atque quisquam beatae odit minus iusto iure?
      </p>

      <ul className='cont-item' >
        <li className='l2' style={{ zIndex: 8 }}> <Link to={'/'}><span><FaHome /></span>home</Link></li>
        <li className='l2' style={{ zIndex: 7 }}> <Link to={'/about'}><span><BsFillPeopleFill /></span>about</Link></li>
        <li className='l2' style={{ zIndex: 6 }}> <Link to={'/contact'}><span><BsFillTelephoneFill /></span>contact</Link></li>
        <li className='l2' style={{ zIndex: 5 }}> <Link to={'/project'}><span><FaRProject /></span>project</Link></li>
        <li className='l2' style={{ zIndex: 4 }}> <Link to={'/'}><span><BsGithub /></span>githab</Link></li>
        <li className='l2' style={{ zIndex: 3 }}> <Link to={'/'}><span><BsFacebook /></span>facebook</Link></li>
        <li className='l2' style={{ zIndex: 2 }}> <Link to={'/'}><span><BsTwitter /></span>twitter</Link></li>
        <li className='l2' style={{ zIndex: 1 }}> <Link to={'/'}><span><MdEmail /></span>email</Link></li>
      </ul>
    </div >
  )
}

export default Contact
