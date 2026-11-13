import {useState} from 'react'
import Logo from '../Logo/Logo'
import RequestForm from '../RequestForm/RequestForm'
import './Header.css'
function Header({active='home'}) {
 const [modal,setModal]=useState(false)
 const request=()=>{if(window.location.pathname==='/' ){document.getElementById('request')?.scrollIntoView({behavior:'smooth',block:'center'})}else setModal(true)}
 return <><header className="site-header"><div className="container header-inner"><Logo/><nav className="main-nav"><a className={active==='home'?'active':''} href="/">Главная</a><a className={active==='services'?'active':''} href="/services">Аренда / услуги</a><a className={active==='gallery'?'active':''} href="/gallery">Галерея</a><a className={active==='contacts'?'active':''} href="/contacts">Контакты</a></nav><a className="phone" href="tel:+79991234567">+7 (999) 123-45-67</a><button className="btn btn-primary header-btn" onClick={request}>Оставить заявку</button></div></header>{modal&&<div className="request-modal-backdrop" onMouseDown={()=>setModal(false)}><div className="request-modal" role="dialog" aria-modal="true" aria-label="Оставить заявку" onMouseDown={e=>e.stopPropagation()}><button className="request-modal-close" onClick={()=>setModal(false)} aria-label="Закрыть">×</button><RequestForm/></div></div>}</>
}
export default Header
