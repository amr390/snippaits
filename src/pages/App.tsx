import React from 'react'
import '../styles/App.css'

function App() {
  return (
    <div className='App'>
      <div className='flex flex-1 flex-col'>
        <nav className='flex flex-1 flex-row justify-between max-h-10'>
          <span>burger button</span>
          <span>Login</span>
        </nav>
        <div className='flex flex-1 flex-col min-h-[calc(100vh-2rem)]'>
          <div className='flex items-center justify-center h-40'>
            <input type='text' className='w-wh border rounded border-solid border-gray-600' />
          </div>
          <div className='flex items-center justify-center min-h-[calc(100vh-16rem)] border rounded border-solid border-gray-600'>
            <textarea />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
