import ProcessFlow from './ProcessFlow'

import { PiSolarPanel } from 'react-icons/pi'
import { GiBatteryPackAlt } from 'react-icons/gi'
import { FaCheckDouble } from 'react-icons/fa'
import { LiaSearchSolid } from 'react-icons/lia'
import { FaRegHandshake } from 'react-icons/fa'
import { BsDatabaseGear } from 'react-icons/bs'
import { Trans, useTranslation } from 'react-i18next'

const HowWeWork = () => {
  const { t } = useTranslation()

  return (
    <section className='flex flex-col gap-8 px-2 py-24 sm:px-6'>
      <div className='flex flex-col gap-4'>
        <h2 className='text-center text-title font-medium text-primary'>
          {t('services_howDoWeWork_title')}
        </h2>
        <p className='text-center text-paragraph leading-relaxed lg:px-52'>
          {t('services_howDoWeWork_paragraph')}
        </p>
      </div>

      <section className='flex justify-center'>
        <div className='flex max-w-[1400px] flex-col items-center justify-between gap-8 md:flex-row lg:justify-evenly '>
          {/* content */}
          <div className='flex flex-col gap-8 px-6 md:ml-[40px] md:w-1/2 md:px-0 lg:ml-[80px] '>
            <h3 className='text-subtitle font-semibold text-primary'>
              {t('services_howDoWeWork_sideSubtitle')}
            </h3>
            <ul className='flex  flex-col gap-8'>
              <li className='text-paragraph'>
                <Trans
                  i18nKey={'services_howDoWeWork_sideFirstParagraph'}
                  components={{
                    1: <strong></strong>
                  }}
                />
              </li>
              <li className='text-paragraph'>
                <Trans
                  i18nKey={'services_howDoWeWork_sideSecondParagraph'}
                  components={{
                    1: <strong></strong>
                  }}
                />
              </li>
            </ul>
          </div>

          {/* timeline */}
          <div className='px-6 md:w-1/2'>
            <div className='relative flex pb-12'>
              <div className='absolute inset-0  left-2 flex h-full w-10 items-center justify-center'>
                <div className='pointer-events-none h-full w-1 bg-gray-200' />
              </div>
              <div className='relative inline-flex size-14 flex-shrink-0 items-center justify-center rounded-full bg-lightGray text-white'>
                <PiSolarPanel size={30} />
              </div>
              <div className='flex-grow pl-4'>
                <h2 className='mb-1 text-subtitle font-semibold text-primary'>
                  {t('services_howDoWeWork_Icon1')}
                </h2>
              </div>
            </div>
            <div className='relative flex pb-12'>
              <div className='absolute inset-0  left-2 flex h-full w-10 items-center justify-center'>
                <div className='pointer-events-none h-full w-1 bg-gray-200' />
              </div>
              <div className='relative inline-flex size-14 flex-shrink-0 items-center justify-center rounded-full bg-primary text-white'>
                <FaCheckDouble size={30} />
              </div>
              <div className='flex-grow pl-4'>
                <h2 className='mb-1 text-subtitle font-semibold text-primary'>
                  {t('services_howDoWeWork_Icon2')}
                </h2>
              </div>
            </div>
            <div className='relative flex pb-12'>
              <div className='absolute inset-0 left-2 flex h-full w-10 items-center justify-center'>
                <div className='pointer-events-none h-full w-1 bg-gray-200' />
              </div>
              <div className='relative inline-flex size-14 flex-shrink-0 items-center justify-center rounded-full bg-primary text-white'>
                <BsDatabaseGear size={30} />
              </div>
              <div className='flex-grow pl-4'>
                <h2 className='mb-1 text-subtitle font-semibold text-primary'>
                  {t('services_howDoWeWork_Icon3')}
                </h2>
              </div>
            </div>
            <div className='relative flex pb-12'>
              <div className='absolute inset-0  left-2 flex h-full w-10 items-center justify-center'>
                <div className='pointer-events-none h-full w-1 bg-gray-200' />
              </div>
              <div className='relative inline-flex size-14 flex-shrink-0 items-center justify-center rounded-full bg-primary text-white'>
                <LiaSearchSolid size={30} />
              </div>
              <div className='flex-grow pl-4'>
                <h2 className='mb-1 text-subtitle font-semibold text-primary'>
                  {t('services_howDoWeWork_Icon4')}
                </h2>
              </div>
            </div>
            <div className='relative flex'>
              <div className='relative inline-flex size-14 flex-shrink-0 items-center justify-center rounded-full bg-lightGray text-white'>
                <FaRegHandshake size={30} />
              </div>
              <div className='flex-grow pl-4'>
                <h2 className='mb-1 text-subtitle font-semibold text-primary'>
                  {t('services_howDoWeWork_Icon5')}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

export default HowWeWork
