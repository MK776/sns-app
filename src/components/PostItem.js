import React, {useContext} from "react";
import {Context} from "Context";

function PostItem({post}){

  const {toggleFavorite, addToNote, removeFromNote, noteItems} = useContext(Context);

  function heartIcon(){
    if(post.isFavorite){
      return <i className="ri-heart-fill ri-2x heart" onClick={() => toggleFavorite(post.id)}></i>
    } else{
      return <i className="ri-heart-line ri-2x" onClick={() => toggleFavorite(post.id)}></i>
    }
  }

  function noteIcon(){

    const alreadyInNote = noteItems.some(item => item.id === post.id);

    if(alreadyInNote){ 
      return <i className="ri-book-fill ri-2x" onClick={() => removeFromNote(post.id)}></i>
    }else{
      return <i className="ri-book-line ri-2x" onClick={() => addToNote(post)}></i>
    }
  }
  
  return (
      <div　className="post-item">
        <p>{post.english}</p>
        <hr/>
        <p>{post.japanese}</p>
        {heartIcon()}
        {noteIcon()}
      </div>
  );
}

export default PostItem;