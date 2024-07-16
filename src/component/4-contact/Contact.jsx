import React from 'react'
import "./contact.css"
import Lottie from 'lottie-react'
import contactAnimation from '../../Animation - 1699120637447.json'
export default function Contact() {
  return (
    <div>
      <section className='contact'>
        <h1 className='title'><span className='icon-envelope-o'>

        </span>Contact Us</h1>
        <p className='sub-title'>Please feel free to contact me at any time regarding any inquiries or opportunities.</p>



        <div className='flex' >
          <form>

            <div className='flex'>
              <label htmlFor='email'>Email adress</label>
              <input required type='email' id='email'></input>
            </div>

            <div className='flex' style={{ marginTop: '24px' }}>
              <label htmlFor='message'>your messgae</label>
              <textarea required id='message'></textarea>
            </div>
            <button className='submit'>Submit</button>
          </form>

          <div className='animation'>
            <Lottie className='canimation' loop={true} style={{ height: 350 }} animationData={contactAnimation} />
          </div>
        </div>
      </section>


    </div>




  )
}
