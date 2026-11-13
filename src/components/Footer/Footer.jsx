import Logo from '../Logo/Logo'
import './Footer.css'

function Footer() {
  return <footer className="footer">
    <div className="container footer-grid">
      <div><Logo /><p>Аренда кранов и спецтехники<br/>для строительных и промышленных задач.</p></div>
      <div><b>Навигация</b><a href="/">Главная</a><a href="/services">Аренда / услуги</a><a href="/contacts">Контакты</a></div>
      <div><b>Каталог техники</b><a href="/services?category=cranes">Автокраны</a><a href="/services?category=platforms">Автовышки</a><a href="/services">Вся техника</a></div>
      <div><b>Контакты</b><a href="tel:+79991234567">+7 (999) 123-45-67</a><a href="mailto:info@nezavisimost.ru">info@nezavisimost.ru</a><span>г. Москва, ул. Промышленная, 11</span></div>
    </div>
    <div className="container footer-bottom"><span>© 2016 ООО «Независимость»</span><a href="#">Политика конфиденциальности</a></div>
  </footer>
}

export default Footer
