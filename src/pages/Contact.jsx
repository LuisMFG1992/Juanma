import { ContactForm, Map } from '../components'
import { googleMapAddress } from '../constants'

const Contact = () => {
  return (
    <>
      <h1 className='w-full pt-8 text-center text-title font-semibold'>
        Let{"'"}s chat!
      </h1>
      <p className='pt-4 text-center text-paragraph'>
        For general inquiries or to start the conversation, please fill out this
        contact form and we{"'"}ll get back to you as soon as possible.
      </p>
      <ContactForm />
      <Map url={googleMapAddress} />
    </>
  )
}

export default Contact
