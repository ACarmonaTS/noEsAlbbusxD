import { Link } from "react-router-dom";
interface ContactProps {
  handleClick: (name: string) => void;
}

export default function ContactViewFactory({ handleClick }: ContactProps) {
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      Sección de contacto <br />
      <Link to="/#inicio" onClick={() => handleClick("INICIO")}>
        INICIO
      </Link>
    </div>
  );
}
