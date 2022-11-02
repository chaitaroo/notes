import React from "react";
import './App.css'


export default function Editeur(props){



let count=0;
let i=0;

 const photos=['bold.png','italic-font.png','strikethrough-text.png','underline.png']
 let tools=photos.map((tool,index)=>{
    return(
        <div key={i++} className="tool-container">
        <div key={count++} id={count++} className="tool" ></div>
          <img key={index} className='tools' src={require(`./${tool}`)} alt=""></img>
          </div>)



 })
    return(
        <div className="editeur">
          <nav className="nav">
            {tools}
          </nav>
          {props.notes.length>0 ?
            <textarea className="textarea" rows={42} cols={150} onChange={props.update} ref={props.forwardedRef} placeholder='write something here...'></textarea>
            // <input type='text' className="textarea" onChange={props.update} ref={props.forwardedRef} placeholder='write something here...'></input>
          :
          <textarea rows={42} cols={150} value='' disabled></textarea>
          }
        </div>
    )
}