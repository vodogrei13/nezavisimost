import logoImage from '../../assets/logo.png'
import './Logo.css'

function Logo() {
  return <a className="brand" href="/" aria-label="Независимость — главная">
    <img className="brand-logo" src={logoImage} alt="Логотип Независимость" />
    <span className="brand-name">Независимость</span>
  </a>
}

export default Logo
