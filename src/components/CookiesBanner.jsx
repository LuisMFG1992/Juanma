import { useCookies } from 'react-cookie'
import AppButton from './AppButton'
import { Link } from 'react-router-dom'

const CookiesBanner = () => {
  const [cookies, setCookie] = useCookies(['cookieConsent'])
  const giveCookieConsent = () => {
    setCookie('cookieConsent', true, { path: '/' })
    // console.log('first')
  }
  return (
    <section className='fixed bottom-0'>
      <div className='flex w-screen flex-col items-center justify-center gap-4 border-t border-primary bg-white px-6 py-4 md:flex-row md:gap-10'>
        <div className='text-center text-paragraph md:text-start'>
          We use cookies to enhance your user experience. By using our website,
          you agree to our use of cookies.{' '}
          <Link
            className='font-semibold text-primary underline '
            to={'/cookiePolicy'}
          >
            Learn more.
          </Link>
        </div>
        <div className='flex gap-6'>
          <AppButton
            text={'Agree'}
            hover='lighter'
            callBack={giveCookieConsent}
          />
        </div>
      </div>
    </section>
  )
}

export default CookiesBanner
