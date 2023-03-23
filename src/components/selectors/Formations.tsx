import { Position } from "../../types/typing";
import {
  fourFourTwo,
  fourFourTwoLosangle,
  fourThreeThree,
  fourThreeThreeB,
  threeFiveTwo,
} from "../../constants/positions";
interface Props {
  setFormation: React.Dispatch<React.SetStateAction<Position>>;
}
function Formations({ setFormation }: Props) {
  const handleFormation = (f: string) => {
    switch (f) {
      case "4-4-2A":
        setFormation(fourFourTwo);
        break;
      case "4-4-2B":
        setFormation(fourFourTwoLosangle);
        break;
      case "4-3-3A":
        setFormation(fourThreeThree);
        break;
      case "4-3-3B":
        setFormation(fourThreeThreeB);
        break;
      case "3-5-2":
        setFormation(threeFiveTwo);
        break;
      default:
        setFormation(fourFourTwo);
        break;
    }
  };
  return (
    <div id="formations">
      <select
        name="formation"
        id="formation"
        onChange={(e) => handleFormation(e.currentTarget.value)}
      >
        <option value="4-2-2A">4-4-2A</option>
        <option value="4-4-2B">4-4-2B</option>
        <option value="4-3-3A">4-3-3A</option>
        <option value="4-3-3B">4-3-3B</option>
        <option value="3-5-2">3-5-2</option>
      </select>
    </div>
  );
}
export { Formations };
