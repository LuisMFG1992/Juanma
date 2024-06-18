import { IconTitle } from '../components'
import ContentImage from '../components/ContentImage'
import { whatWeDoBest } from '../constants/services'

import services1 from '../assets/services1.jpg'
import services2 from '../assets/services2.jpg'
import { Link } from 'react-router-dom'

const Services = () => {
  return (
    <>
      {/* Why choosing us */}
      <section className='body-font  text-gray-600'>
        <div className='container mx-auto px-5 py-24'>
          <div className='mb-20 flex w-full flex-col text-center'>
            <h1 className='mb-4 text-title font-medium text-primary sm:text-3xl'>
              WHAT WE DO BEST
            </h1>
            <p className='mx-auto text-paragraph leading-relaxed lg:w-2/3'>
              Continuously seeking innovation to provide the best solutions.
            </p>
          </div>
          <div className='flex flex-wrap'>
            {whatWeDoBest.map((option) => (
              <IconTitle
                key={option.title}
                icon={option.icon}
                title={option.title}
              />
            ))}
          </div>
        </div>
      </section>

      <ContentImage
        title='OUR SERVICES'
        text='At FIDgate, we specialize in delivering standalone Solar & Storage financial optimization and consulting services tailored to meet the diverse needs of our clients. We leverage close collaboration between industry knowledge, data analytics, sophisticated modeling, and cutting-edge technology to provide innovative solutions.'
        image={services1}
      />
      <ContentImage
        title='PERSONALIZED PROCESS'
        text={`We are equipped to handle diverse approaches based on your project${"'"}s needs, allowing us to adapt and align with different strategies for optimal collaboration.`}
        image={services2}
        direction='left'
      />

      <section className='pb-12'>
        <h2 className='pb-8 text-center text-subtitle font-semibold text-primary'>
          Are ready to transform your business?
        </h2>
        <div className='flex justify-center'>
          <Link to='/contact'>
            <button className='inline-flex rounded border-0 bg-primary px-10 py-2 text-lg text-white hover:bg-opacity-80 focus:outline-none'>
              Contact us
            </button>
          </Link>
        </div>
      </section>
    </>
  )
}

export default Services
