import { IPlayer, IPlayerSelect } from "../../../types/typing";
import { formatPosition } from "./formatPositions";
interface Props {
  players: IPlayer[];
  player: IPlayer;
  letUserSelect: IPlayerSelect;
  setPlayers: (value: React.SetStateAction<IPlayer[]>) => void;
  fieldRef: React.RefObject<HTMLDivElement>;
}
export default function Player({
  players,
  player,
  letUserSelect,
  setPlayers,
  fieldRef,
}: Props) {
  const newArray = [...players];

  return (
    <li
      onClick={() => {
        if (newArray.some((item) => item.name === player.name)) return;
        const { index } = letUserSelect;
        if (typeof index === "undefined" || !letUserSelect.letSelect) return;
        newArray[index] = player;
        setPlayers(newArray);
        fieldRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }}
      key={player.name}
      className={`flex justify-between gap-3 items-center rounded-md
       bg-slate-800 flex-shrink p-2 cursor-pointer shadow-lg
        hover:bg-slate-600 transition-colors`}
    >
      <img
        src={player.img}
        alt={player.name}
        className="shrink-0 object-contain"
      />
      <div className="flex flex-col-reverse flex-1">
        {" "}
        <h3 className="font-bold text-lg">{player.name}</h3>
        <span className="flex justify-between text-sm">
          {/* TODO JUNTAR POS E NUM EM UM SÓ*/}
          <h4 className="flex-shrink text-xs">
            <span className=" font-medium text-slate-500">{player.num}</span>{" "}
            {player.pos && (
              <span className="italic  text-slate-400">
                {formatPosition(player.pos)}
              </span>
            )}
          </h4>
        </span>
      </div>
    </li>
  );
}
