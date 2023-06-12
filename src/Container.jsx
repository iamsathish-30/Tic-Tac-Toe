import React , {useState} from "react";
import './main.css'
import Board from './Board.jsx';
//import { nanoid } from "nanoid";
export default function Container(){
    return (
        <div className='container'>
            <div className='header-content'>
                <h2>Tic-Tac-Toe</h2>
            </div>
            <Board />
        </div>
    );
}