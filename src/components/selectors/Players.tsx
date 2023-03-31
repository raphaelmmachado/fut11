import { IPlayer, IPlayerSelect } from "../../types/typing";

interface Props {
  players: IPlayer[];
  player: IPlayer;
  letUserSelect: IPlayerSelect;
  setLetUserSelect: React.Dispatch<React.SetStateAction<IPlayerSelect>>;
  setPlayers: (value: React.SetStateAction<IPlayer[]>) => void;
}
export default function Player({
  players,
  player,
  letUserSelect,
  setLetUserSelect,
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
        if (typeof index === "undefined" || !letUserSelect.letSelect) return;
        newArray[index] = player;
        setPlayers(newArray);
        setLetUserSelect({ letSelect: false, index: undefined });
      }}
      key={player.name}
      className="flex justify-between gap-3 items-center rounded-md
       bg-slate-800 flex-shrink p-2"
    >
      <img
        src={player.img}
        alt={player.name}
        className="shrink-0 object-contain"
      />
      <div className="flex flex-col flex-1">
        {" "}
        <span className="flex justify-between text-sm">
          <h4 className="flex-shrink">
            <span className="text-xs text-slate-500">Pos: </span>
            {player.pos}
          </h4>
          <h4 className="flex-shrink">
            <span className="text-xs text-slate-500">Núm: </span>
            {player.num}
          </h4>
        </span>
        <h3 className="font-bold text-lg">{player.name}</h3>
      </div>
    </div>
  );
}
