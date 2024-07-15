import ProcessFlow from './ProcessFlow'

import { PiSolarPanel } from 'react-icons/pi'
import { GiBatteryPackAlt } from 'react-icons/gi'
import { FaCheckDouble } from 'react-icons/fa'
import { LiaSearchSolid } from 'react-icons/lia'
import { FaRegHandshake } from 'react-icons/fa'
import { BsDatabaseGear } from 'react-icons/bs'

const HowWeWork = () => {
  return (
    <section className='flex flex-col gap-8 px-2 py-24 sm:px-6'>
      <div className='flex flex-col gap-4'>
        <h2 className='text-center text-subtitle font-medium text-primary'>
          HOW WE WORK
        </h2>
        <p className='text-center text-paragraph leading-relaxed lg:px-52'>
          We efficiently combine all required datasets into a complex problem
          and solve it mathematically in minutes. Here{"'"}s a brief overview of
          our process:
        </p>
      </div>

      <section className='flex justify-center'>
        <div className='flex max-w-[1400px] flex-col items-center justify-between gap-8 md:flex-row lg:justify-evenly '>
          {/* content */}
          <div className='flex flex-col gap-4 px-6 md:ml-[100px] md:w-1/2 md:px-0 '>
            <h3 className='text-subtitle font-semibold text-primary'>
              Once we generate the optimal design configuration we also provide:
            </h3>
            <ul className='flex list-inside list-disc flex-col gap-4'>
              <li className='text-paragraph'>
                <strong>Review and Feedback:</strong> Present the optimized
                solutions to the client, incorporating their feedback and making
                adjustments as needed to ensure alignment with their goals.
              </li>
              <li className='text-paragraph'>
                <strong>Implementation Support:</strong> Offer comprehensive
                guidance and support during the implementation phase, ensuring
                seamless integration and maximizing project efficiency.
              </li>
            </ul>
          </div>

          {/* timeline */}
          <div className='w-1/2'>
            <div className='relative flex pb-12'>
              <div className='absolute inset-0 flex h-full w-10 items-center justify-center'>
                <div className='pointer-events-none h-full w-1 bg-gray-200' />
              </div>
              <div className='relative inline-flex size-10 flex-shrink-0 items-center justify-center rounded-full bg-lightGray text-white'>
                <PiSolarPanel size={26} />
              </div>
              <div className='flex-grow pl-4'>
                <h2 className='mb-1 text-paragraph text-gray-900'>
                  Input Parameters (project specifics)
                </h2>
                {/* <p className='leading-relaxed'>
                VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk
                bespoke try-hard cliche palo santo offal.
              </p> */}
              </div>
            </div>
            <div className='relative flex pb-12'>
              <div className='absolute inset-0 flex h-full w-10 items-center justify-center'>
                <div className='pointer-events-none h-full w-1 bg-gray-200' />
              </div>
              <div className='relative inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-white'>
                <FaCheckDouble size={24} />
              </div>
              <div className='flex-grow pl-4'>
                <h2 className='mb-1 text-paragraph text-gray-900'>
                  Data Check by expert
                </h2>
                {/* <p className='leading-relaxed'>
                Vice migas literally kitsch +1 pok pok. Truffaut hot chicken
                slow-carb health goth, vape typewriter.
              </p> */}
              </div>
            </div>
            <div className='relative flex pb-12'>
              <div className='absolute inset-0 flex h-full w-10 items-center justify-center'>
                <div className='pointer-events-none h-full w-1 bg-gray-200' />
              </div>
              <div className='relative inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-white'>
                <BsDatabaseGear size={25} />
              </div>
              <div className='flex-grow pl-4'>
                <h2 className='mb-1 text-paragraph text-gray-900'>
                  Complex Modeling
                </h2>
                {/* <p className='leading-relaxed'>
                Coloring book nar whal glossier master cleanse umami. Salvia +1
                master cleanse blog taiyaki.
              </p> */}
              </div>
            </div>
            <div className='relative flex pb-12'>
              <div className='absolute inset-0 flex h-full w-10 items-center justify-center'>
                <div className='pointer-events-none h-full w-1 bg-gray-200' />
              </div>
              <div className='relative inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-white'>
                <LiaSearchSolid size={25} />
              </div>
              <div className='flex-grow pl-4'>
                <h2 className='mb-1 text-paragraph text-gray-900'>
                  Solution (client{"'"}s requirements)
                </h2>
                {/* <p className='leading-relaxed'>
                VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk
                bespoke try-hard cliche palo santo offal.
              </p> */}
              </div>
            </div>
            <div className='relative flex'>
              <div className='relative inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-lightGray text-white'>
                <FaRegHandshake size={25} />
              </div>
              <div className='flex-grow pl-4'>
                <h2 className='mb-1 text-paragraph text-gray-900'>
                  Financial Closure/FID
                </h2>
                {/* <p className='leading-relaxed'>
                Pitchfork ugh tattooed scenester echo park gastropub whatever
                cold-pressed retro.
              </p> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

export default HowWeWork
