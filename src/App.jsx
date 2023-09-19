import { useState } from 'react'

function Square({value, onclick}){
  return <button className='w-[30px] h-[30px] border border-solid border-black' onClick={onclick}>{value}</button>
}

export default function App() {
  
  const [square,setSquares] = useState(new Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState(true)

  function handleClick(i){
    if(!winner){
      let newArray = square.slice() 
      if(newArray[i]){
        return;
      }
     
      if(xIsNext){
        newArray[i] = 'X'
        setXIsNext(false)
      }else{
        newArray[i] = 'O'
        setXIsNext(true)
      }
      setSquares(newArray)
    }
  }

  // [x, null, null, null]
let winner = condition(square)
console.log(winner)
let status = ''

if(winner){
  status = 'winner: ' + winner;
}else{
  status = 'Next player: ' + (xIsNext? 'X':'O')
}
 
  return(
    <> 
      <div>{status}</div>
      <div className='flex flex-wrap w-[90px] h-[90px]'>
      <Square value={square[0]} onclick={() => handleClick(0)}/>
      <Square value={square[1]} onclick={() => handleClick(1)}/>
      <Square value={square[2]} onclick={() => handleClick(2)}/>
      <Square value={square[3]} onclick={() => handleClick(3)}/>
      <Square value={square[4]} onclick={() => handleClick(4)}/>
      <Square value={square[5]} onclick={() => handleClick(5)}/>
      <Square value={square[6]} onclick={() => handleClick(6)}/>
      <Square value={square[7]} onclick={() => handleClick(7)}/>
      <Square value={square[8]} onclick={() => handleClick(8)}/>
      </div>
    </>
  )
}

function condition(square){
 const rule = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6],  
 ];
 for(let i = 0 ; i < rule.length ; i++){
  const a = rule[i][0]
  const b = rule[i][1]
  const c = rule[i][2]

  //  const[a,b,c] = square[i]
   
   if(square[a] && square[a] === square[b] && square[a] === square[c]){
     return square[a]
    }
  }
  return false
}
