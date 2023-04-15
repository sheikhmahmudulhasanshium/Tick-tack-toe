import { useTheme } from 'next-themes';
import React from 'react'
import { BsToggleOff, BsToggleOn } from 'react-icons/bs'
const Settings = () => {
  const { theme, setTheme } = useTheme();
 // const modeName=(theme==="light")?"Dark Mode":"Light Mode"
  const modeSymbol=(theme==="dark")?<BsToggleOn className='text-gray-800 bg-green-400'/>:<BsToggleOff className='bg-red-400 text-gray-00'/>
  
  const changeTheme = () => {
    
    setTheme(theme === "light" ? "dark" : "light");
    
   }
  return (
    <div className='flex items-center justify-center gap-12 text-xl font-bold '>
           <p>DarkMode</p> <div>{}</div>  <button onClick={changeTheme} className=''>{modeSymbol}</button>

    </div>
  )
}

export default Settings




/*import React from 'react'
import { useTheme } from "next-themes";
//import customSound from 'sounds/Click.mp3'
//console.log(customSound)
import {MdDarkMode,MdLightMode} from 'react-icons/md'

const Sidebar = () => {
  const { theme, setTheme } = useTheme();
  let modeName=(theme==="light")?"Dark Mode":"Light Mode"
  let modeSymbol=(theme==="light")?<MdDarkMode className='text-white'/>:<MdLightMode className='text-yellow-300'/>
  const changeTheme = () => {
    
   setTheme(theme === "light" ? "dark" : "light");
   
  }
  
  return (
    <div className='flex flex-col items-center justify-center'>
      
      <button onClick={changeTheme} className='flex items-center justify-center w-8/12 gap-3 px-5 py-2 my-2 text-black rounded-full bg-gradient-to-r from-slate-300 to-shiumcustom '>{modeName}{modeSymbol}</button>
      <button  className='w-8/12 px-5 py-2 my-2 text-black rounded-full bg-gradient-to-r from-slate-300 to-shiumcustom'>Toggle Sound</button>
      
    </div>
  )
}

export default Sidebar;
*/