import { IPlayer } from "../../../types/typing";

const recommendPlayers = (
  playersArray: IPlayer[],
  positionNumber: number | undefined,
  setRecommended: (value: React.SetStateAction<IPlayer[] | undefined>) => void
) => {
  const GOALKEEPERS = playersArray.filter((player) => player.pos === "G");
  const DEFENDERS = playersArray.filter((player) => player.pos === "D");
  const LEFT_SB = playersArray.filter((players) => players.pos === "LE");
  const RIGHT_SB = playersArray.filter((players) => players.pos === "LD");
  const DEFENDING_MID = playersArray.filter((players) => players.pos === "MD");
  const CENTER_MID = playersArray.filter((players) => players.pos === "MC");
  const ATTACKING_MID = playersArray.filter((players) => players.pos === "MA");
  const RIGHT_WINGERS = playersArray.filter((players) => players.pos === "PD");
  const LEFT_WINGERS = playersArray.filter((players) => players.pos === "PE");
  const ATTACKER = playersArray.filter((players) => players.pos === "A");

  switch (positionNumber) {
    case 0:
      setRecommended(GOALKEEPERS);
      break;
    case 1:
      setRecommended([...RIGHT_SB, ...RIGHT_WINGERS]);
      break;
    case 2:
      setRecommended(DEFENDERS);
      break;
    case 3:
      setRecommended(DEFENDERS);
      break;
    case 4:
      setRecommended([...DEFENDING_MID, ...CENTER_MID, ...DEFENDERS]);
      break;
    case 5:
      setRecommended([...LEFT_SB, ...LEFT_WINGERS]);
      break;
    case 6:
      setRecommended([...ATTACKING_MID, ...CENTER_MID]);
      break;
    case 7:
      setRecommended([...DEFENDING_MID, ...CENTER_MID]);
      break;
    case 8:
      setRecommended([...ATTACKER, ...RIGHT_WINGERS, ...LEFT_WINGERS]);
      break;
    case 9:
      setRecommended([...ATTACKING_MID, ...ATTACKER, ...CENTER_MID]);
      break;
    case 10:
      setRecommended([
        ...ATTACKING_MID,
        ...ATTACKER,
        ...RIGHT_WINGERS,
        ...LEFT_WINGERS,
      ]);
      break;
    default:
      setRecommended(undefined);
      break;
  }
};
export default recommendPlayers;
