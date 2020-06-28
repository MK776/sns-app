import React, { useContext } from 'react';
import NoteItem from 'components/NoteItem';
import {Context} from 'Context';

function Note(){
  const {noteItems} =useContext(Context);
  const NoteItemElement = noteItems.map(item=>
      <NoteItem key={item.id} item={item}/>
    );
  return(
    <>
      {NoteItemElement}
    </>
  )
}

export default Note;