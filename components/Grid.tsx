import React, { useState } from 'react'
import {FaTrophy} from 'react-icons/fa'
import {GrPowerReset} from 'react-icons/gr'
export default function Grid()  {
    
    const[playerNo,setPlayerNo]=useState(1)
    const[countNo,setCountNo]=useState(0)
    const [inputValue,setInputValue]=useState([' ',' ',' ',' ',' ',' ',' ',' ',' '])
    const[winner,setWinner]=useState(' ')
    const[isGameOver,setIsGameOver]=useState(false)
    function resetGame(){
        setInputValue([' ',' ',' ',' ',' ',' ',' ',' ',' ']);
        setCountNo(0);
        setWinner(' ')
        setIsGameOver(false);
    }
    function GridLogic(){
        console.log(countNo)
        //console.log(inputValue)
        
        //countNo range: 0-9
        if(countNo===9||winner==='Player 1'||winner==='Player 2'||winner==='Draw'){
            setIsGameOver(true)
        }
        if(countNo>=8&&winner!=='Player 1'&&winner!=='Player 2')
        {
           //setIsGameOver(true)
            setWinner('Draw')
        }
        
        else{
            //console.log(isGameOver) 
            if(countNo>=4 && countNo<=8 &&winner!=='Player 1'&&winner!=='Player 2'){
                for(let i=0;i<9;i++){
                    //row
                    if(inputValue[i]===inputValue[i+1]&&inputValue[i+1]===inputValue[i+2]&&inputValue[i+2]===inputValue[i]&&inputValue[i]!==' '){
                        if(inputValue[i+2]==='X'){setWinner("Player 1"); break;}
                        else if(inputValue[i+2]==='O'){setWinner("Player 2");break;}
                        else{i=i+3}  
                    }
                    //col
                    if(inputValue[i]===inputValue[i+3]&&inputValue[i+3]===inputValue[i+6]&&inputValue[i+6]===inputValue[i]&&inputValue[i]!==' '){
                        if(inputValue[i+3]==='X'){setWinner('Player 1'); break;}
                        else if(inputValue[i+3]==='O'){setWinner('Player 2');break;}
                        else{i=i+1}
                        
                    }
                }
                //diagonal
                if(inputValue[0]===inputValue[4]&&inputValue[4]===inputValue[8]&&inputValue[8]===inputValue[0]&&inputValue[0]!==' '){
                    if(inputValue[4]==='X'){setWinner('Player 1')}
                }
                //reverse-diagonal
                if(inputValue[2]===inputValue[4]&&inputValue[4]===inputValue[6]&&inputValue[6]===inputValue[2]&&inputValue[2]!==' '){
                    if(inputValue[4]==='X'){setWinner('Player 1')}
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
        GridLogic()
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
        //console.log(winner);
  return (
    <div>
    {//show game
    (isGameOver===false)&&
    <div className='flex flex-col py-2 jusify-center'>
        {/*grid container*/}
            <div className='grid grid-cols-3 gap-1 p-2 ' >
                {gridItems}
            </div>
            {/**count and turn */}
            <div className='flex-col px-2 py-3 font-bold bg-gray-400 text-slate-900 dark:text-white dark:bg-slate-800'>
                <h3>Count: {countNo} </h3> 
                <h3>Turn: Player {playerNo} </h3> 
                
            </div>
    </div>
  }
  {//show result
    (isGameOver===true && (winner==='Draw'||winner==='Player 1'||winner==='Player 2'))&&
    <div className='flex justify-center p-4 my-4 bg-gray-400 item-center text-slate-900 dark:text-white dark:bg-slate-800 font-kaushan rounded-2xl'>
        <div className='flex-col px-2 py-3 text-2xl '>
            <h1 className='font-bold'>{`<<-----Game Over----->>`}</h1>
            <div className='flex items-center justify-center space-x-2 '>
                {(winner!=='Draw')&&
                    <div>
                        <h3>Winner </h3>
                        <FaTrophy className='mx-6 text-yellow-500 '/>
                        <h2>{winner}</h2>
                        
                   </div>
                }
                {(winner==='Draw')&&
                    <div>
                        <h3>Draw</h3>
                    </div>
                }
            
            </div>
            <div className='flex flex-col items-center justify-center gap-2 mt-4 space-x-2 bg-gradient-to-r from-blue-800 to-green-500 rounded-2xl'><button onClick={resetGame}><p>Reset</p><GrPowerReset/></button></div>
        </div>
               
    </div>
  }
  </div>
  )
}



