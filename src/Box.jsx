import React ,{useState} from 'react';

export default function Box(props){
    return (
        <div className='box' onClick={props.handle}>{props.value}</div>
    );
}