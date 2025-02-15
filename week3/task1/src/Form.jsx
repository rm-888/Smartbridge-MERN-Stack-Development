import React from 'react'
import {useState} from 'react'

function form() {
  const [inp, setInp] = useState("");
return (
  <div>
    <form  className='m-20 h-100 flex flex-col items-center justify-center
    drop-shadow-xl border-4 border-purple-400 rounded-xl'>
      <label className="">
          Enter the information: 
          <br/><input type='text' 
          value={inp} 
          onChange={(e) => setInp(e.target.value)}
          className="drop-shadow-xl border-4 border-purple-400"></input>
      </label><br/><br/>
      <button type="submit"
      onClick={
        (e) => {
          e.preventDefault()
          console.log(inp)
          setInp('')
        }}
      className="drop-shadow-xl border-2 border-solid bg-purple-400 rounded-xl w-18 h-9 hover:bg-pink-600">
          Submit
      </button>
    </form>
    </div>
  )
}

export default form

