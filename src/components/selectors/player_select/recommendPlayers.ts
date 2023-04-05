import { IPlayer } from "../../../types/typing";

const recommendPlayers = (
  playersArray: IPlayer[],
  positionNumber: number | undefined,
  setRecommended: (value: React.SetStateAction<IPlayer[] | undefined>) => void
) => {
  const goalkeepers = playersArray.filter((player) => player.pos === "G");
  const defenders = playersArray.filter((player) => player.pos === "D");
  const leftSideBacks = playersArray.filter((players) => players.pos === "LE");
  const rightSideBacks = playersArray.filter((players) => players.pos === "LD");
  const defMidfielders = playersArray.filter((players) => players.pos === "MD");
  const midfielders = playersArray.filter((players) => players.pos === "MA");
  const wingers = playersArray.filter((players) => players.pos === "P");
  const attackers = playersArray.filter((players) => players.pos === "A");

  switch (positionNumber) {
    case 0:
      setRecommended(goalkeepers);
      break;
    case 1:
      setRecommended([...rightSideBacks, ...wingers]);
      break;
    case 2:
      setRecommended(defenders);
      break;
    case 3:
      setRecommended(defenders);
      break;
    case 4:
      setRecommended([...defMidfielders, ...defenders]);
      break;
    case 5:
      setRecommended([...leftSideBacks, ...wingers]);
      break;
    case 6:
      setRecommended([...midfielders, ...defMidfielders]);
      break;
    case 7:
      setRecommended([...defMidfielders, ...midfielders]);
      break;
    case 8:
      setRecommended([...attackers, ...wingers]);
      break;
    case 9:
      setRecommended([...midfielders, ...attackers]);
      break;
    case 10:
      setRecommended([...attackers, ...wingers]);
      break;
    default:
      setRecommended(undefined);
      break;
  }
};
export default recommendPlayers;
