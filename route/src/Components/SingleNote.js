import React from 'react'
import "./SingleNote.css"

function SingleNote(props) {



  let dec=false;


dec = props.notes2.some(element => element === props.note);
  
  
  return (
    <div className={dec ? 'singleNote22' : 'singleNote'}>
        <p className='notetext' id='p'>{props.note}</p>
    </div>
  )
}

  

export default SingleNote;