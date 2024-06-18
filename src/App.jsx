import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Footer, Navbar, ScrollToTop } from './components'
import { About, Contact, Home, Services } from './pages'

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/copyright' element={<h1>To be defined</h1>} />
        <Route path='/privacyPolicy' element={<h1>To be defined</h1>} />
        <Route path='/cookiePolicy' element={<h1>To be defined</h1>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
