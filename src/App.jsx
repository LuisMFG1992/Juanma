import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Footer, Navbar } from './components'
import { About, Contact, Home, Pricing, Services } from './pages'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
