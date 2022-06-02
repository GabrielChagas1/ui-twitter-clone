import {HeartIcon} from'@heroicons/react/outline';
import { useState } from 'react';

const MAX_TWEET_CHAR = 140;

const TweetForm = () => {
  const [text, setText] = useState('');
  
  function changeText(e) {
    setText(e.target.value)
  }

  return (
    <div className='border-b border-silver p-4 space-y-4'>
      <div className="flex space-x-5">
        <img src="/src/avatar.png" className='w-7' />
        <h1 className='font-bold text-xl'>Página Inicial</h1>
      </div>
      <form className='pl-12 text-lg flex flex-col'>
        <textarea 
          name="text" 
          value={text}
          placeholder="O que está acontecendo?" 
          className='bg-transparent outline-none'
          onChange={changeText} 
        />
        <div className='flex justify-end items-end space-x-3'>
          <span className='text-sm'>
            <span>{text.length}</span> / <span className='text-birdBlue'>{MAX_TWEET_CHAR}</span>
            </span>
          <button 
            className='bg-birdBlue py-1 px-6 rounded-full disabled:opacity-50'
            disabled={text.length > MAX_TWEET_CHAR ? true : false}
          >
            Tweet
          </button>
        </div>
      </form>
    </div>
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