import juan from '../assets/Juan.png'
import manuel from '../assets/Manuel.png'
import nicolas from '../assets/Nicolas.png'
import nicholaj from '../assets/Nicholaj.png'
import rosario from '../assets/Rosario.png'

const navLinks = [
  { url: '/', label: 'home' },
  { url: '/services', label: 'services' },
  { url: '/about', label: 'about' },
  { url: '/contact', label: 'contact' }
]

const footerLinks = ['Copyright', 'Privacy policy', 'Cookie policy']

const contactInfo = {
  mail: 'jmr@fidgate.com',
  phone: '(+49) 15566 401840',
  address: 'Berlin-Mitte, Germany'
}

const teamPictures = {
  juan: juan,
  manuel: manuel,
  nicolas: nicolas,
  nicholaj: nicholaj,
  rosario: rosario
}

const googleMapAddress =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d310847.3324236927!2d13.094416267945796!3d52.50638427292411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e373f035901%3A0x42120465b5e3b70!2sBerlin%2C%20Germany!5e0!3m2!1sen!2snl!4v1714852729633!5m2!1sen!2snl'

export { navLinks, googleMapAddress, contactInfo, footerLinks, teamPictures }
