import React from 'react'
import Navbar from './components/Navbar'
import Cards from './components/Cards'

const App = () => {
  return (
    <>
        <div className='App'>
            <Navbar/>
            <h1>This is a heading</h1>
            <Cards/>  
        </div>
    </>
    
  )
}

export default App
