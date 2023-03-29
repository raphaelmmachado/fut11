import flamengo from "../../assets/icons/fla_small.png";
import brazil from "../../assets/icons/cbf_small.png";
interface Props {
  club: string;
  setClub: React.Dispatch<React.SetStateAction<string>>;
}
function Clubs({ setClub, club }: Props) {
  return (
    <div className="form-control max-w-xs">
      <label className="label">
        <span className="label-text">Time</span>{" "}
        <span>
          {club === "flamengo" && <img src={flamengo} alt={club} width="20" />}
          {club === "selecao" && <img src={brazil} alt={club} width="20" />}
        </span>
      </label>
      <select
        className="select select-bordered select-xs sm:select-sm md:select-md"
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
