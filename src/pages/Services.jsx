import { Banner } from '../components'

const Services = () => {
  return (
    <>
      <Banner />

      {/* Services */}
      <section className='body-font text-gray-600'>
        <div className='container mx-auto px-5 py-24'>
          <div className='mb-20 text-center'>
            <h1 className='title-font mb-4 text-2xl font-medium text-gray-900 sm:text-3xl'>
              Our services
            </h1>
            <p className='text-gray-500s mx-auto text-base leading-relaxed lg:w-3/4 xl:w-2/4'>
              Blue bottle crucifix vinyl post-ironic four dollar toast vegan
              taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh
              mi pug.
            </p>
            <div className='mt-6 flex justify-center'>
              <div className='inline-flex h-1 w-16 rounded-full bg-primary'></div>
            </div>
          </div>
          <div className='-mx-4 -mb-10 -mt-4 flex flex-wrap space-y-6 sm:-m-4 md:space-y-0'>
            <div className='flex p-4 md:w-1/3'>
              <div className='mb-4 inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-light text-primary'>
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
              <div className='flex-grow pl-6'>
                <h2 className='title-font mb-2 text-lg font-medium text-gray-900'>
                  Shooting Stars
                </h2>
                <p className='text-base leading-relaxed'>
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine, ramps microdosing
                  banh mi pug VHS try-hard ugh iceland kickstarter tumblr
                  live-edge tilde.
                </p>
              </div>
            </div>
            <div className='flex p-4 md:w-1/3'>
              <div className='mb-4 inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-light text-primary'>
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
              <div className='flex-grow pl-6'>
                <h2 className='title-font mb-2 text-lg font-medium text-gray-900'>
                  The Catalyzer
                </h2>
                <p className='text-base leading-relaxed'>
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine, ramps microdosing
                  banh mi pug VHS try-hard ugh iceland kickstarter tumblr
                  live-edge tilde.
                </p>
              </div>
            </div>
            <div className='flex p-4 md:w-1/3'>
              <div className='mb-4 inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-light text-primary'>
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
              <div className='flex-grow pl-6'>
                <h2 className='title-font mb-2 text-lg font-medium text-gray-900'>
                  Neptune
                </h2>
                <p className='text-base leading-relaxed'>
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine, ramps microdosing
                  banh mi pug VHS try-hard ugh iceland kickstarter tumblr
                  live-edge tilde.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className='body-font bg-light text-gray-600'>
        <div className='container mx-auto flex flex-col items-center px-5 py-24 md:flex-row'>
          <div className='mb-16 flex flex-col items-center text-center md:mb-0 md:w-1/2 md:items-start md:pr-16 md:text-left lg:flex-grow lg:pr-24'>
            <h1 className='title-font mb-4 text-3xl font-medium text-gray-900 sm:text-4xl'>
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

      {/* Why choosing us */}
      <section className='body-font  text-gray-600'>
        <div className='container mx-auto px-5 py-24'>
          <div className='mb-20 flex w-full flex-col text-center'>
            <h1 className='title-font mb-4 text-2xl font-medium text-gray-900 sm:text-3xl'>
              Why choosing us
            </h1>
            <p className='mx-auto text-base leading-relaxed lg:w-2/3'>
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              {"haven't"} heard of them man bun deep jianbing selfies heirloom
              prism food truck ugh squid celiac humblebrag.
            </p>
          </div>
          <div className='flex flex-wrap'>
            <div className='border-l-2 border-gray-200 border-opacity-60 px-8 py-6 md:w-full lg:w-1/2 xl:w-1/4'>
              <h2 className='title-font mb-2 text-lg font-medium text-gray-900 sm:text-xl'>
                Shooting Stars
              </h2>
              <p className='mb-4 text-base leading-relaxed'>
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery
                hexagon disrupt edison bulbche.
              </p>
            </div>
            <div className='border-l-2 border-gray-200 border-opacity-60 px-8 py-6 md:w-full lg:w-1/2 xl:w-1/4'>
              <h2 className='title-font mb-2 text-lg font-medium text-gray-900 sm:text-xl'>
                The Catalyzer
              </h2>
              <p className='mb-4 text-base leading-relaxed'>
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery
                hexagon disrupt edison bulbche.
              </p>
            </div>
            <div className='border-l-2 border-gray-200 border-opacity-60 px-8 py-6 md:w-full lg:w-1/2 xl:w-1/4'>
              <h2 className='title-font mb-2 text-lg font-medium text-gray-900 sm:text-xl'>
                Neptune
              </h2>
              <p className='mb-4 text-base leading-relaxed'>
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery
                hexagon disrupt edison bulbche.
              </p>
            </div>
            <div className='border-l-2 border-gray-200 border-opacity-60 px-8 py-6 md:w-full lg:w-1/2 xl:w-1/4'>
              <h2 className='title-font mb-2 text-lg font-medium text-gray-900 sm:text-xl'>
                Melanchole
              </h2>
              <p className='mb-4 text-base leading-relaxed'>
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery
                hexagon disrupt edison bulbche.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services
