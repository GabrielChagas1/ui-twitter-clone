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

const Tweet = ({name, username, avatar, children}) => {
  return (
    <div className="flex space-x-3 p-4 border-b border-silver">
      <div>
        <img src={avatar} alt="" />
      </div>
      <div className='space-y-1'>
        <span className="font-bold text-sm">{name}</span>{' '}
        <span className="text-sm text-silver">@{username}</span>
        <p>{children}</p>
        <div className='flex space-x-1 text-silver text-sm items-center'>
          <HeartIcon className='w-6 cursor-pointer stroke-1' />
          <span>1.2k</span>
        </div>
      </div>
    </div>
  )
}
    </div>
  )
}

export default App