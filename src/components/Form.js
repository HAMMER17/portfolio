import React from 'react';
import emailjs from '@emailjs/browser';
import './form.css'

const Form = () => {
  const form = React.useRef();

  const handleSubmit = (e) => {
    e.preventDefault()

    const SERVIS_ID = "service_zpzvph7";
    const TEMPLATE_ID = "template_utrs61f";
    const USER_ID = "b8fj2rufkTNGBRXe3";

    emailjs.sendForm(SERVIS_ID, TEMPLATE_ID, form.current, USER_ID)
      .then((result) => {
        console.log(result.text);
        console.log('sms send')
      }, (error) => {
        console.log(error.text);
      });
  }
  return (
    <div className='form'>
      <form action="" className='left' ref={form} onSubmit={handleSubmit}>
        <label htmlFor="">Name</label>
        <input type="text" className='input' name='name' />

        <label htmlFor="email">Email</label>
        <input type="email" className='input' name='email' />

        <label htmlFor="phone">Phone</label>
        <input type="text" className='input' name='phone' />

        <label htmlFor="message">Message</label>
        <input type="text" name="message" placeholder='text...'
          className='input'></input>
        <button className='button' type='submit'>send</button>
      </form>
      <hr />
      <div className='right'>
        <div className='img'>
          <div className='img2'></div>
        </div>
        {/* <img src="../images/f.jpg" alt="lagyshka" className='img' /> */}
        <p className='p1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel molestiae ut eaque molestias nam pariatur, placeat eveniet fugiat esse voluptates quae suscipit veritatis autem? Quasi aliquam debitis velit assumenda doloremque.</p>
      </div>
    </div>
  )
}

export default Form;
