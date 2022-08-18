import React from 'react'
import { Link } from 'react-router-dom'
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
      <p className='p3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nobis repellat alias? Fuga eum vel vitae unde! Inventore cupiditate nemo magni eveniet aliquam, sapiente, dignissimos eum consectetur quaerat culpa reprehenderit.</p>
      <p className='p2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, perferendis exercitationem optio velit libero dolorem repudiandae molestias. Eius consectetur voluptatibus debitis dignissimos voluptate atque odit quo soluta, iure dolore libero?
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam voluptatum fugit ipsum vitae ipsa quisquam maiores sunt possimus at repellendus. Dolorum earum eaque iste ipsam accusantium exercitationem voluptas a excepturi.</p>
    </div>
  )
}

export default Project
