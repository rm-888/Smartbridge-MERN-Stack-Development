import React from 'react'
import {useState} from 'react'

function form() {
    const [mail, setMail] = useState("");
    const [pwd, setPwd] = useState("");
  return (
    <div>
      <form  className='m-20 h-100 flex flex-col items-center justify-center
      drop-shadow-xl border-4 border-purple-400 rounded-xl'>
        <label className="">
            Enter your email: 
            <br/><input type='text' 
            value={mail} 
            onChange={(e) => setMail(e.target.value)}
            className="drop-shadow-xl border-4 border-purple-400"></input>
        </label><br/><br/>
        <label className="">
            Enter Password: 
            <br/><input type='text' 
            value={pwd} 
            onChange={(e) => setPwd(e.target.value)}
            className="drop-shadow-xl border-4 border-purple-400"></input>
        </label><br/><br/>
        <button onClick={
          () => alert(`Your Email: ${mail}\nYour Password: ${pwd}`)
        }
        className="drop-shadow-xl border-2 border-solid bg-purple-400 rounded-xl w-18 h-9 hover:bg-pink-600">
            Submit
        </button>
      </form>
    </div>
  )
}

export default form

