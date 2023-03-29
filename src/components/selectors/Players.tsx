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
      className="flex justify-around items-center max-w-md rounded-md
       bg-slate-800"
    >
      <img src={player.img} alt={player.name} className="object-contain" />
      <h4 className="flex-shrink">{player.num}</h4>
      <h3 className="">{player.name}</h3>
      <h4 className="flex-shrink">{player.pos}</h4>
    </div>
  );
}
