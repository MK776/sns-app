import React, {useContext} from 'react';
import {Context} from 'Context';

function NoteItem({item}){
  const {removeFromNote} = useContext(Context);

  return(
    <>
      <p>{item.english}</p>
      <p>{item.japanese}</p>
      <i className='ri-delete-bin-line' onClick={() => removeFromNote(item.id)}/>
    </>
  )
}

export default NoteItem;