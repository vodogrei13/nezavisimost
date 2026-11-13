import { sitePath } from '../utils/sitePath'
import { useState } from "react";
import "./MachineCard.css";
export function MachineImage({ machine, detail = false }) {
  const [missing, setMissing] = useState(false);
  return (
    <div
      className={"machine-visual" + (detail ? " machine-visual-detail" : "")}
    >
      <span className="machine-blob" aria-hidden="true" />
      {!missing ? (
        <img
          src={machine.image}
          alt={machine.name}
          loading="lazy"
          onError={() => setMissing(true)}
        />
      ) : (
        <span className="machine-placeholder">Изображение уточняется</span>
      )}
    </div>
  );
}
export default function MachineCard({ machine, onOrder }) {
  return (
    <article className="machine-card">
      <a
        className="machine-card-image-link"
        href={sitePath("/services/" + machine.slug)}
        aria-label={"Подробнее: " + machine.name}
      >
        <MachineImage machine={machine} />
      </a>
      <div className="machine-card-body">
        <h2>
          <a href={sitePath("/services/" + machine.slug)}>{machine.name}</a>
        </h2>
        <div className="machine-card-actions">
          <div className="machine-highlights">
            {(machine.capacity != null || machine.platformLoad != null) && <div className="machine-highlight">
              <span>Грузоподъёмность</span>
              <strong>
                {machine.capacity != null
                  ? `${machine.capacity} т`
                  : machine.platformLoad != null
                    ? `${machine.platformLoad} кг`
                    : "Уточняется"}
              </strong>
            </div>}
            {(machine.category === "cranes" ? machine.boomLength : machine.workingHeight) != null && <div className="machine-highlight">
              <span>
                {machine.category === "cranes"
                  ? "Длина стрелы"
                  : "Высота подъёма"}
              </span>
              <strong>
                {(machine.category === "cranes"
                  ? machine.boomLength
                  : machine.workingHeight) != null
                  ? `${machine.category === "cranes" ? machine.boomLength : machine.workingHeight} м`
                  : "Уточняется"}
              </strong>
            </div>}
          </div>
          <button
            className="machine-order"
            type="button"
            onClick={() => onOrder(machine)}
          >
            Арендовать <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </article>
  );
}
