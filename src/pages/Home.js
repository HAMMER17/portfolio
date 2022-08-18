import React from 'react'
import { Link } from 'react-router-dom'
import Form from '../components/Form'
import Footer from '../components/Footer'
import '../components/navbar.css'
import '../components/footer.css'
import './style/home.css'
import Navbar from '../components/Navbar'

const Home = () => {
  const [color, setColor] = React.useState('thema' ? 'dark' : 'light')
  const addThema = () => {
    const newThema = color === 'light' ? 'dark' : 'light';
    setColor(newThema)
  }
  return (
    <>
      <div className='app' thema={color}>
        <div className='navbar' >
          <div className='nav-item'>
            <h3 className='h3'><Link to={'/portfolio'}>PORTFOLIO</Link></h3>
            <ul className='nav-ul'>
              <li className='li'> <Link to={'/'}>home</Link></li>
              <li className='li'> <Link to={'/about'}>about</Link></li>
              <li className='li'> <Link to={'/contact'}>contact</Link></li>
              <li className='li'> <Link to={'/project'}>project</Link></li>
            </ul>
            <button onClick={addThema} className='button'>{color}</button>
          </div>
        </div>
        <Navbar />
        <Form />
        <Footer />
      </div>
    </>
  )
}

export default Home
