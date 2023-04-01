import { IPlayer, IPlayerSelect } from "../../types/typing";

interface Props {
  pos: pos;
  index: number;
  letUserSelect: IPlayerSelect;
  setLetUserSelect: React.Dispatch<React.SetStateAction<IPlayerSelect>>;
  squares: IPlayer[];
  setSquares: React.Dispatch<React.SetStateAction<IPlayer[]>>;
  checkIndex: (index: number) => void;
  isActive: boolean;
}
type pos = { top: string; left: string } | { bottom: string; right: string };

export default function Square({
  pos,
  index,
  setLetUserSelect,
  squares,
  setSquares,
  checkIndex,
  isActive,
}: Props) {
  const player = squares[index];

  const resetedPlayer = {
    name: undefined,
    img: undefined,
    pos: undefined,
    num: undefined,
  };
  //TODO borda azul sumir após selecionar jogador
  return (
    <div
      data-block
      className={`absolute cursor-pointer text-center rounded-md z-10 bg-transparent shadow-none
      ${
        isActive
          ? "border-2 border-blue-600"
          : "border-0 border-transparent text-red"
      }
      `}
      style={pos}
      onClick={() => {
        checkIndex(index);
        setLetUserSelect({
          index: index,
          letSelect: true,
        });
      }}
      onDoubleClick={() => {
        const newArray = [...squares];
        newArray[index] = resetedPlayer;
        setSquares(newArray);
      }}
    >
      {player.img && player.name && player.num ? (
        <div
          className="flex flex-col items-center 
        justify-center relative min-w-max"
        >
          <img src={player.img} alt={player.name} />
          <h3 className=" text-slate-700 font-bold text-center bg-green-200 shadow-md rounded-md px-1">
            {player.short_name}
          </h3>
        </div>
      ) : (
        <div className="flex items-center justify-center min-h-[4rem] min-w-[3.5rem] bg-white shadow-lg rounded-md">
          <span className="font-bold text-lg text-blue-600">{index + 1}</span>
        </div>
      )}
    </div>
  );
}
