import { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Gallery.css";
const base = import.meta.env.BASE_URL;
const photos = [
  ["Строительство торгового комплекса", `${base}gallery/gallery-1.jpg`],
  ["Монтаж металлоконструкций", `${base}gallery/gallery-2.jpg`],
  ["Работы на промышленном объекте", `${base}gallery/gallery-3.jpg`],
  ["Строительство жилого комплекса", `${base}gallery/gallery-4.jpg`],
  ["Подъём строительных материалов", `${base}gallery/gallery-5.jpg`],
  ["Монтаж на строительной площадке", `${base}gallery/gallery-6.jpg`],
];

function Gallery() {
  const [current, setCurrent] = useState(null);
  useEffect(() => {
    const key = (e) => {
      if (e.key === "Escape") setCurrent(null);
      if (current !== null && e.key === "ArrowRight")
        setCurrent((current + 1) % photos.length);
      if (current !== null && e.key === "ArrowLeft")
        setCurrent((current + photos.length - 1) % photos.length);
    };
    window.addEventListener("keydown", key);
    return () => window.removeEventListener("keydown", key);
  }, [current]);
  return (
    <>
      <Header active="gallery" />
      <main className="inner-page">
        <div className="container">
          <h1 className="page-title">Галерея объектов</h1>
          <div className="breadcrumbs">Главная / Галерея</div>
          <p className="page-intro">
            Примеры строительных и монтажных работ с применением спецтехники.
          </p>
          <div className="gallery-grid">
            {photos.map(([name, url], i) => (
              <button
                className="gallery-card"
                key={name}
                onClick={() => setCurrent(i)}
              >
                <img src={url} alt={name} loading="lazy" />
                <span>{name}</span>
              </button>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      {current !== null && (
        <div
          className="gallery-overlay"
          role="dialog"
          aria-modal="true"
          onClick={() => setCurrent(null)}
        >
          <button
            className="gallery-close"
            onClick={() => setCurrent(null)}
            aria-label="Закрыть"
          >
            ×
          </button>
          <button
            className="gallery-prev"
            onClick={(e) => {
              e.stopPropagation();
              setCurrent((current + photos.length - 1) % photos.length);
            }}
            aria-label="Предыдущее фото"
          >
            ‹
          </button>
          <div className="gallery-view" onClick={(e) => e.stopPropagation()}>
            <img src={photos[current][1]} alt={photos[current][0]} />
            <p>
              {photos[current][0]} · {current + 1} / {photos.length}
            </p>
          </div>
          <button
            className="gallery-next"
            onClick={(e) => {
              e.stopPropagation();
              setCurrent((current + 1) % photos.length);
            }}
            aria-label="Следующее фото"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
export default Gallery;