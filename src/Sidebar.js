import React, { useState, useRef} from 'react';
import './App.css'
import trash from './delete.png'

export default function Sidebar(props){
const [title,setTitle]=useState('New note')



 const elements= props.notes.map((note,index)=>{

     return <div  key={index}  className={`title ${
         note.id === props.currendNote.id ? "selected-note" : ""

  }`}     onClick={() => props.setId(note.id)} >{title}

            <img src={trash} alt="" className="delete_icon"  onClick={(event)=>props.delete(event,note.id)}></img>
     </div>
     
  })


  return(
    <div className='sideBar'>
      
      <div className='list-header'><h1 className='title_header'>Notes</h1><button className='addNote' onClick={props.add}>+</button></div>
      {elements}
    </div>
  )
}