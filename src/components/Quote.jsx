import Juan from '../assets/Juan.png'
import { FaQuoteRight } from 'react-icons/fa'
import { IoMail } from 'react-icons/io5'
import { RiSmartphoneFill } from 'react-icons/ri'

const Quote = () => {
  return (
    <section className='body-font bg-light text-gray-600'>
      <div className='container mx-auto px-5 py-24'>
        <div className='w-full text-center'>
          <FaQuoteRight
            size={30}
            className='mb-4 w-full text-center text-primary'
          />
          <p className='text-paragraph leading-relaxed'>
            During my 7 years of experience working in some of the biggest
            energy companies, I realized how much potential is often lost due to
            time constraints and the absence of better methodologies. I was
            convinced that there must be a better way and I was determined to
            find it. After extensive research and involvement in several
            projects , the solution became clear to me. This is when I decided
            to start FIDgate. FIDgate assist companies and countries in meeting
            their Global Sustainability Goals in a cost-efficient manner.
          </p>
          <span className='mb-6 mt-8 inline-block h-1 w-10 rounded bg-primary'></span>
          <div className='flex flex-col items-center justify-center gap-6 sm:flex-row'>
            <img src={Juan} className='size-28' />
            <div className='flex flex-col  items-center justify-center pt-2 sm:items-start'>
              <h2 className='title-font text-lg font-medium tracking-wider text-primary'>
                JUAN MANUEL ROLDAN
              </h2>
              <p className='text-lg text-gray-500'>
                Optimization Expert & Founder
              </p>
              <p className='text-lg text-gray-500'>
                +5 GW Renewable Experience in +15 countries
              </p>
              <div className='flex items-center gap-1'>
                <IoMail color='#05445E' />
                <p className='font-medium text-primary'>jmr@fidgate.com</p>
              </div>
              <div className='flex items-center gap-1'>
                <RiSmartphoneFill color='#05445E' />
                <p className='font-medium text-primary'>(+49) 15566 401840</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Quote
