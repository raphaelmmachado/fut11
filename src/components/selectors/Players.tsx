import { IPlayer, IPlayerSelect } from "../../types/typing";

interface Props {
  players: IPlayer[];
  player: IPlayer;
  letUserSelect: IPlayerSelect;
  setPlayers: (value: React.SetStateAction<IPlayer[]>) => void;
}
export default function Player({
  players,
  player,
  letUserSelect,
  setPlayers,
}: Props) {
  return (
    <div
      onClick={() => {
        // copy array
        // take the button index
        // select a player and put in that index
        // dont let select if player is already selected or if index is not defined
        const newArray = [...players];
        if (newArray.some((item) => item.name === player.name)) return;
        const { index } = letUserSelect;
        if (typeof index === "undefined") return;
        newArray[index] = player;
        setPlayers(newArray);
      }}
      key={player.name}
      className="flex justify-evenly items-center rounded-md bg-slate-800"
    >
      <div className="h-16 w-16">
        <img src={player.img} alt={player.name} className="w-auto h-auto" />
      </div>
      <h4>{player.num}</h4>
      <h3>{player.name}</h3>
      <h4>{player.pos}</h4>
    </div>
  );
}
