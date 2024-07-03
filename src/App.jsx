import { Route, Routes } from 'react-router-dom'
import './App.css'
import { CookiesBanner, Footer, Navbar, ScrollToTop } from './components'
import { About, Contact, Home, PrivacyPolicy, Services } from './pages'
import { useCookies } from 'react-cookie'

function App() {
  const [cookies] = useCookies(['cookieConsent'])
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<Home />} />

        <Route path='/privacyPolicy' element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
      {!cookies.cookieConsent && <CookiesBanner />}
    </>
  )
}

export default App
