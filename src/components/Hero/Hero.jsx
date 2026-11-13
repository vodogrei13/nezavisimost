import RequestForm from '../RequestForm/RequestForm'
import kranImage from '../../assets/kran-icon.png'
import manImage from '../../assets/man-icon.png'
import docImage from '../../assets/document-icon.png'
import './Hero.css'

function Hero() {
  return (
    <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-copy">
            
            <h1>Аренда кранов<br/>и спецтехники</h1>
            <p className="lead">Подберём технику под вашу задачу.<br/>Доставим на объект точно в срок</p>
            <div className="benefits-row">
              <div><span><img src={kranImage} alt="техника" /></span><b>Техника под задачи любой сложности</b><small>Подберём оптимальный кран для вашего проекта</small></div>
              <div><span><img src={manImage} alt="./assets/man-icon.png" /></span><b>Опытные операторы</b><small>Точная и безопасная работа на площадке</small></div>
              <div><span><img src={docImage} alt="./assets/document-icon.png" /></span><b>Без скрытых условий</b><small>Понятная стоимость и работа по договору</small></div>
            </div>
          </div>
          <div id="request"><RequestForm /></div>
        </div>
        <div className="hero-machine" aria-hidden="true"></div>
      </section>
  )
}

export default Hero
