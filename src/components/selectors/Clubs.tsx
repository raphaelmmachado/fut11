import flamengo from "../../assets/icons/fla_small.png";
import brazil from "../../assets/icons/cbf_small.png";
interface Props {
  club: string;
  setClub: React.Dispatch<React.SetStateAction<string>>;
}
function Clubs({ setClub, club }: Props) {
  return (
    <div className="form-control max-w-xs">
      <label className="text-sm flex  p-1 gap-3">
        Time
        <span>
          {club === "flamengo" && <img src={flamengo} alt={club} width="20" />}
          {club === "selecao" && <img src={brazil} alt={club} width="20" />}
        </span>
      </label>
      <select
        className="select select-bordered w-full max-w-xs bg-slate-800"
        name="clubs"
        id="clubs"
        onChange={(e) => setClub(e.currentTarget.value)}
      >
        <option value="flamengo">Flamengo</option>
        <option value="selecao" disabled>
          Brasil
        </option>
      </select>
    </div>
  );
}
export { Clubs };
