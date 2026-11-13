import { sitePath } from '../../utils/sitePath'
import './EquipmentCard.css'
function EquipmentCard({item}) {return <article className="equipment-card"><div className="equipment-img" style={{background:'#f3f6f8'}}></div><h3>{item.title}</h3><p>{item.subtitle}</p><div className="equipment-bottom"><a href={sitePath(item.href||'/services')} aria-label={`Подробнее: ${item.title}`}>Смотреть технику →</a></div></article>}
export default EquipmentCard
