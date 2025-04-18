import { ChangeEvent } from "react";
interface Props {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}
export default function SearchPlayer({ setSearch }: Props) {
  return (
    <section id="search" className="max-w-xs">
      <label htmlFor="players_search" className="label">
        <span className="text-sm text-slate-500">Filtrar por nome</span>
      </label>
      <input
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setSearch(e.currentTarget.value)
        }
        type="text"
        name="players_search"
        id="players_search"
        placeholder="ex.: Arrascaeta"
        className="input input-bordered input-md
         bg-slate-800 text-slate-200"
      />
    </section>
  );
}
