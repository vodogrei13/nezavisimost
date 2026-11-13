import "./ContactBanner.css";

function ContactBanner() {
  return (
    <section className="dark-request" id="request">
      <div className="container">
        <div className="request-banner">
          <div>
            <h2>Не нашли нужную технику?</h2>
            <p>
              Оставьте заявку — мы подберём оптимальное решение под ваш проект и
              бюджет
            </p>
            <div className="inline-form">
              <input placeholder="Ваше имя" />
              <input placeholder="Телефон" />
              <input placeholder="Комментарий" />
              <button className="btn btn-primary">Отправить заявку</button>
            </div>
          </div>
          <div className="banner-machine"></div>
        </div>
      </div>
    </section>
  );
}

export default ContactBanner;
