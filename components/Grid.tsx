import React, { useState } from 'react'

export default function Grid()  {
    
    const[playerNo,setPlayerNo]=useState(1)
    const[countNo,setCountNo]=useState(0)
    const [inputValue,setInputValue]=useState([' ',' ',' ',' ',' ',' ',' ',' ',' '])
    let [winner,setWinner]=useState(' ')
    function gameLogic()
    {
        if(countNo>=4 && countNo<=9){
           //Check colum wise values
            //col-1
            if(inputValue[0]===inputValue[3] && inputValue[6]===inputValue[3] ){
                (inputValue[3]==="X")?setWinner("Player 1"):setWinner("Player 2")
            }
            //col-2
            else if(inputValue[1]===inputValue[4] && inputValue[4]===inputValue[7]){
                (inputValue[4]==="X")?setWinner("Player 1"):setWinner("Player 2")
            }
            //col-3
            else if(inputValue[2]===inputValue[5] && inputValue[5]===inputValue[8]){
                (inputValue[5]==="X")?setWinner("Player 1"):setWinner("Player 2")
            }
            else{
                //Check row wise values
                    if(inputValue[0]===inputValue[1] && inputValue[1]===inputValue[2]){
                        (inputValue[1]==="X")?setWinner("Player 1"):setWinner("Player 2")
                    }
                    //row-2
                    else if(inputValue[3]===inputValue[4] && inputValue[4]===inputValue[5]){
                        (inputValue[4]==="X")?setWinner("Player 1"):setWinner("Player 2")
                    }
                    //row-3
                    else if(inputValue[6]===inputValue[7] && inputValue[7]===inputValue[8]){
                        (inputValue[7]==="X")?setWinner("Player 1"):setWinner("Player 2")
                    }
                    else{
                        //check diagonal values
                        if(inputValue[0]===inputValue[4] && inputValue[4]===inputValue[8]){
                            (inputValue[4]==="X")?setWinner("Player 1"):setWinner("Player 2")
                        }
                        else if(inputValue[2]===inputValue[4] && inputValue[4]===inputValue[6] ){
                            (inputValue[4]==="X")?setWinner("Player 1"):setWinner("Player 2")
                        }
                        else{
                            setWinner("Draw")
                        }

                    }                    
                }
        }
    }
    
    function changeValue(clickedIndex: number){
        gridClickHandler()
        
      // toggle X for player 1 toggle O for player 2
        if(inputValue[clickedIndex]===' ' ){
            if(playerNo===1){
                inputValue[clickedIndex]='X'
                setInputValue(inputValue)}
            else{
                inputValue[clickedIndex]='O'
                setInputValue(inputValue)}
        }
        gameLogic()
        //console.log(InputValue)
       //console.log(clickedIndex)
        
    }
    function gridClickHandler(){
       if(countNo===9) {setCountNo(0)}else setCountNo(countNo+1)
       if( playerNo===1 ){setPlayerNo(2)} else setPlayerNo(1)
      
      
    }
    //grid-items
    const gridItems=inputValue.map((item,index)=>{
        return <div className=
        'flex items-center justify-center w-20 h-20 text-5xl font-extrabold bg-gray-300 from-neutral-700 dark: text-slate-400 dark:bg-slate-900 hover:bg-lime-500 dark:hover:bg-lime-400' 
        key={index} onClick={()=>changeValue(index)}>{item}</div>}
        )
        console.log(winner);
  return (
    
    <div className='flex flex-col py-2 jusify-center'>
        {/*grid container*/}
        <div className='grid grid-cols-3 gap-1 p-2 ' >
            {gridItems}
        </div>
        {/**count and turn */}
        <div className='flex-col px-2 py-3 font-bold bg-gray-400 text-slate-900 dark:text-white dark:bg-slate-800'>
            <h3>Count: {countNo} </h3> 
            <h3>Turn: Player {playerNo} </h3> 
            <h3>Winner: {winner}</h3>
        </div>
    </div>
  )
}

