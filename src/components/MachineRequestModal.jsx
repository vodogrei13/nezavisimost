import { useEffect, useState } from "react";
import "./MachineRequestModal.css";

export default function MachineRequestModal({ machine, onClose }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [ready, setReady] = useState(false);
  useEffect(() => {
    if (!machine) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const old = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = old;
    };
  }, [machine, onClose]);
  if (!machine) return null;
  const submit = (e) => {
    e.preventDefault();
    setReady(true);
  };
  return (
    <div
      className="machine-modal-backdrop"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <section
        className="machine-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="machine-modal-title"
      >
        <button
          className="machine-modal-close"
          type="button"
          aria-label="Закрыть"
          onClick={onClose}
        >
          ×
        </button>
        <div className="machine-modal-eyebrow">Заявка на аренду</div>
        <h2 id="machine-modal-title">{machine.name}</h2>
        {ready ? (
          <div className="machine-modal-ready">
            <strong>Данные заполнены</strong>
            <p>
              Заявка пока не отправлена: подключение отправки будет выполнено
              позднее.
            </p>
            <div className="machine-modal-summary">
              <span>Техника: {machine.name}</span>
              <span>Имя: {name}</span>
              <span>Телефон: {phone}</span>
            </div>
            <button
              type="button"
              className="machine-modal-submit"
              onClick={() => setReady(false)}
            >
              Изменить данные
            </button>
          </div>
        ) : (
          <form onSubmit={submit}>
            <p>Оставьте контакты для заявки по выбранной технике.</p>
            <label>
              Ваше имя
              <input
                autoFocus
                required
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Как к вам обращаться"
              />
            </label>
            <label>
              Телефон
              <input
                required
                type="tel"
                autoComplete="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+7 (___) ___-__-__"
              />
            </label>
            <button className="machine-modal-submit" type="submit">
              Подготовить заявку
            </button>
            <small>Отправка заявок пока не подключена.</small>
          </form>
        )}
      </section>
    </div>
  );
}
