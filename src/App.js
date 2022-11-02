import React, { useEffect, useState,useRef} from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Editeur from './Editor';
import {nanoid} from "nanoid"


function App(){

  
  
  const area=useRef(null)

  let text=""


  const [notes,setNote]=useState(()=>JSON.parse(localStorage.getItem('note'))||[])

  const [currentId,setId]=useState( (notes[0] && notes[0].id) || "")

  const [show,setShow]=useState(false)

useEffect(()=>{localStorage.setItem('note',JSON.stringify(notes))},[notes])

  // function select(event){
  //   document.querySelectorAll('.note').forEach(note=>{
  //     setId(event.target.id)
  //    if(event.target.id===note.id){
  //     note.classList.add('selected')
  //    }
  //   else{
  //     note.classList.remove('selected')
  //    }
  //   })

  // }


  
function selectTool(event){
    document.querySelectorAll('.tool').forEach(tool=>{
     if(event.target.id===tool.id){
      tool.parentNode.classList.add('tool-selected')
     }else{
      tool.parentNode.classList.remove('tool-selected')
     }
    })
}

function findCurrentNote() {
  return notes.find(note => {
      return note.id === currentId
  }) || notes[0]
}

function addNewNote(){
 
  let newNote={
    body:"Write something here...",
    id:nanoid()
  }
setNote(prev=>[newNote,...prev])
setId(newNote.id)

}



let textarea=document.getElementsByClassName('textarea');
console.log(textarea.value)
function showNote(){
 
notes.map(note=>{
  if(note.id===currentId){
   textarea.value=note.body

    // area.current.value=note.body
 

  }
})

}
showNote()


function updateNote(){

text=textarea.value
// text=area.current.value

setNote(old=>old.map(note=>{
    return currentId===note.id ?
    {...note,body:text}:note
  })
)
}


/*select the after element in css=> select the original parent element
the use window.getComputedStyle(parent,'? exp ::after')
*/

//expl:
// let delete_icon=window.getComputedStyle(note,'::after')



// function deleteNote(){

// let staying=[]
// let deleted=[]

// notes.map(note=>{
//   if(note.id===currentId)deleted.unshift(note)
//   else(staying.unshift(note))
//   return staying
// })

// setNote(staying)



function deleteNote(event,noteId) {

  event.stopPropagation()
  setNote(oldNotes => oldNotes.filter(note => note.id !== noteId))
  // textarea.value=notes[notes.indexOf(noteId)+1].body
}



function showF(){
  setShow(true)
  addNewNote()

}
 
  return (

  <main>

       
   {
    notes.length>0
    ?
  
    <div className="App" >
        
      <Sidebar notes={notes} setId={setId} currendNote={findCurrentNote()} add={addNewNote} delete={deleteNote} />
      <Editeur select={selectTool} update={updateNote} notes={notes}  forwardedRef={area} value={text}/>
      
      
    </div>
    :
    <div className='no_notes'>
      <h1>you have notes...</h1>
      <button className='debut_create_note' onClick={showF}>start now</button>
    </div>
 }

 </main>
  );



}

export default App;
