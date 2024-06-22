import React from 'react'

const AppInput = ({
  id,
  name,
  inputType,
  handleInputChange,
  require = false,
  value // Nuevo prop para manejar el valor desde el padre
}) => {
  const handleChange = (e) => {
    handleInputChange(e) // Llama a la función handleInputChange del padre
  }

  return (
    <div>
      <div className='flex flex-col gap-1'>
        <label htmlFor={id} className='text-paragraph leading-7 text-gray-600'>
          {name}
        </label>
        {inputType !== 'textArea' ? (
          <input
            required={require}
            type={inputType}
            id={id}
            name={id}
            value={value} // Vincula el valor del input con el prop value
            className='w-full rounded border border-gray-300 bg-gray-100 bg-opacity-50 px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary'
            onChange={handleChange} // Usa handleChange para input
          />
        ) : (
          <textarea
            required={require}
            id={id}
            name={name} // Asegura que el atributo name sea correcto
            value={value} // Vincula el valor del textarea con el prop value
            className='h-32 w-full resize-none rounded border border-gray-300 bg-gray-100 bg-opacity-50 px-3 py-1 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary'
            onChange={handleChange} // Usa handleChange para textarea
          ></textarea>
        )}
      </div>
    </div>
  )
}

export default AppInput
