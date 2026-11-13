import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import './NotFound.css'

function NotFound(){ return <><Header/><main className="inner-page"><div className="container"><h1 className="page-title">Страница не найдена</h1><a className="btn btn-primary" href="/">На главную</a></div></main><Footer/></> }

export default NotFound
