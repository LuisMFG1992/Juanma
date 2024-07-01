import { useState } from 'react'
import { Toaster, toast } from 'react-hot-toast'
import AppInput from './AppInput'
import AppButton from './AppButton'
import ConsentCheckbox from './ConsentCheckbox'
import { contactFormSchema } from '../constants/inputSchemas'

const ContactForm = () => {
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

  const handleSubmit = (event) => {
    event.preventDefault()

    fetch('https://formspree.io/f/mqazzpwa', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then((response) => {
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
      })
      .catch((error) => {
        console.error('Error:', error)
        toast.error('Sorry, there was an error sending your message.', {
          style: {
            background: '#F44336',
            color: '#fff'
          }
        })
      })
  }

  return (
    <section className='body-font relative text-gray-600'>
      <Toaster />
      <div className='pb-8'>
        <div className='flex justify-center'>
          <form onSubmit={handleSubmit} className='w-[80%] max-w-[800px]'>
            <div className='grid gap-4 pb-4 md:grid-cols-2'>
              {contactFormSchema.map((input) => (
                <div
                  key={input.id}
                  className={`${input.colSpan} md:${input.colSpan}`}
                >
                  <AppInput
                    id={input.id}
                    name={input.name}
                    inputType={input.inputType}
                    require={input.require}
                    handleInputChange={handleInputChange}
                    value={formData[input.id]}
                  />
                </div>
              ))}
            </div>
            <ConsentCheckbox />
            <div className='flex w-full justify-center pt-4'>
              <AppButton text={'Send'} type='submit' width='w-1/2' />
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
