import { useState } from 'react'
import { contactInfo, googleMapAddress } from '../constants'
import AppInput from './AppInput'

const inputs = [
  { id: 'name', name: 'Name', inputType: 'text', require: true },
  { id: 'company', name: 'Company Name', inputType: 'text', require: true },
  { id: 'email', name: 'Email', inputType: 'email', require: true },
  { id: 'phone', name: 'Phone', inputType: 'tel', require: true },
  { id: 'subject', name: 'Subject', inputType: 'text', require: true }
]

const ContactWithMap = () => {
  const [formData, setFormData] = useState({})

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(formData)
    setFormData(formData)
  }
  return (
    <>
      <section className='body-font flex justify-center text-gray-600'>
        <div className='flex  flex-col justify-center gap-8 px-5 py-24 sm:flex-nowrap sm:gap-6 md:flex-row '>
          {/* iframe */}
          <div className='relative flex h-96 w-full items-end justify-center overflow-hidden rounded-lg bg-gray-300 p-10 md:h-auto '>
            <iframe
              width='100%'
              height='100%'
              className='absolute inset-0'
              title='map'
              src={googleMapAddress}
            ></iframe>
            <div className='relative hidden w-[95%] flex-wrap rounded bg-white py-6 shadow-md md:flex'>
              <div className='px-6 lg:w-1/2'>
                <h2 className='title-font  text-xs font-semibold tracking-widest text-gray-900'>
                  ADDRESS
                </h2>
                <p className='mt-1'>{contactInfo.address}</p>
              </div>
              <div className='mt-4 px-6 lg:mt-0 lg:w-1/2'>
                <h2 className='title-font text-xs font-semibold tracking-widest text-primary'>
                  EMAIL
                </h2>
                <a
                  href={`mailto:${contactInfo.mail}`}
                  className='leading-relaxed text-primary'
                >
                  {contactInfo.mail}
                </a>
                <h2 className='title-font mt-4 text-xs font-semibold tracking-widest text-primary'>
                  PHONE
                </h2>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className='leading-relaxed'
                >
                  {contactInfo.phone}
                </a>
              </div>
            </div>
          </div>
          <form
            action=''
            onSubmit={handleSubmit}
            className='max-w-[600px] md:max-w-[800px]'
          >
            <h2 className='mb-1 text-subtitle font-medium text-primary'>
              {"Let's chat!"}
            </h2>
            <p className='mb-5 text-paragraph leading-relaxed text-gray-600'>
              For general inquiries or to start the conversation, please fill
              out this contact form and we{"'"}ll get back to you as soon as
              possible.
            </p>
            <div className='grid max-w-[800px] content-center gap-4 pb-4 '>
              <div>
                {inputs.map((input) => (
                  <AppInput
                    key={input.id}
                    id={input.id}
                    name={input.name}
                    inputType={input.inputType}
                    require={input.require}
                    handleInputChange={handleInputChange}
                  />
                ))}
              </div>
            </div>

            <AppInput
              id='message'
              name='Message'
              inputType='textArea'
              require={true}
              handleInputChange={handleInputChange}
            />

            <div className='flex w-full justify-center pt-8'>
              <button className='min-w-56 rounded-lg bg-primary p-2 text-white'>
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}

export default ContactWithMap
