import { useState } from 'react'

import AppInput from './AppInput'

const inputs = [
  { id: 'name', name: 'Name', inputType: 'text', require: true },
  { id: 'company', name: 'Company', inputType: 'text', require: true },
  { id: 'email', name: 'Email', inputType: 'email', require: true },
  { id: 'phone', name: 'Phone', inputType: 'tel', require: true }
  // { id: 'subject', name: 'Subject', inputType: 'text', require: true }
]

const ContactForm = () => {
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
    <section className='body-font relative text-gray-600'>
      <div className='pb-8'>
        <div className='flex justify-center'>
          <form
            action=''
            onSubmit={handleSubmit}
            className='w-[80%] max-w-[800px]'
          >
            <div className='grid gap-4 md:grid-cols-2'>
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

            <div className='py-2'>
              <AppInput
                id='subject'
                name='Subject'
                inputType='text'
                require={true}
                handleInputChange={handleInputChange}
              />
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
      </div>
    </section>
  )
}

export default ContactForm
