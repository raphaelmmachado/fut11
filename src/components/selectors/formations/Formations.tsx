import { Position } from "../../../types/typing";
import handleFormation from "./handleFormations";

interface Props {
  setFormation: React.Dispatch<React.SetStateAction<Position>>;
}
function Formations({ setFormation }: Props) {
  return (
    <div id="formations" className="form-control max-w-xs">
      <select
        className="select select-md max-[320px]:select-sm bg-slate-800 text-slate-300"
        onChange={(e) => handleFormation(e.currentTarget.value, setFormation)}
      >
        <option value="4-2-2A">4-4-2A</option>
        <option value="4-4-2B">4-4-2B</option>
        <option value="4-3-3A">4-3-3A</option>
        <option value="4-3-3B">4-3-3B</option>
        <option value="3-5-2">3-5-2</option>
        <option value="3-4-3">3-4-3</option>
        <option value="5-4-1">5-4-1</option>
      </select>
    </div>
  );
}
export { Formations };
