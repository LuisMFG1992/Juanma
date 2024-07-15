import { ContactForm, Map } from '../components'
import { googleMapAddress } from '../constants'

import { MdOutlineEmail } from 'react-icons/md'
// import { GrLocation } from 'react-icons/gr'
import { FiSmartphone } from 'react-icons/fi'
import { contactInfo } from '../constants'
import { useTranslation } from 'react-i18next'

const Contact = () => {
  const { t } = useTranslation()

  return (
    <>
      <section className='body-font text-gray-600'>
        <p className='w-full pt-10 text-center text-subtitle'>
          {t('contact_paragraph')}
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
                    {t('contact_card_phone')}
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
                    {t('contact_card_mail')}
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
      <h1 className='w-full pt-8 text-center text-title font-semibold text-primary'>
        {t('contact_form_title')}
      </h1>
      <div className='flex justify-center'>
        <p className='max-w-[800px] px-2 pb-10 pt-4 text-center text-paragraph sm:px-6'>
          {t('contact_form_paragraph')}
        </p>
      </div>
      <ContactForm />
      <Map url={googleMapAddress} />
    </>
  )
}

export default Contact
