import { Trans, useTranslation } from 'react-i18next'
import IconTitleText from './IconTitleText'
import { howDoWeHelpYouIcons } from '../constants/iconsRef'

const Services = () => {
  const { t } = useTranslation()

  const children = t('home_howDoWeHelpYouTitle_children', {
    returnObjects: true
  })

  return (
    <>
      <section className='body-font text-gray-600'>
        <div className='px-2 py-24 sm:px-6'>
          <div className='mb-10 text-center'>
            <h1 className='title-font mb-4 text-title font-medium text-primary'>
              {t('home_howDoWeHelpYouTitle_title')}
            </h1>
            <p className='text-gray-500s pb-4 text-paragraph xl:w-full '>
              {t('home_howDoWeHelpYouTitle_firstParagraph')}
            </p>

            <p className='text-gray-500s mx-auto text-paragraph leading-relaxed lg:w-[90%] '>
              <Trans
                i18nKey={'home_howDoWeHelpYouTitle_secondParagraph'}
                components={{ 1: <span className='font-bold text-primary' /> }}
              />
            </p>
            <div className='mt-6 flex justify-center'>
              <div className='inline-flex h-1 w-16 rounded-full bg-primary'></div>
            </div>
          </div>
          {/* <div className='flex flex-col justify-center gap-4 lg:flex-row lg:gap-8 '>
            {howDoWeHelpYou.map((option) => (
              <IconTitleText
                icon={option.icon}
                title={option.title}
                text={option.text}
                key={option.title}
              />
            ))}
          </div> */}
          <div className='flex flex-col justify-center gap-4 lg:flex-row lg:gap-8 '>
            {children.map((item) => (
              <IconTitleText
                icon={howDoWeHelpYouIcons[item.icon]}
                title={item.title}
                text={item.paragraph}
                key={item.id}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Services
