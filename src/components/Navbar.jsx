import {
  Navbar as Nav,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle
} from 'flowbite-react'

import logo from '../assets/logo.svg'

const Navbar = () => {
  return (
    <div className='sticky top-0 z-10 w-full'>
      <div className='bg-primary px-6 text-end text-sm text-light'>
        (+214) 2594 246 246 | info@email.com | Address
      </div>
      <Nav
        fluid
        rounded
        class='border-b-1 border border-lightGray bg-white px-6'
      >
        <NavbarBrand href='https://flowbite-react.com'>
          <img src={logo} alt='' className='my-2 h-[55px]' />
          <span className='ml-3 text-xl font-semibold'>Name</span>
          {/* <span className='self-center whitespace-nowrap text-xl font-bold text-primary'>
            LOGO
          </span> */}
        </NavbarBrand>
        <NavbarToggle />
        <NavbarCollapse className='py-5 text-center'>
          <a href='#' className=' text-lg font-semibold text-primary'>
            Home
          </a>
          <a href='#' className='text-lg text-lightGray'>
            About
          </a>
          <a href='#' className='text-lg text-lightGray'>
            Services
          </a>
          <a href='#' className='text-lg text-lightGray'>
            Pricing
          </a>
          <a href='#' className='text-lg text-lightGray'>
            Contact
          </a>
        </NavbarCollapse>
      </Nav>
    </div>
  )
}

export default Navbar

{
  {
    /* <div className='absolute top-0 z-50 w-full'> */
  }

  /* <div className='bg-primary px-6 text-end'>
        (+214) 2594 246 246 | info@email.com | Address
      </div>
      <div className='navbar bg-base-100'>
        <div className='flex-1'>
          <a className='btn btn-ghost text-xl'>LOGO</a>
        </div>
        <div className='flex-none'>
          <ul className='menu menu-horizontal px-1 text-lg'>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Services</a>
            </li>
            <li>
              <a>Pricing</a>
            </li>
            <li>
              <a>About us</a>
            </li>
            <li>
              <a>Contact us</a>
            </li>
          </ul>
        </div>
      </div> */
}
{
  /* </div> */
}
