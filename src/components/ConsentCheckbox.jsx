import { Trans, useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const ConsentCheckbox = () => {
  const { t } = useTranslation()

  return (
    <div className='flex items-center'>
      <input
        id='link-checkbox'
        type='checkbox'
        value=''
        required={true}
        className='h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600'
      />
      <label htmlFor='link-checkbox' className='ms-2 text-sm text-gray-400 '>
        <Trans
          i18nKey={'home_contact_checkBox'}
          components={{
            1: (
              <Link
                to='/privacyPolicy'
                className='text-primary hover:underline dark:text-primary'
              ></Link>
            )
          }}
        />
      </label>
    </div>
  )
}

export default ConsentCheckbox
