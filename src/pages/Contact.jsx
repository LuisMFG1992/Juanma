import { ContactForm, Map } from '../components'
import { googleMapAddress } from '../constants'

import { MdOutlineEmail } from 'react-icons/md'
// import { GrLocation } from 'react-icons/gr'
import { FiSmartphone } from 'react-icons/fi'
import { contactInfo } from '../constants'

const Contact = () => {
  return (
    <>
      <section className='body-font text-gray-600'>
        <p className='w-full pt-10 text-center text-subtitle'>
          Discover first-hand how FIDgate can improve your business
        </p>
        <div className='container mx-auto px-5 py-8'>
          <div className='-m-4 flex flex-wrap justify-center'>
            <div className='w-full p-4 md:w-1/3'>
              <div className='flex h-full flex-col rounded-lg bg-gray-100 p-8'>
                <div className='mb-3 flex items-center'>
                  <div className='mr-3 inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-white'>
                    <FiSmartphone />
                  </div>
                  <h2 className='text-subtitle font-medium text-gray-900'>
                    Phone
                  </h2>
                </div>
                <div className='flex-grow'>
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className='text-base text-paragraph leading-relaxed'
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              </div>
            </div>
            <div className='w-full p-4 md:w-1/3'>
              <div className='flex h-full flex-col rounded-lg bg-gray-100 p-8'>
                <div className='mb-3 flex items-center'>
                  <div className='mr-3 inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-white'>
                    <MdOutlineEmail />
                  </div>
                  <h2 className='text-subtitle font-medium text-gray-900'>
                    Mail
                  </h2>
                </div>
                <div className='flex-grow'>
                  <a
                    href={`mailto:${contactInfo.mail}`}
                    className='text-base text-paragraph leading-relaxed'
                  >
                    {contactInfo.mail}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <h1 className='w-full pt-8 text-center text-title font-semibold'>
        Let{"'"}s chat!
      </h1>
      <div className='flex justify-center'>
        <p className='max-w-[800px] px-6 pb-10 pt-4 text-center text-paragraph'>
          For general inquiries or to start the conversation, please fill out
          this contact form and we{"'"}ll get back to you as soon as possible.
        </p>
      </div>
      <ContactForm />
      <Map url={googleMapAddress} />
    </>
  )
}

export default Contact
