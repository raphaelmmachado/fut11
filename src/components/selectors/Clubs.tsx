const flamengo =
  "https://fla-bucket-s3-us.s3.amazonaws.com/public/images/escudos/1524865930.png";
const fluminense =
  "https://assets-fluminense.s3.amazonaws.com/assets/fluminense-d99518426e66fb3576697742f31b8b1d2b8b53d34f409072c52711764f1bdf32.svg";
const palmeiras =
  "https://s.sde.globo.com/media/organizations/2019/07/06/Palmeiras.svg";
const corinthians =
  "https://logodetimes.com/times/corinthians/logo-corinthians-256.png";
const atletico_mineiro =
  "https://atletico.com.br/wp-content/uploads/2022/01/atletico.svg";
import brazil from "../../assets/icons/cbf_small.png";

interface Props {
  club: string;
  setClub: React.Dispatch<React.SetStateAction<string>>;
  resetSquares: () => void;
}

function Clubs({ setClub, club, resetSquares }: Props) {
  return (
    <div className="form-control w-full max-w-xs">
      <span className="flex items-center gap-3">
        <label className="text-sm hidden sm:block" htmlFor="clubs">
          {club === "flamengo" && <img src={flamengo} alt={club} width="30" />}
          {club === "fluminense" && (
            <img src={fluminense} alt={club} width="30" />
          )}
          {club === "palmeiras" && (
            <img src={palmeiras} alt={club} width="30" />
          )}{" "}
          {club === "corinthians" && (
            <img src={corinthians} alt={club} width="30" />
          )}
          {club === "atletico_mineiro" && (
            <img src={atletico_mineiro} alt={club} width="30" />
          )}
          {club === "selecao" && <img src={brazil} alt={club} width="30" />}
        </label>
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
