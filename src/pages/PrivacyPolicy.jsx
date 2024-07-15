import { Trans, useTranslation } from 'react-i18next'

const PrivacyPolicy = () => {
  const { t } = useTranslation()
  return (
    <div className='px-6'>
      <Trans
        i18nKey={'privacyPolicy'}
        components={{
          1: <h2 className='mb-4 pt-6 text-subtitle font-medium'></h2>,
          2: <p className='mb-4 text-paragraph'></p>,
          3: <strong></strong>,
          4: (
            <ul className='mb-4 ml-6 list-inside list-disc text-paragraph'></ul>
          ),
          5: <li></li>
        }}
      />
    </div>
  )
}

export default PrivacyPolicy
