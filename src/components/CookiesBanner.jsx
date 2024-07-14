import { useCookies } from 'react-cookie'
import AppButton from './AppButton'
import { Link } from 'react-router-dom'
import { Trans, useTranslation } from 'react-i18next'

const CookiesBanner = () => {
  const { t } = useTranslation()

  const [cookies, setCookie] = useCookies(['cookieConsent'])
  const giveCookieConsent = () => {
    setCookie('cookieConsent', true, { path: '/' })
  }

  return (
    <section className='fixed bottom-0'>
      <div className='flex w-screen flex-col items-center justify-center gap-4 border-t border-primary bg-white px-6 py-4 md:flex-row md:gap-10'>
        <div className='text-center text-paragraph md:text-start'>
          <Trans
            i18nKey={'cookies_paragraph'}
            components={{
              1: (
                <Link
                  className='font-semibold text-primary underline '
                  to={'/privacyPolicy'}
                ></Link>
              )
            }}
          />
        </div>
        <div className='flex gap-6'>
          <AppButton
            text={t('cookies_button')}
            hover='lighter'
            callBack={giveCookieConsent}
          />
        </div>
      </div>
    </section>
  )
}

export default CookiesBanner
