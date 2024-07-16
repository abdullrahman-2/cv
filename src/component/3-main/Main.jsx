import React, { useState } from 'react'
import './main.css'

import { AnimatePresence, motion, spring } from "framer-motion"


const myproject = [
  {protitle:'disney project',categoty:['css','js','html'],imgPath:'project4.png',link:'https://abdullrahman-2.github.io/disney/'},
  {protitle:'Electro-ecommerce',categoty:['css','js','html','react'],imgPath:'project15.png',link:'https://electro-ecommerce-2.netlify.app/'},
  {protitle:'Institute-of-Technology',categoty:['css','js','html'],imgPath:'project14.png',link:'https://abdullrahman-2.github.io/Institute-of-Technology/'},
  {protitle:'crud-Ecommerce',categoty:['css','js','html','react'],imgPath:'project13.png',link:'https://crud-ecommerece.surge.sh/'},
  {protitle:'Ecommerce-courses',categoty:['css','js','html'],imgPath:'project11.png',link:'https://abdullrahman-2.github.io/ecommerce-courses/'},
  {protitle:'Furn-ecommerce',categoty:['css','js','html'],imgPath:'project12.png',link:'https://abdullrahman-2.github.io/furn-ecommerce/'},
  {protitle:'email project',categoty:['css','js','html'],imgPath:'img1.png',link:'https://abdullrahman-2.github.io/Email/'},
  {protitle:'calculator project',categoty:['css','js','html'],imgPath:'project8.png',link:'https://abdullrahman-2.github.io/Calculator-OOP-/'},
  {protitle:'react world project',categoty:['css','react','html'],imgPath:'project10.png',link:'https://abdullrahman-2.github.io/myworld2/'},
  {protitle:'study project',categoty:['css','js','html'],imgPath:'project2.png',link:'https://abdullrahman-2.github.io/fekra2/'},
  {protitle:'landing project',categoty:['css','html','js'],imgPath:'project3.png',link:'https://abdullrahman-2.github.io/landingPage-2-/'},
  {protitle:'pricing project',categoty:['css','html'],imgPath:'project5.png',link:'https://abdullrahman-2.github.io/pricing/'},
  {protitle:'date calculator project',categoty:['css','js','html'],imgPath:'project7.png',link:'https://abdullrahman-2.github.io/date-calc/'},

  {protitle:'animation login project',categoty:['css','js','html'],imgPath:'project6.png',link:'https://abdullrahman-2.github.io/Animated-Login/'},
 
]

export default function Main() {
  const [current,setcurrent] = useState('all');
  const [arr,setarr] = useState(myproject);
  return (
    <main className='flex' >
      


      <div id='hero' className='left-sec flex'>
        <button onClick={()=>{
          setcurrent('all');
          setarr(myproject)
        }} className={current==='all'?'active':null}>all-project</button>
       
       
        <button onClick={()=>{
           setcurrent('css')

           const newarr =myproject.filter((item)=>{
            const secarr =item.categoty.filter((myitem)=>{
              return myitem ==='css'
            })

             return secarr[0] ==='css';
             
           })
           setarr(newarr)

        }} className={current==='css'?'active':null}>Html and css</button>



<button onClick={()=>{
           setcurrent('js')

           const newarr =myproject.filter((item)=>{
            const secarr =item.categoty.filter((myitem)=>{
              return myitem ==='js'
            })

             return secarr[0] ==='js';
             
           })
           setarr(newarr)

        }} className={current==='js'?'active':null}>javasctipt</button>

<button onClick={()=>{
           setcurrent('react')

           const newarr =myproject.filter((item)=>{
            const secarr =item.categoty.filter((myitem)=>{
              return myitem ==='react'
            })

             return secarr[0] ==='react';
             
           })
           setarr(newarr)

        }} className={current==='react'?'active':null}>react</button>


        
      </div>

      <div className='right-sec flex'>
      <AnimatePresence>



      {arr.map((item) =>{
        return(
          <>
          <motion.article
             style={{ overflow: "hidden" }}
             
              layout
              initial={{ transform: "scale(0)" }}
              animate={{ transform: "scale(1)" }}
              transition={{type:'spring',damping:4}}
              exit={{ transform: "scale(0)" }}
          
          
          
         onClick={ ()=>{window.location.href = item.link} }  key={item.imgPath} className='card'>
        <img  width={266} height={266} src={item.imgPath}/>
        <div style={{width: '266px'}} className='box'>
          <h1 className='title'>{item.protitle}</h1>
          <p className='sub-title'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis magnam mollitia, voluptatibus, minima inventore, quam reprehenderit sapiente consequuntur qui consequatur molestias adipisci omnis cupiditate perferendis est ad ipsam obcaecati quo.</p>
       <div className='flex icons'>
       <div style={{gap:'11px'}} className='flex'>
        <div  className='icon-link'></div>

        <div className='icon-github'></div>
        </div>
        
       </div>
        </div>
      </motion.article>
          </>
        )

      })}

      </AnimatePresence>
      </div>
    </main>
  )
}
