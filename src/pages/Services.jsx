import {
  AppButton,
  ComplementaryServices,
  HowWeWork,
  IconTitle
} from '../components'
import ContentImage from '../components/ContentImage'
import { whatWeDoBest } from '../constants/services'

import services1 from '../assets/services1.jpg'
import services2 from '../assets/services2.jpg'
import { Link } from 'react-router-dom'

const Services = () => {
  return (
    <>
      {/* Why choosing us */}
      <section className='body-font px-6 text-gray-600 md:px-0'>
        <div className='container mx-auto max-w-[1300px] py-24'>
          <div className='mb-8 flex w-full flex-col text-center'>
            {/* <h1 className='mb-4 text-title font-medium text-primary sm:text-3xl'> */}
            <h1 className='mb-4 text-title font-medium text-primary'>
              WHAT WE DO BEST
            </h1>
            <p className='mx-auto text-paragraph leading-relaxed lg:w-2/3'>
              Continuously seeking innovation to provide the best solutions.
            </p>
          </div>
          <div className='grid grid-cols-1 place-items-center lg:grid-cols-2 xl:grid-cols-4'>
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
        title='OUR MAIN SERVICE'
        text='At FIDgate, we specialize in delivering standalone Solar & Storage financial optimization and consulting services tailored to meet the diverse needs of our clients. We leverage a combination of industry knowledge, data analytics, sophisticated modeling, and cutting-edge technology to provide innovative solutions.'
        image={services1}
      />

      {/* <HowWeWork /> */}

      <ComplementaryServices />

      <div className='bg-light'>
        <ContentImage
          title='PERSONALIZED PROCESS'
          text={`We are equipped to handle diverse approaches based on your project's needs, allowing us to adapt and align with different strategies for optimal collaboration.`}
          image={services2}
          direction='left'
        />
      </div>

      <section className='flex flex-col gap-6 py-12'>
        <h2 className='title-font list-disc text-center text-3xl font-medium text-primary sm:text-4xl'>
          The result for your company
        </h2>

        <ul className='grid list-inside list-disc justify-center px-6 text-paragraph'>
          <li>Most valuable insights for project development and execution</li>
          <li>
            Extremely convenient business case and streamlined decision-making
            process
          </li>
        </ul>
        <div className='flex justify-center px-6'>
          <Link to={'https://calendly.com/jmr-fidgate/'}>
            <AppButton text={'SCHEDULE AN INITIAL CONSULTATION NOW'} />
          </Link>
        </div>
      </section>
    </>
  )
}

export default Services
