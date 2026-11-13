import { sitePath } from '../../utils/sitePath'
import yearIcon from "../../assets/10 year.png";
import likeIcon from "../../assets/like-icon.png";
import kranIcon from "../../assets/kran-icon.png";
import docIcon from "../../assets/document-icon.png";
import "./AboutSection.css";
const stats = [
  { icon: yearIcon, title: "10+ лет", desc: "на рынке" },
  { icon: likeIcon, title: "Нам доверяют", desc: "надежность и качество" },
  { icon: kranIcon, title: "Большой выбор", desc: "спецтехники" },
  { icon: docIcon, title: "По договору", desc: "официальные условия" },
];
function AboutSection() {
  return (
    <section className="section about">
      <div className="container about-grid">
        <div>
          <h2>О компании</h2>
          <span className="accent-line" />
          <p>
            «Независимость» предоставляет в аренду краны и спецтехнику для
            строительных, монтажных и промышленных работ.
          </p>
          <p>
            Работаем с компаниями и частными заказчиками, поэтому можем быстро
            подобрать технику под конкретную задачу.
          </p>
          <div className="stats">
            {stats.map((s) => (
              <div key={s.title}>
                <img src={s.icon} alt="" />
                <b>{s.title}</b>
                <small>{s.desc}</small>
              </div>
            ))}
          </div>
          <a className="btn btn-outline" href={sitePath('/contacts')}>
            Подробнее о компании
          </a>
        </div>
        <div className="about-image" />
      </div>
    </section>
  );
}
export default AboutSection;
