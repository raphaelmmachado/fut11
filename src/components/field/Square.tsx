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
  gridRef: React.RefObject<HTMLDivElement>;
  showNumbers: boolean;
}
type pos = { top: string; left: string } | { bottom: string; right: string };
const resetedPlayer = {
  name: undefined,
  img: undefined,
  pos: undefined,
  num: undefined,
  captan: false,
};
export default function Square({
  pos,
  index,
  setLetUserSelect,
  squares,
  setSquares,
  checkIndex,
  isActive,
  gridRef,
  showNumbers,
}: Props) {
  const player = squares[index];

  //TODO borda azul sumir após selecionar jogador
  return (
    <li
      data-block
      className={`absolute cursor-pointer text-center rounded-md z-10
       
      ${
        isActive
          ? "border-2 border-blue-600 z-20"
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
        gridRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
      }}
      onDoubleClick={() => {
        const newArray = [...squares];
        newArray[index] = resetedPlayer;
        setSquares(newArray);
      }}
    >
      {player.img && player.name && typeof player.num === "number" ? (
        <div
          // style={{
          //   backgroundImage: `url(https://flagsapi.com/${player.country}/shiny/64.png)`,
          // }}
          className="flex flex-col items-center
        justify-center relative min-w-max p-1 bg-center bg-no-repeat"
        >
          {/* new button */}
          <img
            src={player.img}
            alt={player.name}
            className="shadow-none max-w-[60px]"
          />
          <div className="flex items-center relative">
            <h3
              className="text-slate-700 font-bold text-center
           bg-green-200 rounded-md px-1 shadow-md z-10 "
            >
              {player.short_name ?? player.name}
            </h3>{" "}
            {isActive && !player.captan && (
              <>
                <Captan
                  squares={squares}
                  index={index}
                  player={player}
                  setSquares={setSquares}
                />
              </>
            )}
            {player.captan && (
              <span
                className="w-max  bg-blue-300 -z-0 relative
           rounded-md text-blue-500 font-extrabold px-1
           before:absolute before:w-full before:-z-10 before:h-1 before:content-['']
           before:top-0 before:left-0 before:bg-blue-400
           after:absolute after:w-full after:-z-10 after:h-1 after:content-['']
           after:top-5 after:left-0  after:bg-blue-400"
              >
                C
              </span>
            )}
          </div>
          {showNumbers && (
            <span
              className="text-slate-700 font-medium text-center min-w-[2rem]
           bg-green-300 rounded-br-md rounded-bl-md px-1 shadow-md z-0"
            >
              {player.num}
            </span>
          )}
        </div>
      ) : (
        <div className="flex items-center justify-center shadow-md shadow-black/30 min-h-[4rem] min-w-[3.5rem] bg-white rounded-md">
          <span className="font-bold text-lg text-blue-600">{index + 1}</span>
        </div>
      )}
    </li>
  );
}

interface PropsB {
  player: IPlayer;
  squares: IPlayer[];
  index: number;
  setSquares: (value: React.SetStateAction<IPlayer[]>) => void;
}
const Captan = ({ player, squares, index, setSquares }: PropsB) => {
  return (
    <div
      onClick={() => {
        const newArray = [...squares].map((player) => ({
          ...player,
          captan: false,
        }));
        const newPlayer = { ...player, captan: false };
        newPlayer.captan = true;
        newArray[index] = newPlayer;
        setSquares(newArray);
      }}
      className=" w-max bg-green-300 rounded-sm text-green-600
      px-1 font-extrabold"
    >
      C
    </div>
  );
};
