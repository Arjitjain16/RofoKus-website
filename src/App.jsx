
import Nav from './components/Nav'
import Work from './components/Work'
import Stripes from './components/Stripes'
import Products from './components/Products'
import Marquees from './components/Marquees'
import Cards from './components/Cards'

const App = () => {
  return (
    <div className='bg-[#000000] h-full w-full text-zinc-100'>
      <Nav/>
      <Work/>
      <Stripes/>
      <Products />
      <Marquees />
      <Cards/>
    </div>
  )
}

export default App