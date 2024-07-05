// ContactWithMap.jsx
import { useState } from 'react'
import { Toaster, toast } from 'react-hot-toast'
import { contactInfo, googleMapAddress } from '../constants'
import AppInput from './AppInput'
import AppButton from './AppButton'
import ConsentCheckbox from './ConsentCheckbox'
import { homeFormSchema } from '../constants/inputSchemas'

const ContactWithMap = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const response = await fetch('https://formspree.io/f/mqazzpwa', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        toast.success('Message sent!', {
          style: {
            background: '#4CAF50',
            color: '#fff'
          }
        })
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        })
      } else {
        toast.error('Sorry, there was an error sending your message.', {
          style: {
            background: '#F44336',
            color: '#fff'
          }
        })
      }
    } catch (error) {
      console.error('Error:', error)
      toast.error('Sorry, there was an error sending your message.', {
        style: {
          background: '#F44336',
          color: '#fff'
        }
      })
    }
  }

  return (
    <>
      <section className='body-font flex justify-center text-gray-600'>
        <Toaster />
        <div className='flex flex-col justify-center gap-8 px-6 py-24 sm:flex-nowrap sm:gap-6 md:flex-row'>
          <div className='relative flex h-96 w-full items-end justify-center overflow-hidden rounded-lg bg-gray-300 p-10 md:h-auto'>
            <iframe
              width='100%'
              height='100%'
              className='absolute inset-0'
              title='map'
              src={googleMapAddress}
            ></iframe>
            <div className='relative hidden w-[95%] flex-wrap rounded bg-white py-6 shadow-md md:flex'>
              <div className='px-6 lg:w-1/2'>
                <h2 className='title-font text-xs font-semibold tracking-widest text-primary'>
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
                  className='leading-relaxed'
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
          <div className='max-w-[600px] md:max-w-[800px]'>
            <h2 className='mb-1 text-subtitle font-medium text-primary'>
              {"Let's chat!"}
            </h2>
            <p className='mb-5 text-paragraph leading-relaxed text-gray-600'>
              For general inquiries or to start the conversation, please fill
              out this contact form and we{"'"}ll get back to you as soon as
              possible.
            </p>
            <form
              onSubmit={handleSubmit}
              className='flex max-w-[800px] flex-col justify-center gap-6'
            >
              <div>
                <div className='flex flex-col gap-2'>
                  {homeFormSchema.map((input) => (
                    <AppInput
                      key={input.id}
                      id={input.id}
                      name={input.name}
                      inputType={input.inputType}
                      required={input.required}
                      handleInputChange={handleInputChange}
                      value={formData[input.id] || ''}
                    />
                  ))}
                </div>
              </div>
              <ConsentCheckbox />
              <div className='flex w-full justify-center'>
                <AppButton text={'Send'} type='submit' width='w-full' />
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactWithMap
