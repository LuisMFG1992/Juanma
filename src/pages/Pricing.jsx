import { Banner } from '../components'

const Pricing = () => {
  return (
    <>
      <Banner />

      <section className='body-font text-gray-600'>
        <div className='container mx-auto flex flex-col items-center px-5 py-14 md:flex-row'>
          <div className='mb-16 flex flex-col items-center text-center md:mb-0 md:w-1/2 md:items-start md:pr-16 md:text-left lg:flex-grow lg:pr-24'>
            <h1 className='title-font mb-4 text-3xl font-medium text-primary sm:text-4xl'>
              Before they sold out
              <br className='hidden lg:inline-block' />
              readymade gluten
            </h1>
            <p className='mb-8 leading-relaxed'>
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
            <h1 className='title-font mb-4 text-3xl font-medium text-primary sm:text-4xl'>
              Before they sold out
              <br className='hidden lg:inline-block' />
              readymade gluten
            </h1>
            <p className='mb-8 leading-relaxed'>
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
            <h1 className='title-font mb-2 text-2xl font-medium text-primary sm:text-3xl'>
              Benefits
            </h1>
            <p className='w-full leading-relaxed text-gray-500 lg:w-1/2'>
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
                <h2 className='title-font mb-2 text-lg font-medium text-primary'>
                  Shooting Stars
                </h2>
                <p className='text-base leading-relaxed'>
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
                <h2 className='title-font mb-2 text-lg font-medium text-primary'>
                  The Catalyzer
                </h2>
                <p className='text-base leading-relaxed'>
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
                <h2 className='title-font mb-2 text-lg font-medium text-primary'>
                  Neptune
                </h2>
                <p className='text-base leading-relaxed'>
                  Fingerstache flexitarian street art 8-bit waist co, subway
                  tile poke farm.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className='body-font bg-light text-gray-600'>
        <div className='container mx-auto px-5 py-24'>
          <h1 className='title-font mb-12 text-center text-3xl font-medium text-gray-900'>
            Testimonials
          </h1>
          <div className='-m-4 flex flex-wrap'>
            <div className='w-full p-4 md:w-1/2'>
              <div className='h-full rounded bg-white p-8'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  className='mb-4 block h-5 w-5 text-primary'
                  viewBox='0 0 975.036 975.036'
                >
                  <path d='M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z'></path>
                </svg>
                <p className='mb-6 leading-relaxed'>
                  Synth chartreuse iPhone lomo cray raw denim brunch everyday
                  carry neutra before they sold out fixie {"90's"} microdosing.
                  Tacos pinterest fanny pack venmo, post-ironic heirloom
                  try-hard pabst authentic iceland.
                </p>
                <a className='inline-flex items-center'>
                  <img
                    alt='testimonial'
                    src='https://dummyimage.com/106x106'
                    className='h-12 w-12 flex-shrink-0 rounded-full object-cover object-center'
                  />
                  <span className='flex flex-grow flex-col pl-4'>
                    <span className='title-font font-medium text-primary'>
                      Holden Caulfield
                    </span>
                    <span className='text-sm text-gray-500'>UI DEVELOPER</span>
                  </span>
                </a>
              </div>
            </div>
            <div className='w-full p-4 md:w-1/2'>
              <div className='h-full rounded bg-white p-8'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  className='mb-4 block h-5 w-5 text-primary'
                  viewBox='0 0 975.036 975.036'
                >
                  <path d='M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z'></path>
                </svg>
                <p className='mb-6 leading-relaxed'>
                  Synth chartreuse iPhone lomo cray raw denim brunch everyday
                  carry neutra before they sold out fixie {"90's"} microdosing.
                  Tacos pinterest fanny pack venmo, post-ironic heirloom
                  try-hard pabst authentic iceland.
                </p>
                <a className='inline-flex items-center'>
                  <img
                    alt='testimonial'
                    src='https://dummyimage.com/107x107'
                    className='h-12 w-12 flex-shrink-0 rounded-full object-cover object-center'
                  />
                  <span className='flex flex-grow flex-col pl-4'>
                    <span className='title-font font-medium text-primary'>
                      Alper Kamu
                    </span>
                    <span className='text-sm text-gray-500'>DESIGNER</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conversation with calendar */}
      <div className='flex h-[400px] w-full items-center justify-center text-3xl font-bold'>
        Calendar
      </div>
    </>
  )
}

export default Pricing
