import React from 'react'
import Grid from '../../components/Grid'
import { motion } from 'framer-motion'
import { Stagger, fadeInUp, routeFading } from '../../animations'
import GridFooter from '../../components/GridFooter'
import ScoreBoard from '../../components/ScoreBoard'
import Image from 'next/image'
export default function index()  {
  return (
    <motion.div variants={routeFading} initial="initial" animate="animate" exit="exit">
    <motion.div variants={Stagger} initial="initial" animate="animate"
    className='flex flex-col flex-grow px-6 pt-1 my-6 bg-slate-100 dark:bg-slate-500 dark:text-white ' >
      <div className='flex justify-center gap-2 my-3 text-2xl font-kaushan '>
       <h1>Tick-Tack-Toe</h1>
       <Image src="/images/logo-shium.png"  alt='profile-pic' quality={100} width={35} height={35}/> 
      </div>
      <div className='flex-grow p-4 mt-5 bg-shiumcustom dark:bg-slate-800' style={{marginLeft:'-1.5rem',marginRight:'-1.5rem'}}>
       <ScoreBoard/>
       
      <div className='flex justify-center my-2 bg-stone-600 rounded-2xl'>
        
        <Grid />
      </div>
      <GridFooter/>
    </div>
  </motion.div>
  </motion.div>
  )
}
//export default index
