import React, {useContext} from "react";
import {Context} from "Context";

function NoteItem({item}){
  const {removeFromNote} = useContext(Context);

  return(
    <div className="post-item">
      <p>{item.english}</p>
      <hr/>
      <p>{item.japanese}</p>
      <i className="ri-delete-bin-line ri-2x" onClick={() => removeFromNote(item.id)}/>
    </div>
  );
}

export default NoteItem;