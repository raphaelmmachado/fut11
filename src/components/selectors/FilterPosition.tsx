import { ChangeEvent } from "react";
interface Props {
  setFilterPosition: React.Dispatch<React.SetStateAction<string>>;
}
export default function FilterPosition({ setFilterPosition }: Props) {
  return (
    <section id="position_filter" className="m-1">
      <label className="label" htmlFor="position_filter">
        <span className="label-text">Filtrar por posição</span>
      </label>
      <select
        name="position_filter"
        className="select  w-full max-w-xs"
        onChange={(e: ChangeEvent<HTMLSelectElement>) =>
          setFilterPosition(e.currentTarget.value)
        }
      >
        <option value="all">Todos</option>
        <option value="G">Goleiros</option>
        <option value="D">Defensores</option>
        <option value="LE">Laterais Esquerdos</option>
        <option value="LD">Laterais Direitos</option>
        <option value="MD">Meios Defensivos</option>
        <option value="MA">Meios-Atacantes</option>
        <option value="P">Pontas</option>
        <option value="A">Atacantes</option>
      </select>
    </section>
  );
}
