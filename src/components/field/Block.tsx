import { IPlayer, IPlayerSelect } from "../../types/typing";
import { IoPersonAddSharp } from "react-icons/io5";
import { useEffect } from "react";
interface Props {
  pos: pos;
  index: number;
  letUserSelect: IPlayerSelect;
  setLetUserSelect: React.Dispatch<React.SetStateAction<IPlayerSelect>>;
  players: IPlayer[];
  setPlayers: React.Dispatch<React.SetStateAction<IPlayer[]>>;
  checkIndex: (index: number) => void;
  isActive: boolean;
}
type pos = { top: string; left: string } | { bottom: string; right: string };

export default function Block({
  pos,
  index,
  setLetUserSelect,
  players,
  setPlayers,
  checkIndex,
  isActive,
}: Props) {
  const player = players[index];
  const resetedPlayer = {
    name: undefined,
    img: undefined,
    pos: undefined,
    num: undefined,
  };
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const allBlocks = document.querySelectorAll("[data-block]");
      if (
        allBlocks &&
        !Array.from(allBlocks).some((block) => block.contains(e.target as Node))
      ) {
        checkIndex(-1);
        setLetUserSelect({
          index: undefined,
          letSelect: false,
        });
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);
  return (
    <div
      data-block
      className={`absolute min-h-[4rem] min-w-[3.5rem] flex items-center
       justify-center cursor-pointer
       rounded-md ${
         player.img ? "bg-transparent shadow-none" : "bg-white shadow-lg"
       }
      ${isActive ? "ring ring-blue-600 z-40" : "ring-0 z-20"}`}
      style={pos}
      onClick={() => {
        checkIndex(index);
        setLetUserSelect({
          index: index,
          letSelect: true,
        });
      }}
      onDoubleClick={() => {
        const newArray = [...players];
        newArray[index] = resetedPlayer;
        setPlayers(newArray);
      }}
    >
      {player.img && player.name && player.num ? (
        <div
          className="flex flex-col items-center 
        justify-center relative hover:scale-105 transition"
        >
          <img src={player.img} alt={player.name} />
          <h3
            className=" text-slate-700 font-medium
          bg-opacity-5"
          >
            {player.short_name}
          </h3>
        </div>
      ) : (
        <div className="flex items-center justify-center h-full w-full">
          <IoPersonAddSharp className="text-blue-600" size={20} />
        </div>
      )}
    </div>
  );
}
