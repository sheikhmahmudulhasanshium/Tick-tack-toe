import React, { use, useState } from 'react'

export default function Grid()  {
    
    const[playerNo,setPlayerNo]=useState(1)
    const[countNo,setCountNo]=useState(0)
    const [initialValue,setInitialValue]=useState(' ')
    
    const [inputValue,setInputValue]=useState([
        {id:1,value:initialValue},
        {id:2,value:initialValue},
        {id:3,value:initialValue},
        {id:4,value:initialValue},
        {id:5,value:initialValue},
        {id:6,value:initialValue},
        {id:7,value:initialValue},
        {id:8,value:initialValue},
        {id:9,value:initialValue}      
        ])
    
    function changeValue(clickedIndex: number){
      //  
      //console.log(clickedIndex)
      // toggle X for player 1 toggle O for player 2
        if(initialValue===' ' ){
            if(playerNo===1){setInitialValue('X')}
            else{setInitialValue('O')}
        }
        else {
            if(playerNo===1){setInitialValue('X')}
            else{setInitialValue('O')}
            }
      //console.log(initialValue)
    /* basic
     setInputValue(inputValue.map((item)=>
      {return {
        
        ...item,
        value:initialValue}}))
            
        }*/
       // partially working
        inputValue.map((prevValue)=>{
            if(prevValue.id===clickedIndex){
                setInputValue(inputValue.map(()=>{return{...prevValue,value:initialValue}})
                    )
                
            }
        })
        //doesnt work 
        //inputValue.map((prevValue)=>(prevValue.id === clickedIndex) ? setInputValue( (inputValue.map((prevValue) => { return { ...prevValue,value:initialValue } }))) : setInputValue((inputValue.map((prevValue) => { return { ...prevValue } }))))
        
    }
    function gridClickHandler(){
       countNo===9? setCountNo(0):setCountNo(countNo+1)
       playerNo===1? setPlayerNo(2):setPlayerNo(1)
      
      
    }
    //grid-items
    const gridItems=inputValue.map((item)=>{
        return <div className=
        'flex items-center justify-center w-20 h-20 text-2xl font-extrabold bg-gray-300 from-neutral-700 dark: text-slate-400 dark:bg-slate-900 hover:bg-lime-500' 
        key={item.id} onClick={()=>changeValue(item.id)}>{item.value}</div>}
        )

  return (
    <div className='flex flex-col py-2 jusify-center'>
        {/*grid container*/}
        <div className='grid grid-cols-3 gap-1 p-2 ' onClick={gridClickHandler}>
            {gridItems}
        </div>
        {/**count and turn */}
        <div className='flex-col px-2 py-3 font-bold bg-gray-400 text-slate-900 dark:text-white dark:bg-slate-800'>
            <h3>Count: {countNo} </h3> 
            <h3>Turn: Player {playerNo} </h3> 
        </div>
    </div>
  )
}

