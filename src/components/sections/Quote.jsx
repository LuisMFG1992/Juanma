import Juan from '../../assets/Juan.png'
import { FaQuoteRight } from 'react-icons/fa'

const Quote = () => {
  return (
    <section className='body-font bg-light text-gray-600'>
      <div className='container mx-auto px-5 py-24'>
        <div className='mx-auto w-full text-center lg:w-3/4 '>
          <FaQuoteRight
            size={30}
            className='m-4 w-full text-center text-primary'
          />
          <p className='text-lg leading-relaxed'>
            After collaborating and discussing with experienced industry peers,
            I identified key areas often missing in traditional approaches. I
            developed FIDgate to address these gaps and help companies find
            optimal projects more efficiently. This tailor-made and agile
            service is designed for developers and investors across all
            scales—from small to large—who often face a wide range of challenges
            in advancing their renewable initiatives. My goal is to assist
            countries in meeting their global sustainability goals.
          </p>
          <span className='mb-6 mt-8 inline-block h-1 w-10 rounded bg-primary'></span>
          <div className='flex flex-col items-center justify-center gap-6 sm:flex-row'>
            <img src={Juan} className='size-28' />
            <div className='flex flex-col  items-center justify-center pt-2 sm:items-start'>
              <h2 className='title-font text-lg font-medium tracking-wider text-gray-900'>
                JUAN MANUEL ROLDAN
              </h2>
              <p className='text-lg text-gray-500'>
                Optimization Expert & Founder
              </p>
              <p className='text-lg text-gray-500'>
                +5 GW Renewable Experience in +15 countries
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Quote
