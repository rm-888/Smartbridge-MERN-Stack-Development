import React from 'react'

function Button() {
  return (
    <div className='text-center my-50'>
      <button onClick={() => {console.log("Button Clicked!!")}}
      className='h-20 w-40 bg-blue-400 text-white rounded-2xl shadow-2xl hover:bg-blue-600'>
        Click Me!
      </button>
    </div>
  )
}

export default Button
