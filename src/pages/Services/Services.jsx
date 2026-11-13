import {useMemo,useState} from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import MachineRequestModal from '../../components/MachineRequestModal'
import MachineCard from '../../components/MachineCard'
import {machines} from '../../data/equipment'
import './Catalog.css'
export default function Services(){
 const [category,setCategory]=useState(new URLSearchParams(window.location.search).get('category')||'all')
 const [sort,setSort]=useState('default');const [capacity,setCapacity]=useState('all');const [boom,setBoom]=useState('all');const [selected,setSelected]=useState(null)
 const base=machines.filter(m=>category==='all'||m.category===category)
 const capacities=[...new Set(base.map(m=>m.capacity).filter(v=>v!=null))].sort((a,b)=>a-b)
 const booms=[...new Set(base.filter(m=>capacity==='all'||m.capacity===Number(capacity)).map(m=>m.boomLength).filter(v=>v!=null))].sort((a,b)=>a-b)
 const shown=useMemo(()=>base.filter(m=>(capacity==='all'||m.capacity===Number(capacity))&&(boom==='all'||m.boomLength===Number(boom))).sort((a,b)=>sort==='asc'?(a.capacity??999)-(b.capacity??999):sort==='desc'?(b.capacity??-1)-(a.capacity??-1):0),[category,capacity,boom,sort])
 return <><Header active="services"/><main className="container machine-catalog"><div className="breadcrumbs"><a href="/">Главная</a> / Каталог техники</div><h1>Каталог техники</h1><p>Подберите технику по грузоподъёмности и рабочим характеристикам.</p><div className="machine-toolbar"><div className="machine-filters">{[['all','Вся техника'],['cranes','Автокраны'],['platforms','Автовышки']].map(([id,label])=><button key={id} className={category===id?'selected':''} onClick={()=>{setCategory(id);setCapacity('all');setBoom('all')}}>{label}</button>)}</div><label>Сортировка <select value={sort} onChange={e=>setSort(e.target.value)}><option value="default">По умолчанию</option><option value="asc">По грузоподъёмности ↑</option><option value="desc">По грузоподъёмности ↓</option></select></label></div><div className="machine-param-filters"><label>Тонн: <select value={capacity} onChange={e=>{setCapacity(e.target.value);setBoom('all')}}><option value="all">Все доступные</option>{capacities.map(n=><option key={n} value={n}>{n} т</option>)}</select></label><label>Стрела: <select value={boom} disabled={!booms.length} onChange={e=>setBoom(e.target.value)}><option value="all">{booms.length?'Любая длина':'Данные уточняются'}</option>{booms.map(n=><option key={n} value={n}>{n} м</option>)}</select></label></div><p className="machine-count">Найдено: {shown.length}</p><div className="machine-grid">{shown.map(m=><MachineCard key={m.slug} machine={m} onOrder={setSelected}/>)}</div>{!shown.length&&<p>По выбранным параметрам техника не найдена.</p>}</main><Footer/><MachineRequestModal machine={selected} onClose={()=>setSelected(null)}/></>
}
