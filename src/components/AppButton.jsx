import {
  bgColorVariant,
  textColorVariant,
  borderColorVariant
} from '../utils/classes'

const AppButton = ({
  text,
  bgColor = 'primary',
  textColor = 'white',
  border = '',
  type = 'button',
  width = '',
  callBack,
  className
}) => {
  return (
    <button
      type={type}
      className={`${bgColorVariant[bgColor]} ${textColorVariant[textColor]} ${borderColorVariant[border]} ${width} rounded-lg px-4 py-2 text-paragraph hover:brightness-125 ${className}`}
      onClick={callBack}
    >
      {text}
    </button>
  )
}

export default AppButton
