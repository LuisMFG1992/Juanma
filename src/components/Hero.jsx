import { Link } from 'react-router-dom'
import AppButton from './AppButton'

const Hero = () => {
  return (
    <section className='bgHero py-28'>
      <div className='flex h-full flex-col items-center justify-center px-6 text-center sm:px-20 md:px-28 lg:px-52'>
        <h1 className='text-[3rem] font-medium text-white md:text-[4rem]'>
          Unlocking Full Potential
        </h1>
        <p className='mb-8 text-paragraph leading-relaxed text-white'>
          Traditional solar project optimizations are slow and ineffective. At
          FIDgate, we offer intelligent solutions to change this. Discover how
          our innovative service boost your project{"'"}s profitability and
          enhance the decision-making process.
        </p>
        <Link to={'/services'} className='flex justify-center'>
          <AppButton text={'Our Services'} hover={'lighter'} />
        </Link>
      </div>
    </section>
  )
}

export default Hero
