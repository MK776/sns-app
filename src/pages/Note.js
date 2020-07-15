import React, { useContext } from "react";
import {Link} from "react-router-dom";

import NoteItem from "components/NoteItem";
import {Context} from "Context";

function Note(){
  const {noteItems} =useContext(Context);

  const NoteItemElement = noteItems.map(item=>
    <NoteItem key={item.id} item={item}/>
  );

  return(
    <>
      <div className="post-container">
       {NoteItemElement}
      </div>
      {
        noteItems.length ===0 && 
          <div className="no-item">
            <h1>ノートにアイテムがありません</h1>
            <Link to="/post"><p className="btn-to-post"> 投稿一覧へ</p></Link>
          </div>
      }
    </>
  );
}

export default Note;