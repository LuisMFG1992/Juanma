import { Link } from 'react-router-dom'

const ConsentCheckbox = () => {
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
        I accept the{' '}
        <Link
          to='/privacyPolicy'
          className='text-blue-600 hover:underline dark:text-blue-500'
        >
          Privacy Policy{' '}
        </Link>
        and consent to the use of my personal data to be contacted and receive a
        response to my inquiries.
      </label>
    </div>
  )
}

export default ConsentCheckbox
