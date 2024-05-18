import Juan from '../assets/Juan.png'
import Nicholaj from '../assets/Nicholaj.png'
import Manuel from '../assets/Manuel.png'

import {
  Banner,
  Mission
  // Quote
} from '../components'

const About = () => {
  return (
    <div>
      <Banner />
      {/* <Quote /> */}
      <Mission />
      <section className='body-font bg-light text-gray-600'>
        <div className='container mx-auto px-5 py-24'>
          <div className='mb-20 flex w-full flex-col text-center'>
            <h1 className='title-font mb-4 text-2xl font-medium text-gray-900 sm:text-3xl'>
              Master Cleanse Reliac Heirloom
            </h1>
            <p className='mx-auto text-base leading-relaxed lg:w-2/3'>
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              {"haven't"} heard of them man bun deep jianbing selfies heirloom
              prism food truck ugh squid celiac humblebrag.
            </p>
          </div>
          <div className='-m-4 flex flex-wrap text-center'>
            <div className='w-full p-4 sm:w-1/2 md:w-1/4'>
              <div className='rounded-lg border-2 border-gray-200 bg-white px-4 py-6'>
                <svg
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  className='mb-3 inline-block h-12 w-12 text-primary'
                  viewBox='0 0 24 24'
                >
                  <path d='M8 17l4 4 4-4m-4-5v9'></path>
                  <path d='M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29'></path>
                </svg>
                <h2 className='title-font text-3xl font-medium text-gray-900'>
                  2.7K
                </h2>
                <p className='leading-relaxed'>Downloads</p>
              </div>
            </div>
            <div className='w-full p-4 sm:w-1/2 md:w-1/4'>
              <div className='rounded-lg border-2 border-gray-200 bg-white px-4 py-6'>
                <svg
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  className='mb-3 inline-block h-12 w-12 text-primary'
                  viewBox='0 0 24 24'
                >
                  <path d='M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2'></path>
                  <circle cx='9' cy='7' r='4'></circle>
                  <path d='M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75'></path>
                </svg>
                <h2 className='title-font text-3xl font-medium text-gray-900'>
                  1.3K
                </h2>
                <p className='leading-relaxed'>Users</p>
              </div>
            </div>
            <div className='w-full p-4 sm:w-1/2 md:w-1/4'>
              <div className='rounded-lg border-2 border-gray-200 bg-white px-4 py-6'>
                <svg
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  className='mb-3 inline-block h-12 w-12 text-primary'
                  viewBox='0 0 24 24'
                >
                  <path d='M3 18v-6a9 9 0 0118 0v6'></path>
                  <path d='M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z'></path>
                </svg>
                <h2 className='title-font text-3xl font-medium text-gray-900'>
                  74
                </h2>
                <p className='leading-relaxed'>Files</p>
              </div>
            </div>
            <div className='w-full p-4 sm:w-1/2 md:w-1/4'>
              <div className='rounded-lg border-2 border-gray-200 bg-white px-4 py-6'>
                <svg
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  className='mb-3 inline-block h-12 w-12 text-primary'
                  viewBox='0 0 24 24'
                >
                  <path d='M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'></path>
                </svg>
                <h2 className='title-font text-3xl font-medium text-gray-900'>
                  46
                </h2>
                <p className='leading-relaxed'>Places</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='body-font text-gray-600'>
        <div className='mx-auto px-5 py-24'>
          <div className='mb-20 flex w-full flex-col text-center'>
            <h1 className='title-font mb-4 text-2xl font-medium text-gray-900'>
              OUR TEAM
            </h1>
            <p className='mx-auto text-base leading-relaxed lg:w-2/3'>
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              {"haven't"} heard of them.
            </p>
          </div>
          <div className='-m-4 flex flex-wrap justify-center'>
            <div className='p-4 md:w-1/2 lg:w-1/4'>
              <div className='flex h-full flex-col items-center text-center'>
                <img
                  alt='team'
                  className='mb-4 h-56 w-56 flex-shrink-0 rounded-full object-cover object-center'
                  src={Juan}
                />
                <div className='w-full'>
                  <h2 className='title-font text-lg font-medium text-primary'>
                    JUAN MANUEL ROLDAN
                  </h2>
                  <h3 className='mb-1 text-gray-500'>
                    PV Optimization Expert & Founder
                  </h3>
                  <h3 className='mb-3 text-gray-500'>MSc. Mechanical Eng.</h3>
                  <p className='mb-4'>
                    {
                      'Track-record providing technical & commercial advise for +5 GW in +15 countries, >7 years in Energy Industry.(CIP, European Energy-DK'
                    }
                  </p>
                  <span className='inline-flex'>
                    <a className='text-primary'>
                      <svg
                        fill='none'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        className='h-5 w-5'
                        viewBox='0 0 24 24'
                      >
                        <path d='M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z'></path>
                      </svg>
                    </a>
                    <a className='ml-2 text-primary'>
                      <svg
                        fill='none'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        className='h-5 w-5'
                        viewBox='0 0 24 24'
                      >
                        <path d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z'></path>
                      </svg>
                    </a>
                    <a className='ml-2 text-primary'>
                      <svg
                        fill='none'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        className='h-5 w-5'
                        viewBox='0 0 24 24'
                      >
                        <path d='M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z'></path>
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className='p-4 md:w-1/2 lg:w-1/4'>
              <div className='flex h-full flex-col items-center text-center'>
                <img
                  alt='team'
                  className='mb-4 h-56 w-56 flex-shrink-0 rounded-full object-cover object-center'
                  src={Nicholaj}
                />
                <div className='w-full'>
                  <h2 className='title-font text-lg font-medium text-primary'>
                    NICHOLAJ HANSEN
                  </h2>
                  <h3 className='mb-1 text-gray-500'>Strategic Advisor</h3>
                  <h3 className='mb-3 text-gray-500'>
                    MSc. Copenhagen Business School
                  </h3>
                  <p className='mb-4'>
                    {
                      'All-round business and innovation expert, >20 years of experience as an international executive and entrepreneur in Sustainable businesses.'
                    }
                  </p>
                  <span className='inline-flex'>
                    <a className='text-primary'>
                      <svg
                        fill='none'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        className='h-5 w-5'
                        viewBox='0 0 24 24'
                      >
                        <path d='M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z'></path>
                      </svg>
                    </a>
                    <a className='ml-2 text-primary'>
                      <svg
                        fill='none'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        className='h-5 w-5'
                        viewBox='0 0 24 24'
                      >
                        <path d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z'></path>
                      </svg>
                    </a>
                    <a className='ml-2 text-primary'>
                      <svg
                        fill='none'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        className='h-5 w-5'
                        viewBox='0 0 24 24'
                      >
                        <path d='M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z'></path>
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className='p-4 md:w-1/2 lg:w-1/4'>
              <div className='flex h-full flex-col items-center text-center'>
                <img
                  alt='team'
                  className='mb-4 h-56 w-56 flex-shrink-0 rounded-full object-cover object-center'
                  src={Manuel}
                />
                <div className='w-full'>
                  <h2 className='title-font text-lg font-medium text-primary'>
                    MANUEL GIMENEZ
                  </h2>
                  <h3 className='mb-1 text-gray-500'>
                    Senior Software Developer
                  </h3>
                  <h3 className='mb-3 text-gray-500'>
                    PhD. Mechanical Eng. & AI Scientist.{' '}
                  </h3>
                  <p className='mb-4'>
                    {
                      'Expert in the area of optimization of complex mathematical models. Entrepreneur with experience in scientific modeling and Artificial Intelligence.'
                    }
                  </p>
                  <span className='inline-flex'>
                    <a className='text-primary'>
                      <svg
                        fill='none'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        className='h-5 w-5'
                        viewBox='0 0 24 24'
                      >
                        <path d='M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z'></path>
                      </svg>
                    </a>
                    <a className='ml-2 text-primary'>
                      <svg
                        fill='none'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        className='h-5 w-5'
                        viewBox='0 0 24 24'
                      >
                        <path d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z'></path>
                      </svg>
                    </a>
                    <a className='ml-2 text-primary'>
                      <svg
                        fill='none'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        className='h-5 w-5'
                        viewBox='0 0 24 24'
                      >
                        <path d='M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z'></path>
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
