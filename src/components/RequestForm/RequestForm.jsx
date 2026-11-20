import "./RequestForm.css";

function RequestForm({ compact = false }) {
  return (
    <form
      className={`request-form ${compact ? "compact" : ""}`}
      onSubmit={(e) => e.preventDefault()}
    >
      <h3>{compact ? "Оставить заявку" : "Быстрый расчёт стоимости"}</h3>
      <p>
        {compact
          ? "Заполните форму, и мы свяжемся с вами в ближайшее время"
          : "Оставьте заявку — перезвоним и подберём технику"}
      </p>
      <input placeholder="Ваше имя" />
      <input placeholder="Телефон" type="tel" />
      {compact ? (
        <textarea placeholder="Комментарий" rows="3" />
      ) : (
        <>
          <input name="capacity" type="text" placeholder="Необходимая грузоподъёмность (т)" aria-label="Необходимая грузоподъёмность" />
          <input name="boom" type="text" placeholder="Необходимая стрела (м)" aria-label="Необходимая длина стрелы" />
          <input name="location" type="text" placeholder="Место работ" aria-label="Место работ" />
          <label className="request-date-label" htmlFor="work-date">Дата работ</label>
          <input id="work-date" name="workDate" type="date" aria-label="Дата работ" />
        </>
      )}
      <button className="btn btn-primary" type="submit">
        Отправить заявку
      </button>
      <small>
        Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
      </small>
    </form>
  );
}

export default RequestForm;
