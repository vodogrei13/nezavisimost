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
          <select defaultValue="">
            <option value="" disabled>
              Вид техники
            </option>
            <option>Автокран</option>
            <option>Манипулятор</option>
            <option>Экскаватор</option>
          </select>
          <input type="text" placeholder="Дата и время" />
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
