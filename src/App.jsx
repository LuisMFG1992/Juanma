import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Footer, Navbar } from './components'
import { Home } from './pages'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<h1>about</h1>} />
        <Route path='/services' element={<h1>services</h1>} />
        <Route path='/pricing' element={<h1>pricing</h1>} />
        <Route path='/contact' element={<h1>contact</h1>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
