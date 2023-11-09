import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Linked } from "./NavOpt";
import useScreenSize from "../../hooks/useScreenSize";

import style from "./Navbar.module.scss";

import albbus from "../../assets/images/albbus.svg";
import logo from "../../assets/icons/logo.svg";

interface NavbarProps {
  links: Linked[];
  handleClick: (name: string) => void;
}

export default function Navbar({ links, handleClick }: NavbarProps) {
  const [navbarMobile, setNavbarMobile] = useState("");
  const width = useScreenSize();

  function hiddenNavbar() {
    if (width >= 1200) {
      setNavbarMobile("");
    } else {
      setNavbarMobile(style.navbarLocationHidden);
    }
  }

  useEffect(() => {
    if (width >= 1200) {
      setNavbarMobile(style.navbarLocationVisible);
    } else {
      setNavbarMobile(style.navbarLocationHidden);
    }
  }, [width]);

  return (
    <nav className={`${style.nav} ${style.navbarEffect}`}>
      <Link
        className={style.brand}
        to="/"
        onClick={() => handleClick("INICIO")}
      >
        <img src={albbus} alt="albbus-logo" />
      </Link>
      <ul className={`${style.menu} ${navbarMobile}`}>
        <div
          className={style.containerBack}
          onClick={() => setNavbarMobile(style.navbarLocationHidden)}
        >
          <span className={style.back}></span>
        </div>
        {links.map((item: Linked) => (
          <li key={item.name} className={style.item}>
            <Link
              to={item.href}
              className={item.active ? style.linkOn : style.linkOff}
              onClick={() => {
                handleClick(item.name), hiddenNavbar();
              }}
            >
              {item.name}
            </Link>
            <span
              className={item.active ? style.underlineOn : style.underlineOff}
            ></span>
          </li>
        ))}
        <Link
          to="/contacto"
          className={style.quoteMobile}
          onClick={() => {
            handleClick("CONTACTO"),
              setNavbarMobile(style.navbarLocationHidden);
          }}
        >
          COTIZAR
        </Link>
      </ul>
      <Link
        to="/contacto"
        className={style.quote}
        onClick={() => {
          handleClick("CONTACTO");
        }}
      >
        COTIZAR
      </Link>
      <div className={style.navbarMobile}>
        <Link
          className={style.logo}
          to="/"
          onClick={() => handleClick("INICIO")}
        >
          <img src={logo} alt="albbus" />
        </Link>
        <div
          className={style.hamburguer}
          onClick={() => setNavbarMobile(style.navbarLocationVisible)}
        >
          <span className={`${style.line} ${style.lineOne}`}></span>
          <span className={`${style.line} ${style.lineTwo}`}></span>
          <span className={`${style.line} ${style.lineThree}`}></span>
        </div>
      </div>
      <span className={style.separator}></span>
    </nav>
  );
}
