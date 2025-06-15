import React from 'react'
import "./Contact.css"
const Contact = () => {
  return (
    <div className='contact'>
        <form action="https://formspree.io/f/mdkzzkll" method="POST">
            <input type="text" placeholder='Enter Tour Name' name='username' required />
            <input type="text" placeholder='Email' name='email' required />
            <textarea name="message" placeholder='Message' required ></textarea>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Contact