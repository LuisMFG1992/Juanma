import { useTranslation } from 'react-i18next'

import { Member } from '../components'

const OurTeam = () => {
  const { t } = useTranslation()

  const teamMembers = t('about_ourKeyTeamMembers_children', {
    returnObjects: true
  })

  return (
    <section className='body-font text-gray-600'>
      <div className='px-5 py-24'>
        <div className='mb-20 flex w-full flex-col items-center text-center'>
          <h1 className='mb-4 text-title font-medium text-primary'>
            {t('about_ourKeyTeamMembers_title')}
          </h1>
          <p className='text-center text-paragraph leading-relaxed md:w-2/3'>
            {t('about_ourKeyTeamMembers_paragraph')}
          </p>
        </div>
        <div className='grid gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5'>
          {teamMembers.map((member, idx) => (
            <Member key={idx} member={member} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurTeam
