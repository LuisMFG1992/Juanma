import { Link } from 'react-router-dom'
import logo from '../assets/logoNew.svg'
import { FaLinkedin } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation()

  return (
    <>
      <footer className='body-font flex flex-col justify-between bg-primary p-6 text-gray-600 sm:flex-row sm:gap-6'>
        <div className='flex justify-center sm:justify-start'>
          <Link
            to={'/'}
            className='title-font flex flex-col items-center justify-center font-medium text-gray-900 md:justify-start'
          >
            <img src={logo} alt='' className='h-[55px] sm:h-[60px]' />
          </Link>
        </div>
        <div className='flex flex-col items-center gap-4 pt-4 text-paragraph sm:flex-row sm:text-center md:gap-6'>
          <p className='text-center text-white'>{t('footer_copyright')}</p>
          <Link to={'/privacyPolicy'} className='text-white'>
            {t('footer_privacyPolicy')}
          </Link>
          <Link to={'https://www.linkedin.com/company/fidgate'}>
            <FaLinkedin size={40} className='text-primary' />
          </Link>
        </div>
      </footer>
    </>
  )
}

export default Footer
