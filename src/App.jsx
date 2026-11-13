import './App.css'
import Home from './pages/Home/Home'
import Services from './pages/Services/Services'
import MachineDetail from './pages/Services/MachineDetail'
import {machines} from './data/equipment'
import Contacts from './pages/Contacts/Contacts'
import Gallery from './pages/Gallery/Gallery'
import NotFound from './pages/NotFound/NotFound'

function App() {
  const path = window.location.pathname.replace(/\/$/, '') || '/'
  if (path === '/gallery') return <Gallery />
  if (path.startsWith('/services/')) { const slug=path.split('/')[2]; if (machines.some(m=>m.slug===slug)) return <MachineDetail slug={slug}/>; return <NotFound/> }
  if (path === '/services') return <Services />
  if (path === '/contacts') return <Contacts />
  if (path === '/') return <Home />
  return <NotFound />
}

export default App
