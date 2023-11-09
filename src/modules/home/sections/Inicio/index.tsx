import { Link } from "react-router-dom";

import inicio from "../../../../assets/images/inicio.svg";

import style from "./Inicio.module.scss";

interface InicioProps {
  handleClick: (name: string) => void;
}

export default function Inicio({handleClick} : InicioProps) {
  return (
    <section id="inicio" className={style.container}>
      <div className={`${style.information} ${style.textEffect}`}>
        <h2 className={style.title}>
          “MÁS QUE TECNOLOGÍA TU ALIADO QUE TE COMPRENDE”
        </h2>
        <p className={style.description}>
          Maximiza tus resultados con tecnología de punta
        </p>
        <Link
          to="/contacto"
          className={style.btn}
          onClick={() => handleClick("CONTACTO")}
        >
          CONTÁCTANOS
        </Link>
      </div>
      <div className={`${style.imageContainer} ${style.imageEffect}`}>
        <img src={inicio} alt="albbus" className={style.image}/>
      </div>
    </section>
  );
}
