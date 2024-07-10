import { BsDatabaseUp } from 'react-icons/bs'
import { GrOptimize } from 'react-icons/gr'
import { HiOutlineLightBulb } from 'react-icons/hi'
import { IoOptionsOutline } from 'react-icons/io5'
import { LuBrainCircuit } from 'react-icons/lu'
import { MdAttachMoney, MdOutlineAttachMoney } from 'react-icons/md'

const howDoWeHelpYouIcons = {
  dollar: <MdAttachMoney size={35} />,
  arrow: <GrOptimize size={35} />,
  lamp: <HiOutlineLightBulb size={35} />
}

const whatWeDoBestIcons = {
  dollar: <MdOutlineAttachMoney size={50} />,
  brain: <LuBrainCircuit size={50} />,
  database: <BsDatabaseUp size={50} />,
  setting: <IoOptionsOutline size={50} />
}

export { howDoWeHelpYouIcons, whatWeDoBestIcons }
