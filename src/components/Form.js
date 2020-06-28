import React, {useContext} from 'react';
import {Context} from 'Context';

const Form = () => {
  const {handleChange, addPost, newEN, newJP} = useContext(Context);

  return(

    <form>
      <textarea
        value={newEN}
        name='english'
        onChange={handleChange}
        placeholder='英語を入力'
      />
      <textarea
        value={newJP}
        name='japanese'
        onChange={handleChange}
        placeholder='日本語を入力'
      />
      <button onClick={addPost}>Submit</button>
    </form>
  );
}

export default Form;