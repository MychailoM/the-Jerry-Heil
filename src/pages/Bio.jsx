import "./../styles/Bio.css";
import { Header } from "../components/Header";

export function Bio() {
  return (
    <main className="bio">
      <div className="bio__overlay" />
      <Header />
      <section className="main-bio-content">
        <div className="container">
          <div className="main-bio-photo-wrap">
            <img
              className="main-bio-photo"
              src="/photos/bio/main-photo.jpg"
              alt="Jerry Heil(Яна Шемаєва)"
            />
          </div>
          <div className="main-bio-text-content">
            <h1 className="main-bio-title">Біографія</h1>
            <div className="main-bio-line"></div>
            <p className="main-bio-text">
              Jerry Heil (справжнє ім'я — Яна Олександрівна
              Шемаєва; нар. 21 жовтня 1995, Васильків, Київська область) —
              українська співачка та авторка пісень. Стала відомою як
              відеоблогерка та кавер-виконавиця завдяки переспівам пісень
              світових та українських виконавців. Популярність їй принесла
              авторська пісня «Охрана, отмєна» з її дебютного студійного альбому
              «Я — Яна» (2019, назва стилізована як «#Я_ЯНА»). В дуеті з
              реперкою alyona alyona представляла Україну на Пісенному конкурсі
              «Євробачення-2024» з композицією «Teresa & Maria» в місті Мальме,
              Швеція, де співачки посіли третє місце.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
