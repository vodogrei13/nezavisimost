import "./WhyChooseUs.css";
import kranImage from '../../assets/kran-yellow.png'
import manImage from '../../assets/man-yellow.png'
import payImage from '../../assets/pay-yellow.png'
import shieldImage from '../../assets/shield-yellow.png'

function WhyChooseUs() {
  return (
    <section className="why">
      <div className="container">
        <h2>
          Почему выбирают <em>нас</em>
        </h2>
        <div className="why-grid">
          <div>
            <span><img src={kranImage} alt="техника" /></span>
            <b>Собственный парк техники</b>
          </div>
          <div>
            <span><img src={shieldImage} alt="качество" /></span>
            <b>Техника в отличном состоянии</b>
          </div>
          <div>
            <span><img src={payImage} alt="оплата" /></span>
            <b>Любая форма оплаты</b>
          </div>
          <div>
            <span><img src={manImage} alt="поддержка" /></span>
            <b>Поддержка 24/7</b>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
