import React from 'react'
import {useState} from 'react'

function Header() {
  const [text, setText] = useState("");
  return (
    <div>
      <div className='w-screen h-30 text-5xl p-6
    text-center font-serif bg-purple-400 border-b-4 border-black'>
      TEXTUPDATER TASK
      </div>
      <div className='mt-15 flex flex-col items-center justify-center'>
      <label className="">
            Enter the information: 
            <br/><input type='text' 
            value={text} 
            onChange={(e) => setText(e.target.value)}
            className="drop-shadow-xl border-4 border-purple-400"></input>
        </label>
        <p className="m-9 p-4 border-2 bg-purple-400 text-lg text-gray-700">
          You are typing: {text}
        </p>
      </div>
    </div>
  )
}

export default Header
