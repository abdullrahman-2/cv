import React, { useState,useEffect } from 'react'
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes,faBars,faMoon } from '@fortawesome/free-solid-svg-icons';
export default function Header() {
  const [showModel ,setShowModel] = useState(false);
  const [theme,setthe] = useState('dark');
  useEffect(() => {

    if(theme==='light'){
      document.body.classList.remove('dark');
      
      document.body.classList.add('light');

    }else{ document.body.classList.remove('light');
    document.body.classList.add('dark');}
    
  }, [theme])
  
  return (
    
    <header className='flex'>
<button onClick={() => { setShowModel(true) }} className='meno flex icon-menu'>
  <FontAwesomeIcon icon={faBars} />
</button>
    <div></div>
    <nav >
   <ul className='flex'>
    <li><a href='#about'>About</a></li>
    <li><a href='#'>Articles</a></li>
    <li><a href='#hero'>projects</a></li>
    <li><a href='tel:01019295714'>Speaking</a></li>
    <li><a href='#contact'>Contact</a></li>
   </ul>
  
    </nav>  
<button onClick={()=>{
  localStorage.setItem('cuurent',theme==='light'?'dark':'light')

  setthe(localStorage.getItem("cuurent"))
  

}} className='men flex' >
  {/* <span className='icon-moon-o'></span>  */}
 <FontAwesomeIcon icon={faMoon} /></button>


{showModel &&(<div className='fixed'>
 
 <ul className='model'>
 <li>
  <button className='icon-cross' onClick={() => { setShowModel(false) }}>
    <FontAwesomeIcon icon={faTimes} />
  </button>
</li>
     <li><a href='#about'>About</a></li>
    <li><a href='#'>Articles</a></li>
    <li><a href='#hero'>projects</a></li>
    <li><a href='tel:01019295714'>Speaking</a></li>
    <li><a href='#contact'>Contact</a></li>
   </ul>
  



</div>)}
    </header>
  )
}
