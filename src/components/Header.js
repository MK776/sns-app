import React from 'react';
import {Link} from 'react-router-dom';


function Header(){
  return(
    <header>
      <Link to='/' className='home'>
        <h2>VOCAB</h2>
      </Link>
        <Link to='/post' className='nav'>
          <p>投稿一覧</p>
        </Link>
        <Link to='/note' className='nav' >
          <p>ノート</p>
        </Link>
    </header>
  );
}

export default Header;