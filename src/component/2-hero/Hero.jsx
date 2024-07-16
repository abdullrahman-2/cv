import React from 'react'
import './hero.css'
import Lottie from 'lottie-react'
import deva from '../../Animation2 - 1699122201206.json'
import { color, motion } from "framer-motion"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitterSquare, faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


export default function hero() {
  return (
    <section className='hero flex'>
        <div className='rightSec animation'>
        <Lottie className='canimation' loop={true} style={{height:350,width:500}}  animationData={deva} />

        </div>
        <div className='lefttSec '>
        
        <div className='parent-avatar flex'>
          <motion.img
          initial={{scale:0}}
          animate={{scale:1}}
          transition={{duration:0.5}}
           src='personal.png' className='avatar'/>
          <div className='icon-verified'></div> 
          </div>
          <motion.h1
          initial={{opacity:0,scale:0.5}}
          animate={{opacity:1,scale:1}}
          transition={{duration:2}}
          
         id='about'  className='title'>Eng Abdulrahman</motion.h1>

<motion.h1
          initial={{opacity:0,scale:0.5}}
          animate={{opacity:1,scale:1}}
          transition={{duration:2}}
          
           className='title'>sowftware designer</motion.h1>
          <p className='subTitle'>Experienced Front-End Developer with a passion for crafting engaging user experiences. Possess strong skills in HTML, CSS,React JS, and JavaScript </p>
         

          <div className='icons flex'>
  <a href='https://x.com/AbdoMoh29929565?t=ILJsTXtE-ouJi-PLHXdq1A&s=09'>
    <FontAwesomeIcon icon={faTwitterSquare} className='icon icon-twitter-square' />
  </a>
  <a href='https://www.instagram.com/'>
    <FontAwesomeIcon icon={faInstagram} className='icon icon-instagram' />
  </a>
  <a href='https://github.com/abdullrahman-2?tab=repositories'>
    <FontAwesomeIcon icon={faGithub} className='icon icon-github' />
  </a>
  <a href='https://www.linkedin.com/in/abdelrahman-mohamed-361b36311/'>
    <FontAwesomeIcon  icon={ faLinkedin } className='icon icon-linkedin-square' />
  </a>
</div>
       

        </div>

    
   </section>

  )
}
