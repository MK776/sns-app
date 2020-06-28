import React, {useContext} from 'react';
import {Context} from 'Context';

import Form from 'components/Form';
import PostItem from 'components/PostItem';

function Home(){ 
  const {allPosts, isToggledOn, toggle} = useContext(Context);

  const postElements = allPosts.map((post) => (
    <PostItem key={post.id} post={post}/>
  ));

  return(
    <>
      <div className='post-container'>
        {postElements}
      </div>
      {isToggledOn ?
        <div className='popup'>
          <Form />
          <i className='ri-close-circle-line close-btn '　onClick={toggle} />
        </div>:
        <div className='new-post'>
          <i className='ri-add-circle-line ri-2x' onClick={toggle} />
          <p>投稿する</p>
        </div>
      }
    </>
  )
}

export default Home;