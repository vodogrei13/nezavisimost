import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import RequestForm from '../../components/RequestForm/RequestForm'
import './Contacts.css'

function Contacts() {
  return <><Header active="contacts"/><main className="inner-page contacts-page"><div className="container"><h1 className="page-title">Контакты</h1><div className="breadcrumbs">Главная / Контакты</div><p className="page-intro">Свяжитесь с нами любым удобным способом или оставьте заявку — мы перезвоним.</p><div className="contacts-grid"><div className="contact-card"><div><span>☎</span><p><small>Телефон</small><b>+7 (999) 123-45-67</b></p></div><div><span>✉</span><p><small>Email</small><b>info@nezavisimost.ru</b></p></div><div><span>●</span><p><small>Адрес</small><b>г. Москва, ул. Промышленная, д. 11</b></p></div><div><span>◷</span><p><small>Режим работы</small><b>Пн–Пт: 8:00–18:00<br/>Сб: 9:00–14:00</b></p></div></div><RequestForm compact/></div><div className="map"><div className="map-grid"></div><div className="map-pin">●</div><div className="map-label"><b>Мы здесь</b><span>г. Москва, ул. Промышленная, д. 11</span></div></div></div></main><Footer/></>
}

export default Contacts
