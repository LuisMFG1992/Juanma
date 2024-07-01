import { MdAttachMoney } from 'react-icons/md'
import { GrOptimize } from 'react-icons/gr'
import { HiOutlineLightBulb } from 'react-icons/hi'
import { LuBrainCircuit } from 'react-icons/lu'
import { BsDatabaseUp } from 'react-icons/bs'
import { IoOptionsOutline } from 'react-icons/io5'

const howDoWeHelpYou = [
  {
    icon: <MdAttachMoney size={35} />,
    title: 'Optimize Your \nBusiness Case',
    text: "Maximize your project's return on investment by up to 15% through our specialized optimization services. Our team provides detailed analyses and custom-tailored strategies that align with your financial models, helping you make informed decisions quickly."
  },
  {
    icon: <GrOptimize size={35} />,
    title: `Improve Efficiency & \nReduce Risk`,
    text: 'Streamline your project workflows by leveraging our expert consulting services. We reduce manual effort, ensuring smoother more efficient operation and mitigating risks associated with inaccurate data inputs.'
  },
  {
    icon: <HiOutlineLightBulb size={35} />,
    title: 'Get a Fresh \nPerspective',
    text: 'Receive unbiased, expert evaluations of your project designs. Our tailored solutions are crafted to meet the diverse needs of different markets and specific client requirements, ensuring your projects are both innovative and effective.'
  }
]

const whatWeDoBest = [
  {
    icon: <MdAttachMoney size={50} />,
    title: 'Increase of \nproject values'
  },
  {
    icon: <LuBrainCircuit size={50} />,
    title: 'Identify best project opportunities'
  },
  {
    icon: <BsDatabaseUp size={50} />,
    title: 'Manage thousands \nof data points'
  },
  {
    icon: <IoOptionsOutline size={50} />,
    title: 'Adapt to \nindustry shifts'
  }
]

export { howDoWeHelpYou, whatWeDoBest }
