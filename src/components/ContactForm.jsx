import { MdOutlineEmail } from 'react-icons/md'
import { GrLocation } from 'react-icons/gr'
import { FiSmartphone } from 'react-icons/fi'
import { contactInfo } from '../constants'

const ContactForm = () => {
  return (
    <section className='body-font relative text-gray-600'>
      {/* Icons */}
      {/* <section className='body-font my-8 flex justify-center rounded-lg bg-light text-gray-600'>
        <div className='container  px-5 py-10'>
          <div className='flex flex-col flex-wrap sm:flex-row'>
            <div className='flex justify-center py-4 sm:w-1/3'>
              <div className='flex h-full items-start'>
                <div className='flex flex-grow flex-col items-center pl-6  sm:items-start'>
                  <div className='flex items-end gap-2 text-3xl text-primary'>
                    <GrLocation />
                    <h2 className='title-font mb-1 text-xs font-medium tracking-widest text-primary'>
                      OFFICES
                    </h2>
                  </div>
                  <p className='mb-5 leading-relaxed'>{contactInfo.address}</p>
                </div>
              </div>
            </div>
            <div className='flex justify-center py-4 sm:w-1/3'>
              <div className='flex h-full items-start'>
                <div className='flex flex-grow flex-col items-center pl-6  sm:items-start'>
                  <div className='flex items-end gap-2 text-3xl text-primary'>
                    <MdOutlineEmail />
                    <h2 className='title-font mb-1 text-xs font-medium tracking-widest text-primary'>
                      MAIL
                    </h2>
                  </div>
                  <p className='mb-5 leading-relaxed'>{contactInfo.mail}</p>
                </div>
              </div>
            </div>
            <div className='flex justify-center py-4 sm:w-1/3'>
              <div className='flex h-full items-start'>
                <div className='flex flex-grow flex-col items-center pl-6  sm:items-start'>
                  <div className='flex items-end gap-2 text-3xl text-primary'>
                    <FiSmartphone />
                    <h2 className='title-font mb-1 text-xs font-medium tracking-widest text-primary'>
                      CELLPHONE
                    </h2>
                  </div>
                  <p className='mb-5 leading-relaxed'>{contactInfo.phone}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className='body-font text-gray-600'>
        <div className='container mx-auto px-5 py-24'>
          <div className='-m-4 flex flex-wrap justify-center'>
            <div className='p-4 md:w-1/3'>
              <div className='flex h-full flex-col rounded-lg bg-gray-100 p-8'>
                <div className='mb-3 flex items-center'>
                  <div className='mr-3 inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-white'>
                    <GrLocation />
                  </div>
                  <h2 className='title-font text-lg font-medium text-gray-900'>
                    Address
                  </h2>
                </div>
                <div className='flex-grow'>
                  <p className='text-base leading-relaxed'>
                    {contactInfo.address}{' '}
                  </p>
                </div>
              </div>
            </div>
            <div className='p-4 md:w-1/3'>
              <div className='flex h-full flex-col rounded-lg bg-gray-100 p-8'>
                <div className='mb-3 flex items-center'>
                  <div className='mr-3 inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-white'>
                    <FiSmartphone />
                  </div>
                  <h2 className='title-font text-lg font-medium text-gray-900'>
                    Cellphone
                  </h2>
                </div>
                <div className='flex-grow'>
                  <p className='text-base leading-relaxed'>
                    {contactInfo.phone}
                  </p>
                </div>
              </div>
            </div>
            <div className='p-4 md:w-1/3'>
              <div className='flex h-full flex-col rounded-lg bg-gray-100 p-8'>
                <div className='mb-3 flex items-center'>
                  <div className='mr-3 inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-white'>
                    <MdOutlineEmail />
                  </div>
                  <h2 className='title-font text-lg font-medium text-gray-900'>
                    Mail
                  </h2>
                </div>
                <div className='flex-grow'>
                  <p className='text-base leading-relaxed'>
                    {contactInfo.mail}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  */}
      <div className='container mx-auto px-5 py-10'>
        <h1 className='pb-8 text-center text-2xl'>
          If you have any question, please {"don't"} hesitate to send us a
          message
        </h1>
        <div className='mx-auto md:w-2/3 lg:w-1/2'>
          <div className='-m-2 flex flex-wrap'>
            <div className='w-1/2 p-2'>
              <div className='relative'>
                <label
                  htmlFor='name'
                  className='text-sm leading-7 text-gray-600'
                >
                  Name
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  className='w-full rounded border border-gray-300 bg-gray-100 bg-opacity-50 px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-primary focus:bg-white focus:ring-2 focus:ring-indigo-200'
                />
              </div>
            </div>
            <div className='w-1/2 p-2'>
              <div className='relative'>
                <label
                  htmlFor='email'
                  className='text-sm leading-7 text-gray-600'
                >
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  className='w-full rounded border border-gray-300 bg-gray-100 bg-opacity-50 px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-primary focus:bg-white focus:ring-2 focus:ring-indigo-200'
                />
              </div>
            </div>
            <div className='w-full p-2'>
              <div className='relative'>
                <label
                  htmlFor='message'
                  className='text-sm leading-7 text-gray-600'
                >
                  Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  className='h-32 w-full resize-none rounded border border-gray-300 bg-gray-100 bg-opacity-50 px-3 py-1 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-primary focus:bg-white focus:ring-2 focus:ring-indigo-200'
                ></textarea>
              </div>
            </div>
            <div className='w-full p-2'>
              <button className='mx-auto flex rounded border-0 bg-primary px-8 py-2 text-lg text-white hover:bg-indigo-600 focus:outline-none'>
                Button
              </button>
            </div>
            <div className='mt-8 w-full border-t border-gray-200 p-2 pt-8 text-center'>
              <a className='text-primary'>example@email.com</a>
              <p className='my-5 leading-normal'>
                49 Smith St. Saint Cloud, MN 56301
              </p>
              <span className='inline-flex'>
                <a className='text-primary'>
                  <svg
                    fill='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    className='h-5 w-5'
                    viewBox='0 0 24 24'
                  >
                    <path d='M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z'></path>
                  </svg>
                </a>
                <a className='ml-4 text-primary'>
                  <svg
                    fill='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    className='h-5 w-5'
                    viewBox='0 0 24 24'
                  >
                    <path d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z'></path>
                  </svg>
                </a>
                <a className='ml-4 text-primary'>
                  <svg
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    className='h-5 w-5'
                    viewBox='0 0 24 24'
                  >
                    <rect
                      width='20'
                      height='20'
                      x='2'
                      y='2'
                      rx='5'
                      ry='5'
                    ></rect>
                    <path d='M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01'></path>
                  </svg>
                </a>
                <a className='ml-4 text-primary'>
                  <svg
                    fill='currentColor'
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
    </section>
  )
}

export default ContactForm
