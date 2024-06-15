import { Member } from '../components'
import { teamMembers } from '../constants/teamMembers'

const About = () => {
  return (
    <div>
      <section className='body-font bg-light text-gray-600'>
        <p className='py-16 text-center text-paragraph leading-relaxed'>
          At FIDgate, we are dedicated to maximizing the potential of renewable
          energy projects through cutting-edge solutions and advanced
          optimization techniques. Our mission is to drive the renewable energy
          sector forward, enabling companies and countries to achieve their
          sustainability goals.
        </p>
      </section>

      <section className='body-font text-gray-600'>
        <div className='mx-auto px-6 py-8'>
          <div className='mb-20 flex w-full flex-col text-center'>
            <h1 className='mb-4 text-title font-medium text-gray-900'>
              Our Key Team Members
            </h1>
            <p className='mx-auto w-2/3 text-paragraph leading-relaxed'>
              Our team consists of PV solar and storage specialists,
              entrepreneurs, and software engineers with more than six decades
              of combined track record. Together, we bring a wealth of
              experience and a passion for sustainability to every project we
              undertake.
            </p>
          </div>
          <div className='grid grid-cols-1 gap-16 lg:grid-cols-2 xl:grid-cols-4'>
            {teamMembers.map((member) => {
              return <Member key={member.name} member={member} />
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
