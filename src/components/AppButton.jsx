import {
  bgColorVariant,
  textColorVariant,
  borderColorVariant,
  hoverVariant
} from '../utils/classes'

const AppButton = ({
  text,
  bgColor = 'primary',
  textColor = 'white',
  border = '',
  hover,
  type = 'button',
  width = '',
  callBack
}) => {
  return (
    <button
      type={type}
      className={`${bgColorVariant[bgColor]} ${textColorVariant[textColor]} ${borderColorVariant[border]} min-w-32 ${width} rounded-lg px-4 py-2 text-paragraph hover:${hoverVariant[hover]}`}
      onClick={callBack}
    >
      {text}
    </button>
  )
}

export default AppButton
