import { Link } from 'react-router-dom'

const Services = () => {
  return (
    <>
      <section className='body-font bg-light text-gray-600'>
        <div className='container mx-auto px-5 py-24'>
          <div className='mb-20 text-center'>
            <h1 className='title-font mb-4 text-title font-medium text-gray-900'>
              WHAT DO WE DO
            </h1>
            <p className='text-gray-500s mx-auto mb-4 text-paragraph  leading-relaxed lg:w-3/4 xl:w-2/4'>
              Solutions Born from Collaboration
            </p>
            <p className='text-gray-500s mx-auto text-paragraph leading-relaxed lg:w-3/4 '>
              We harness a close collaboration between industry knowledge, data
              analytics, sophisticated modeling, and cutting-edge technology.
              Our services facilitate complex decision-making, boosting the
              profitability and operational efficiency of businesses through our
              Optimization as a Service (OaaS). By aligning our expertise with
              your business goals, we transform solar energy projects into
              optimized, high-performing assets.
            </p>
            <div className='mt-6 flex justify-center'>
              <div className='inline-flex h-1 w-16 rounded-full bg-primary'></div>
            </div>
          </div>
          <div className='-mx-4 -mb-10 -mt-4 flex flex-wrap space-y-6 sm:-m-4 md:space-y-0'>
            <div className='flex flex-col items-center p-4 text-center md:w-1/3'>
              <div className='mb-5 inline-flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-white text-primary'>
                <svg
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  className='h-10 w-10'
                  viewBox='0 0 24 24'
                >
                  <path d='M22 12h-4l-3 9L9 3l-3 9H2'></path>
                </svg>
              </div>
              <div className='flex-grow'>
                <h2 className='mb-6 text-lg text-subtitle font-medium text-gray-900'>
                  Streamlined Decision-Making & Cost Efficiency
                </h2>
                <p className='text-paragraph  leading-relaxed'>
                  By leveraging advanced PV design tools, we cut operational
                  costs and minimize data risks, ensuring secure and
                  cost-effective project management.
                </p>
              </div>
            </div>
            <div className='flex flex-col items-center p-4 text-center md:w-1/3'>
              <div className='mb-5 inline-flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-white text-primary'>
                <svg
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  className='h-10 w-10'
                  viewBox='0 0 24 24'
                >
                  <circle cx='6' cy='6' r='3'></circle>
                  <circle cx='6' cy='18' r='3'></circle>
                  <path d='M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12'></path>
                </svg>
              </div>
              <div className='flex-grow'>
                <h2 className='mb-6 text-lg text-subtitle font-medium text-gray-900'>
                  Enhanced ROI & Pipeline Performance
                </h2>
                <p className='text-paragraph  leading-relaxed'>
                  Our optimal designs can boost your project{"'"}s return on
                  investment by up to 15%, maximizing financial outcomes
                  efficiently.
                </p>
              </div>
            </div>
            <div className='flex flex-col items-center p-4 text-center md:w-1/3'>
              <div className='mb-5 inline-flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-white text-primary'>
                <svg
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  className='h-10 w-10'
                  viewBox='0 0 24 24'
                >
                  <path d='M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2'></path>
                  <circle cx='12' cy='7' r='4'></circle>
                </svg>
              </div>
              <div className='flex-grow'>
                <h2 className='mb-6 text-lg text-subtitle font-medium text-gray-900'>
                  Tailored Market Solutions
                </h2>
                <p className='text-paragraph  leading-relaxed'>
                  We deliver customized solutions that are specifically designed
                  to meet the diverse demands of different markets and the
                  unique needs of our clients.
                </p>
              </div>
            </div>
          </div>
          {/* <Link to={'/services'}>
            <button className='mx-auto mt-16 flex rounded border-0 bg-primary px-8 py-2 text-lg text-white hover:bg-opacity-80 focus:outline-none'>
              Learn more
            </button>
          </Link> */}
        </div>
      </section>
    </>
  )
}

export default Services
