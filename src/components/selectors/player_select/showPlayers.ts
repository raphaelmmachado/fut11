import { IPlayer } from "../../../types/typing";

const showPlayers = (
  position: string,
  playersArray: IPlayer[],
  defaultSet: IPlayer[],
  setPlayersToShow: (value: React.SetStateAction<IPlayer[]>) => void
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

  switch (position) {
    case "G":
      setPlayersToShow(GOALKEEPERS);
      break;
    case "D" || "Z":
      setPlayersToShow(DEFENDERS);
      break;
    case "LE":
      setPlayersToShow(LEFT_SB);
      break;
    case "LD":
      setPlayersToShow(RIGHT_SB);
      break;
    case "MD":
      setPlayersToShow(DEFENDING_MID);
      break;
    case "MC":
      setPlayersToShow(CENTER_MID);
      break;
    case "MA":
      setPlayersToShow(ATTACKING_MID);
      break;
    case "PE":
      setPlayersToShow(LEFT_WINGERS);
      break;
    case "PD":
      setPlayersToShow(RIGHT_WINGERS);
      break;
    case "A":
      setPlayersToShow(ATTACKER);
      break;
    default:
      setPlayersToShow(defaultSet);
      break;
  }
};
export default showPlayers;
