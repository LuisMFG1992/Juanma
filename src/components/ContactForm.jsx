import { useState } from 'react'
import { Toaster, toast } from 'react-hot-toast'
import AppInput from './AppInput'

const inputs = [
  {
    id: 'name',
    name: 'Name',
    inputType: 'text',
    require: true,
    colSpan: 'md:col-span-1'
  },
  {
    id: 'company',
    name: 'Company',
    inputType: 'text',
    require: true,
    colSpan: 'md:col-span-1'
  },
  {
    id: 'email',
    name: 'Email',
    inputType: 'email',
    require: true,
    colSpan: 'md:col-span-1'
  },
  {
    id: 'phone',
    name: 'Phone',
    inputType: 'tel',
    require: true,
    colSpan: 'md:col-span-1'
  },
  {
    id: 'subject',
    name: 'Subject',
    inputType: 'text',
    require: true,
    colSpan: 'md:col-span-2'
  },
  {
    id: 'message',
    name: 'Message',
    inputType: 'textArea',
    require: true,
    colSpan: 'md:col-span-2'
  }
]

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
            <div className='grid gap-4 md:grid-cols-2'>
              {inputs.map((input) => (
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

            <div className='flex w-full justify-center pt-8'>
              <button className='min-w-56 rounded-lg bg-primary p-2 text-white'>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
