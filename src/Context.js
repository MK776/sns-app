import React, {useState, useEffect} from "react";
import firebase from "firebase-config";

const Context = React.createContext();

function ContextProvdider({children}){
  const [allPosts, setAllPosts] = useState([]);
  const [newEN, setNewEN] = useState('');
  const [newJP, setNewJP] = useState('');
  const [id, setId] = useState(2);
  const [noteItems, setNoteItems] = useState([]);
  const [isToggledOn, setIsToggledOn] = useState(false);

  function toggleFavorite(id){
    const updatedArr = allPosts.map(post => {
      if(post.id === id){
        return {...post, isFavorite: !post.isFavorite};
      }
      return post;
    })
    setAllPosts(updatedArr);
  }


  function handleChange(event) {
    event.target.name === "english" ? 
      setNewEN(event.target.value):
      setNewJP(event.target.value)
  }

  function addPost(event) {
    event.preventDefault();
    if(isOnlySpace(newEN)　|| isOnlySpace(newJP)){
      alert("エラー:　空欄があります");
      return;
    }else if(!isJP(newJP)){
      alert("エラー:　日本語を下段に記入してください");
      return;
    }else if(!isEN(newEN)){
      alert("エラー:　英語を上段に記入してください");
      return;
    }
    setAllPosts(prevPosts => [...prevPosts,
      {english: newEN, japanese: newJP, id: id, isFavorite: false}]);
    setNewEN('');
    setNewJP('');
    setId(prevId => prevId  + 1);
    toggle();
  }

  function addToNote(newItem){
    setNoteItems(prevItems => [...prevItems, newItem])
  }

  function removeFromNote(id){
    setNoteItems(prevItems => prevItems.filter(item => item.id !== id))
  }

  function toggle(){
    setIsToggledOn(prev => !prev);
  }

  function isEN(str){
    const reg = new RegExp(/^[0-9a-zA-Z]+|(\s|　)$/);
    return reg.test(str);    
  }

  function isJP(str){
    const reg = new RegExp(/^[\u30a0-\u30ff\u3040-\u309f\u3005-\u3006\u30e0-\u9fcf]+|(\s|　)$/);
    return reg.test(str);
  }

  function isOnlySpace(str){
    const reg = new RegExp(/^(\s|　)*$/);
    return reg.test(str);    
  }

  useEffect(() =>{
    const db = firebase.firestore();
    db.collection("posts")
      .get()
      .then((querySnapshot) => querySnapshot.docs.map((doc) => 
      setAllPosts((prevPosts) => [...prevPosts, doc.data()])));
  }, []); 

  return(
    <Context.Provider 
      value={{
        handleChange, 
        addPost, 
        allPosts, 
        newEN, 
        newJP,
        toggleFavorite,
        addToNote,
        removeFromNote,
        noteItems,
        toggle,
        isToggledOn
      }}
    >
      {children}
    </Context.Provider>
  )
}

export {Context, ContextProvdider};