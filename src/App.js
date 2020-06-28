import React from 'react'
import {Switch, Route} from 'react-router-dom';

import Post from 'pages/Post';
import Note from 'pages/Note';
import Header from 'components/Header';
import Home from 'pages/Home';

function App() {
  return (
   <>
   <Header/>
   
    <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route path="/note">
        <Note/>
      </Route>
      <Route path="/post">
        <Post/>
      </Route>
    </Switch>
   </>
  )
}

export default App;
