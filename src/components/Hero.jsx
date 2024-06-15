import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className='body-font  text-gray-600'>
      <div className='container mx-auto flex flex-col items-center px-5 py-24 md:flex-row'>
        <div className='mb-16 flex flex-col items-center text-center md:mb-0 md:w-1/2 md:items-start md:pr-16 md:text-left lg:flex-grow lg:pr-24'>
          <h1 className='title-font mb-4 text-title font-medium text-primary'>
            Unlocking the full potential
            <br className='hidden lg:inline-block' />
            of solar projects.
          </h1>
          <p className='mb-8 text-paragraph  leading-relaxed'>
            We guide companies through the complexities of solar project
            optimization. We combine the knowledge of our clients with our
            advanced analytical tools and industry expertise, delivering unique
            solutions to their greatest challenges.
          </p>
          <div className='flex justify-center'>
            <Link to='/services'>
              <button className='inline-flex rounded border-0 bg-primary px-6 py-2 text-lg text-white hover:bg-opacity-80 focus:outline-none'>
                Services
              </button>
            </Link>
          </div>
        </div>
        <div className='w-5/6 md:w-1/2 lg:w-full lg:max-w-lg'>
          <img
            className='rounded object-cover object-center'
            alt='hero'
            src='https://dummyimage.com/720x600'
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
