import { Banner } from '../components'

const Pricing = () => {
  return (
    <>
      <Banner />

      {/* InfoSection */}
      <section className='body-font text-gray-600'>
        <div className='container mx-auto flex flex-col items-center px-5 py-14 md:flex-row'>
          <div className='mb-16 flex flex-col items-center text-center md:mb-0 md:w-1/2 md:items-start md:pr-16 md:text-left lg:flex-grow lg:pr-24'>
            <h1 className='text-title mb-4 font-medium text-primary'>
              Before they sold out
              <br className='hidden lg:inline-block' />
              readymade gluten
            </h1>
            <p className='text-paragraph mb-8 leading-relaxed'>
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag. Heirloom echo
              park mlkshk tote bag selvage hot chicken authentic tumeric
              truffaut hexagon try-hard chambray.
            </p>
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

      {/* InfoSection 2 */}
      <section className='body-font bg-light text-gray-600'>
        <div className='container mx-auto flex flex-col items-center px-5 py-14 md:flex-row'>
          <div className='mb-10 w-5/6 md:mb-0 md:w-1/2 lg:w-full lg:max-w-lg'>
            <img
              className='rounded object-cover object-center'
              alt='hero'
              src='https://dummyimage.com/720x600'
            />
          </div>
          <div className='flex flex-col items-center text-center md:w-1/2 md:items-start md:pl-16 md:text-left lg:flex-grow lg:pl-24'>
            <h1 className='text-title mb-4 font-medium text-primary '>
              Before they sold out
              <br className='hidden lg:inline-block' />
              readymade gluten
            </h1>
            <p className='text-paragraph mb-8 leading-relaxed'>
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag. Heirloom echo
              park mlkshk tote bag selvage hot chicken authentic tumeric
              truffaut hexagon try-hard chambray.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className='body-font  text-gray-600'>
        <div className='container mx-auto px-5 py-24'>
          <div className='mb-20 flex w-full flex-col flex-wrap items-center text-center'>
            <h1 className='text-title mb-2 font-medium text-primary sm:text-3xl'>
              Benefits
            </h1>
            <p className='text-paragraph w-full leading-relaxed text-gray-500 lg:w-1/2'>
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table.
            </p>
          </div>
          <div className='-m-4 flex flex-wrap '>
            <div className='p-4 md:w-1/2 xl:w-1/3'>
              <div className='rounded-lg border border-gray-200 bg-white p-6 '>
                <div className='mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-light text-primary'>
                  <svg
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    className='h-6 w-6'
                    viewBox='0 0 24 24'
                  >
                    <path d='M22 12h-4l-3 9L9 3l-3 9H2'></path>
                  </svg>
                </div>
                <h2 className='text-subtitle mb-2 font-medium text-primary'>
                  Shooting Stars
                </h2>
                <p className='text-paragraph leading-relaxed'>
                  Fingerstache flexitarian street art 8-bit waist co, subway
                  tile poke farm.
                </p>
              </div>
            </div>
            <div className='p-4 md:w-1/2 xl:w-1/3'>
              <div className='rounded-lg border border-gray-200 bg-white p-6 '>
                <div className='mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-light text-primary'>
                  <svg
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    className='h-6 w-6'
                    viewBox='0 0 24 24'
                  >
                    <circle cx='6' cy='6' r='3'></circle>
                    <circle cx='6' cy='18' r='3'></circle>
                    <path d='M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12'></path>
                  </svg>
                </div>
                <h2 className='text-subtitle mb-2 font-medium text-primary'>
                  The Catalyzer
                </h2>
                <p className='text-paragraph leading-relaxed'>
                  Fingerstache flexitarian street art 8-bit waist co, subway
                  tile poke farm.
                </p>
              </div>
            </div>
            <div className='p-4 md:w-1/2 xl:w-1/3'>
              <div className='rounded-lg border border-gray-200 bg-white p-6 '>
                <div className='mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-light text-primary'>
                  <svg
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    className='h-6 w-6'
                    viewBox='0 0 24 24'
                  >
                    <path d='M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2'></path>
                    <circle cx='12' cy='7' r='4'></circle>
                  </svg>
                </div>
                <h2 className='text-subtitle mb-2 font-medium text-primary'>
                  Neptune
                </h2>
                <p className='text-paragraph leading-relaxed'>
                  Fingerstache flexitarian street art 8-bit waist co, subway
                  tile poke farm.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center gap-4 px-5 pb-16 text-center'>
          <p className='text-title mb-2 font-medium text-primary'>
            Ready to power up your projects?
          </p>
          <a href='https://calendly.com/jmr-fidgate/'>
            <button className='text-subtitle inline-flex rounded border-0 bg-primary px-6 py-2 text-white hover:bg-opacity-80 focus:outline-none'>
              Book a meeting
            </button>
          </a>
        </div>
      </section>
    </>
  )
}

export default Pricing
