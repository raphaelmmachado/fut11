import { ChangeEvent } from "react";
interface Props {
  setFilterPosition: React.Dispatch<React.SetStateAction<string>>;
}
export default function FilterPosition({ setFilterPosition }: Props) {
  return (
    <section id="position_filter" className="max-w-xs">
      <label className="label" htmlFor="position_filter">
        <span className="text-sm text-slate-500">Filtrar por posição</span>
      </label>
      <select
        name="position_filter"
        className="select select-md bg-slate-800 text-slate-200"
        onChange={(e: ChangeEvent<HTMLSelectElement>) =>
          setFilterPosition(e.currentTarget.value)
        }
      >
        <option value="all">Todos</option>
        <option value="G">Goleiros</option>
        <option value="D">Defensores</option>
        <option value="LE">Laterais Esquerdos</option>
        <option value="LD">Laterais Direitos</option>
        <option value="MD">Meias Defensivos</option>
        <option value="MC">Meias Centrais</option>
        <option value="MA">Meias Atacantes</option>
        <option value="PE">Pontas Esquerdos</option>
        <option value="PD">Pontas Direitos</option>
        <option value="A">Atacantes</option>
      </select>
    </section>
  );
}
