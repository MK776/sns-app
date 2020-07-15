import React from "react";
import {Link} from "react-router-dom";

function Home(){
  return(
    <div className="background">
      <div className="opacity-background">
        <h1>VOCAB</h1>
        <h2>今日覚えた英語をシェアしよう</h2>
        <Link to="/post">
          <p className="btn-to-post">始める</p>
        </Link>
      </div>
    </div>
  );
}

export default Home;