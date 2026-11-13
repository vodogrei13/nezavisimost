import './App.css'
import Home from './pages/Home/Home'
import Services from './pages/Services/Services'
import MachineDetail from './pages/Services/MachineDetail'
import { machines } from './data/equipment'
import Contacts from './pages/Contacts/Contacts'
import Gallery from './pages/Gallery/Gallery'
import NotFound from './pages/NotFound/NotFound'

const base = import.meta.env.BASE_URL.replace(/\/$/, '')

function App() {
  const pathname = window.location.pathname
  const relativePath = base && (pathname === base || pathname.startsWith(base + '/'))
    ? pathname.slice(base.length) || '/'
    : pathname
  const path = relativePath.replace(/\/+$/, '') || '/'

  if (path === '/gallery') return <Gallery />
  if (path.startsWith('/services/')) {
    const slug = path.split('/')[2]
    return machines.some(machine => machine.slug === slug)
      ? <MachineDetail slug={slug} />
      : <NotFound />
  }
  if (path === '/services') return <Services />
  if (path === '/contacts') return <Contacts />
  if (path === '/') return <Home />
  return <NotFound />
}

export default App