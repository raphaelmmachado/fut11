import { IPlayer } from "../../../types/typing";

const showPlayers = (
  position: string,
  playersArray: IPlayer[],
  defaultSet: IPlayer[],
  setPlayersToShow: (value: React.SetStateAction<IPlayer[]>) => void
) => {
  const goalkeepers = playersArray.filter((player) => player.pos === "G");
  const defenders = playersArray.filter((player) => player.pos === "D");
  const leftSideBacks = playersArray.filter((players) => players.pos === "LE");
  const rightSideBacks = playersArray.filter((players) => players.pos === "LD");
  const defMidfielders = playersArray.filter((players) => players.pos === "MD");
  const midfielders = playersArray.filter((players) => players.pos === "MA");
  const wingers = playersArray.filter((players) => players.pos === "P");
  const attackers = playersArray.filter((players) => players.pos === "A");

  switch (position) {
    case "G":
      setPlayersToShow(goalkeepers);
      break;
    case "D" || "Z":
      setPlayersToShow(defenders);
      break;
    case "LE":
      setPlayersToShow(leftSideBacks);
      break;
    case "LD":
      setPlayersToShow(rightSideBacks);
      break;
    case "MD":
      setPlayersToShow(defMidfielders);
      break;
    case "MA":
      setPlayersToShow(midfielders);
      break;
    case "P":
      setPlayersToShow(wingers);
      break;
    case "A":
      setPlayersToShow(attackers);
      break;
    default:
      setPlayersToShow(defaultSet);
      break;
  }
};
export default showPlayers;
