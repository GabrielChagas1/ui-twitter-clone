import {HeartIcon} from'@heroicons/react/outline';
import { useState } from 'react';

const MAX_TWEET_CHAR = 140;

const TweetForm = () => {
  const [text, setText] = useState('');
  
  function changeText(e) {
    setText(e.target.value)
  }

  return (
          value={text}
  )
}

export const App = () => {
  return (
    <div id="tweet">
      <div id="col-avatar" className="col">
        <img src="/src/avatar.png" alt="" className="tweet__img" />
      </div>
      <div id="col-text" className="col">
        <span>Elon Musk</span>
        <span>@elonmusk</span>
        <p>
          Let´s make Twitter maximun fun
        </p>
      </div>
    </div>
  )
}

export default App