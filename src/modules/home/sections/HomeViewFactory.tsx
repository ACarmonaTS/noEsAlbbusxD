import Inicio from "./Inicio";
interface HomeProps {
  handleClick: (name: string) => void;
}

export function HomeViewFactory({handleClick}: HomeProps ) {
  return (
    <>
      <Inicio handleClick={handleClick} />
    </>
  );
}
