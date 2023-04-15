import { useTheme } from 'next-themes';
import React, { useState } from 'react'
import { FaToggleOff, FaToggleOn } from 'react-icons/fa'
import useSound from 'use-sound';

const Settings = () => {
  const { theme, setTheme } = useTheme();
  const modeSymbol=(theme==="dark")?<FaToggleOn className='text-3xl text-gray-800 bg-gray-600'/>:<FaToggleOff className='text-3xl text-gray-800 '/>
  const [sound,setSound]=useState("on");
  const soundModeSymbol=(sound==="on")?<FaToggleOn className='text-3xl text-gray-800'/>:<FaToggleOff className='text-3xl text-gray-800 '/>
  const [music,setMusic]=useState("on");
  const musicModeSymbol=(music==="on")?<FaToggleOn className='text-3xl text-gray-800'/>:<FaToggleOff className='text-3xl text-gray-800 '/>
  
  const changeTheme = () => {
    
    setTheme(theme === "dark" ? "light" : "dark");
    
   }
  function toggleSoundButton(){
    setSound(sound==="on"? "off":"on")
    
  }
  function toggleMusicButton(){
    setMusic(music==="on"?"off":"on")
  }
  return (
    <div className='p-5 dark:text-white '>
      <div className='flex items-center justify-between gap-12 px-6 py-2 text-xl font-bold hover:text-green-500'>
            <p>Dark Mode</p>  <button onClick={changeTheme} className=''>{modeSymbol}</button>      
      </div>
      <div className='flex items-center justify-between gap-12 px-6 py-2 text-xl font-bold hover:text-green-500'>
            <p>Music</p>  <button onClick={toggleSoundButton} className=''>{soundModeSymbol}</button>      
      </div>
      <div className='flex items-center justify-between gap-12 px-6 py-2 text-xl font-bold hover:text-green-500'>
            <p>Sound</p>  <button onClick={toggleMusicButton} className=''>{musicModeSymbol}</button>      
      </div>
    </div>
  )
}

export default Settings



