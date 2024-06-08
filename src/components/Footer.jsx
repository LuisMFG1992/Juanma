import { Link } from 'react-router-dom'
import logo from '../assets/LogoFIDgate.svg'

const Footer = () => {
  return (
    <>
      <footer className='body-font flex flex-col gap-4 border border-t-2 bg-light p-6 text-gray-600'>
        {/* Logo */}
        <div className='flex justify-center sm:justify-start'>
          <Link
            to={'/'}
            className='title-font flex items-center justify-center font-medium text-gray-900 md:justify-start'
          >
            <img src={logo} alt='' className='w-[150px]' />
          </Link>
        </div>
        <div className='flex flex-col items-center gap-4 pt-4 text-paragraph sm:flex-row sm:gap-8'>
          <Link to={'/copyright'}>Copyright</Link>
          <Link to={'/privacyPolicy'}>Privacy policy</Link>
          <Link to={'cookiePolicy'}>Cookie policy</Link>
        </div>
      </footer>
    </>
  )
}

export default Footer
