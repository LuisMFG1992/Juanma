import { Banner, ContactForm, Map } from '../components'
import { googleMapAddress } from '../constants'

const Contact = () => {
  return (
    <>
      <Banner />
      <ContactForm />
      <Map url={googleMapAddress} />
    </>
  )
}

export default Contact
