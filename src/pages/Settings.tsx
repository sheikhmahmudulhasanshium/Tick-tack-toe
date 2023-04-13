import React from 'react'
import { useTheme } from "next-themes";
//import customSound from 'sounds/Click.mp3'
//console.log(customSound)

const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    
   setTheme(theme === "light" ? "dark" : "light");
  }
  
  return (
    <div className='flex flex-col items-center justify-center'>
      
      <button onClick={changeTheme} className='w-8/12 px-5 py-2 my-2 text-black rounded-full bg-gradient-to-r from-slate-300 to-shiumcustom'>Toogle UI</button>
      <button  className='w-8/12 px-5 py-2 my-2 text-black rounded-full bg-gradient-to-r from-slate-300 to-shiumcustom'>Toggle Sound</button>
      
    </div>
  )
}

export default Sidebar;
