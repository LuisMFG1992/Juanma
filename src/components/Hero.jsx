import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className='bgHero py-28'>
      <div className='flex h-full flex-col items-center justify-center px-6 text-center sm:px-20 md:px-28 lg:px-52'>
        <h1 className='text-[3rem] font-medium text-white md:text-[4rem]'>
          Unlocking Full Potential
        </h1>
        <p className='mb-8 text-paragraph leading-relaxed text-white'>
          Traditional solar project optimizations are slow and ineffective. At
          FIDgate, we offer smart solutions to change this. Discover how our
          innovative services can boost your project{"'"}s profitability and
          enhance the decision-making process.
        </p>
        <div className='flex justify-center'>
          <Link to='/services'>
            <button className='inline-flex rounded border-0 bg-primary px-16 py-2 text-lg text-white brightness-125 hover:bg-opacity-80 focus:outline-none'>
              Our Services
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero
