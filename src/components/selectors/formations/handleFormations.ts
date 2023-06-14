import { Position } from "../../../types/typing";
import {
  fourFourTwo,
  fourFourTwoLosangle,
  fourThreeThree,
  fourThreeThreeB,
  threeFiveTwo,
  threeFourThree,
  fiveFourOne,
} from "../../../constants/positions";

const handleFormation = (
  formation: string,
  setFormation: (value: React.SetStateAction<Position>) => void
) => {
  switch (formation) {
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
    case "3-4-3":
      setFormation(threeFourThree);
      break;
    case "5-4-1":
      setFormation(fiveFourOne);
      break;
    default:
      setFormation(fourFourTwo);
      break;
  }
};
export default handleFormation;
