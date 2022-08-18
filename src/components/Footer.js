import React from 'react';
import './footer.css';
import { BsGithub, BsFillTelephoneFill } from 'react-icons/bs';
import { AiTwotoneMail } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='footer'>
      <h3>githab
        <BsGithub className="footer-item" />
        <span>https://github.com/HAMMER17</span>
      </h3>
      <h3>email
        <AiTwotoneMail className="footer-item" />
        <span>plutalov70@mail.ru</span>
      </h3>
      <h3>phone
        <BsFillTelephoneFill className="footer-item" />
        <span>8 900 123 456 789</span>
      </h3>
    </div>
  )
}

export default Footer
