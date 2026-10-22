import { Link, NavLink } from "react-router-dom";
import './../styles/Header.css';

export function Header() {
  return (
    <header className="header">
      <div className="container header-container">
        <div className="header-logo-wrap">
          <Link className="header-logo" to="/">
            Jerry Heil
            <br />
            <span className="header-logo-deco">Біографія</span>
          </Link>
        </div>
        <nav className="header-nav">
          <ul className="header-nav-list">
            <li className="header-nav-item">
              <NavLink to="/" className="header-nav-link">
                Головна
              </NavLink>
            </li>
            <li className="header-nav-item">
              <NavLink to="/" className="header-nav-link">
                Біографія
              </NavLink>
            </li>
            <li className="header-nav-item">
              <NavLink to="/" className="header-nav-link">
                Соц.Мережі
              </NavLink>
            </li>
            <li className="header-nav-item">
              <NavLink to="/" className="header-nav-link">
                Музика
              </NavLink>
            </li>
            <li className="header-nav-item">
              <NavLink to="/" className="header-nav-link">
                Галерея
              </NavLink>
            </li>
          </ul>

          <button className="burger-btn" type="button">
            <span className="burger-btn-line"></span>
            <span className="burger-btn-line"></span>
            <span className="burger-btn-line"></span>
          </button>
        </nav>
      </div>
    </header>
  );
}
