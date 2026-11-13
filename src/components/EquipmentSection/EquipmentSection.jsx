import { sitePath } from '../../utils/sitePath'
import { useState } from "react";
import MachineCard from "../MachineCard";
import MachineRequestModal from "../MachineRequestModal";
import { machines } from "../../data/equipment";
import "./EquipmentSection.css";
export default function EquipmentSection() {
  const [selected, setSelected] = useState(null);
  const featuredSlugs = [
    "sany-stc1200t5",
    "zoomlion-ztc1000v",
    "liebherr-ltm-1160",
    "ks-65721",
    "terex-ac100-4l",
    "is-platform-2",
  ];
  const featured = featuredSlugs
    .map((slug) => machines.find((m) => m.slug === slug))
    .filter(Boolean);
  return (
    <section className="section">
      <div className="container">
        <div className="section-heading">
          <div>
            <h2>
              Аренда спецтехники
              <br />и услуги
            </h2>
            <span className="accent-line" />
          </div>
          <a className="btn btn-outline" href={sitePath('/services')}>
            Смотреть всю технику
          </a>
        </div>
        <div className="home-machine-grid">
          {featured.map((m) => (
            <MachineCard key={m.slug} machine={m} onOrder={setSelected} />
          ))}
        </div>
      </div>
      <MachineRequestModal
        machine={selected}
        onClose={() => setSelected(null)}
      />
    </section>
  );
}
