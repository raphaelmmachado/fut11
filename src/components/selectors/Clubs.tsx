import { clubs } from "../../constants/clubs";
interface Props {
  club: string;
  setClub: React.Dispatch<React.SetStateAction<string>>;
  resetSquares: () => void;
}

function Clubs({ setClub, club, resetSquares }: Props) {
  return (
    <div className="form-control w-full max-w-xs">
      <span className="flex items-center gap-3">
        {club && (
          <label className="text-sm " htmlFor="clubs">
            <img src={clubs[club]} alt={club} width="30" />
          </label>
        )}
        <select
          id="clubs"
          className="select min-w-max bg-slate-800"
          name="clubs"
          onChange={(e) => {
            resetSquares();
            setClub(e.currentTarget.value);
          }}
        >
          <option value="flamengo">Flamengo</option>
          <option value="fluminense">Fluminense</option>
          <option value="palmeiras">Palmeiras</option>
          <option value="corinthians">Corinthians</option>
          <option value="atletico_mineiro">Atlético MG</option>
          <option value="selecao" disabled>
            Brasil
          </option>
        </select>
      </span>
    </div>
  );
}
export { Clubs };
