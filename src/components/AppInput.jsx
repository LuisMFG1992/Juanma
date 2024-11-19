// AppInput.jsx
const AppInput = ({
  id,
  name,
  inputType,
  handleInputChange,
  required = false,
  value
}) => {
  const handleChange = (e) => {
    handleInputChange(e)
  }

  return (
    <div>
      <div className='flex flex-col gap-1'>
        <label htmlFor={id} className='text-paragraph leading-7 text-gray-600'>
          {name}
        </label>
        {inputType !== 'textArea' ? (
          <input
            required={required}
            type={inputType}
            id={id}
            name={id}
            value={value}
            className='w-full rounded border border-gray-300 bg-light bg-opacity-50 px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary'
            onChange={handleChange}
          />
        ) : (
          <textarea
            required={required}
            id={id}
            name={id}
            value={value}
            className='h-32 w-full resize-none rounded border border-gray-300 bg-light bg-opacity-50 px-3 py-1 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary'
            onChange={handleChange}
          ></textarea>
        )}
      </div>
    </div>
  )
}

export default AppInput
