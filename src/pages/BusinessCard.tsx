import React from 'react'
import {AiFillGithub,AiFillLinkedin,AiFillFacebook} from 'react-icons/ai'
import {GoLocation} from 'react-icons/go'
import {GiTie} from 'react-icons/gi'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeInUp } from '../../animations'
import { useTheme } from "next-themes";
import useSound from 'use-sound';
//import customSound from 'sounds/Click.mp3'
//console.log(customSound)

const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    
   setTheme(theme === "light" ? "dark" : "light");
   clicked()
  }
  const [clicked] = useSound('sounds/Click.mp3',{volume:1}) 
  
  return (
    <div className='flex flex-col items-center justify-center'>
    < div  className='flex flex-col items-center justify-center mb-4 overflow-y-auto bg-gray-400 rounded-lg dark:bg-gray-300' >
      <Image src="https://media.licdn.com/dms/image/D5603AQFj6n7Sn2GwEQ/profile-displayphoto-shrink_800_800/0/1675445160674?e=1684368000&v=beta&t=nEQiCGYmbxDyYcIpO1LhSxqTUnd8TTOAvld2zWB2Ku4" 
      className='py-2 mx-auto rounded-full' height='228' width='228' layout='intrinsic' quality='100'
      alt="Profile-Pic"/>
      <div className='mx-5 '>
      <motion.h3 initial={{rotate:30, scale: 0 }} animate={{ rotate: 0, scale: 1 }}
  transition={{
    type: "spring",
    stiffness: 260,
    damping: 20
  }}
       className=' flex items-center justify-center  my-4 text-1.5xl font-medium tracking-wider font-kaushan gap-x-2 dark:text-white'>
        <span className=' text-shiumcustom'>
          SHEIKH MAHMUDUL</span>   HASAN SHIUM 
          </motion.h3>
      <motion.p variants={fadeInUp} initial="initial" animate="animate"
      className='flex items-center justify-center px-5 py-1 my-3 rounded-full bg-shiumcustom dark:text-white'>Front-End Development Learner</motion.p>
      
      <motion.a variants={fadeInUp} initial="initial" animate="animate"
      
        href='/assets/Corrected_cv.pdf' className='flex items-center justify-center px-2 py-2 my-3 rounded-full bg-shiumcustom dark:text-white' download='CV-Of-Sheikh-Mahmudul-Hasan-Shium' target='_blank'><div className='w-5 h-5'><GiTie /></div>Download Resume</motion.a>
        </div>
      {/*Social Media*/}
      <div className='flex justify-around w-8/12 mx-auto my-5 text-shiumcustom dark:text-white md:w-full'>
        <a href="https://github.com/sheikhmahmudulhasanshium" target={'_blank'}><AiFillGithub className='cursor-pointer h-25 w-25'/></a>
        <a href="https://www.linkedin.com/in/sheikh-mahmudul-hasan-shium-5b5938189/" target={'_blank'}><AiFillLinkedin className="cursor-pointer h-25 w-25"/></a>
        <a href="https://www.facebook.com/skmahmudul.hasanshium" target={'_blank'}><AiFillFacebook className='cursor-pointer h-25 w-25' /></a>
      </div>
      {/*address*/}
      <div className='py-4 my-5 bg-shiumcustom dark:text-white'style={{marginLeft:'-0.01rem',marginRight:'-0.01rem'}}>
        <div className='flex items-center justify-center space-x-2 dark:text-white'><GoLocation/>
             <span>Dhaka, Bangladesh</span>   
        </div>
        <p className='flex items-center justify-center my-2 md:text-base sm:text-sm md:px-3'>sheikh.mahmudul.hasan.shium.aiub@gmail.com</p>
        <p className='flex items-center justify-center my-2'>01729771453 / 01622937429</p>
      </div>
      <button className='w-8/12 py-2 mx-5 my-2 text-black rounded-full dark:text-white bg-gradient-to-r from-slate-300 to-shiumcustom focus:outline-none'
       
       onClick={()=>window.open('mailto:sheikh.mamhmudul.hasan.shium.aiub@gmail.com')
      }>Email</button>
      <div className='flex flex-col justify-center py-2 pb-2 dark:text-black' >
        <h4>Click/Scan QR for More Info:</h4> 
        <a href="https://shium-portfolio.vercel.app/"><Image src="/images/QR-Code.png" alt="https://shium-portfolio.vercel.app/ " height='200' width='200' quality={100}  /></a>
        
      </div>
    </div>
    </div>
  )
}

export default Sidebar;
