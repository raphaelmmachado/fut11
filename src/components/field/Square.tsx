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
      className={`absolute  flex items-center
       justify-center cursor-pointer text-center
       rounded-md ${
         player.img ? "bg-transparent shadow-none" : "bg-white shadow-lg"
       }
      ${isActive ? "ring ring-blue-600 z-20" : "ring-0 z-10"}`}
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
        justify-center relative "
        >
          <img src={player.img} alt={player.name} />
          <h3
            className=" text-slate-700 font-medium text-center  
          bg-opacity-5"
          >
            {player.short_name}
          </h3>
        </div>
      ) : (
        <div className="flex items-center justify-center min-h-[4rem] min-w-[3.5rem]">
          <span className="font-bold text-lg text-blue-500">{index + 1}</span>
        </div>
      )}
    </div>
  );
}
