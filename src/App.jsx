import React from 'react'
import Nav from './components/Nav'
import Work from './components/Work'
import Stripes from './components/Stripes'

const App = () => {
  return (
    <div className='bg-[#000000] h-full w-full text-zinc-100'>
      <Nav/>
      <Work/>
      <Stripes/>
    </div>
  )
}

export default App