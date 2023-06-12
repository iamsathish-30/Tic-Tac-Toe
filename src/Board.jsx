import React from 'react';
import './main.css'
import Box from './Box'
export default function Board(props){
   
    //Setting the first turn to X;
    const [xIsNext , setXIsNext] = React.useState(true);
    //It's a state for 9 child component
    const [state , setState] = React.useState(Array(9).fill(null))



    //Handle click is used to toggle from oneClick to another
    const handleClick = (i)=>{
        //If a Value is assigned to the block , it return the value 
        //Which is true
        if(state[i] || calculateWinner(state)){
            return ; 
        }
        //Copying the prev array and making changes to the clicked div element
        const arr = state.slice();
        if(xIsNext){
            arr[i] = 'X';
        }else{
            arr[i] = 'O';
        }
        setState(arr);  
        setXIsNext(prev=>!prev)
    }

    //Check The Person Who Won
    const winner = calculateWinner(state);
    let status ;
    if(winner){
        status=`Winner  is player ${winner}`;  
    }
    //The Below function is for calculating the Winner Whether X or O
    function calculateWinner (squares){
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for(let i = 0 ; i < lines.length ; i++){
            const[a , b , c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    const reset = ()=>{
        setState(Array(9).fill(null))
        setXIsNext(true)
    }

    return (
        <>
            <div className='game-content'>
                <Box handle = {()=>handleClick(0)} value={state[0]}/>
                <Box handle = {()=>handleClick(1)} value={state[1]}/>
                <Box handle = {()=>handleClick(2)} value={state[2]}/>
                <Box handle = {()=>handleClick(3)} value={state[3]}/>
                <Box handle = {()=>handleClick(4)} value={state[4]}/>
                <Box handle = {()=>handleClick(5)} value={state[5]}/>
                <Box handle = {()=>handleClick(6)} value={state[6]}/>
                <Box handle = {()=>handleClick(7)} value={state[7]}/>
                <Box handle = {()=>handleClick(8)} value={state[8]}/>
            </div>
            <div className='winner-content'>
                <p>{status}</p>
                {status && <button onClick={reset} className='btn'>Reset</button>}
            </div>
        </>
    );
}