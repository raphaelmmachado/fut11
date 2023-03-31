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
  // console.log(index);

  return (
    <div
      data-block
      className={`absolute min-h-[4rem] min-w-[3.5rem] flex items-center
       justify-center cursor-pointer
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
            className=" text-slate-700 font-medium text-center  
          bg-opacity-5"
          >
            {player.short_name}
          </h3>
        </div>
      ) : (
        <div className="flex items-center justify-center h-full w-full">
          <span className="font-bold text-lg text-blue-500">{index + 1}</span>
          {/* <IoPersonAddSharp className="text-blue-600" size={20} /> */}
        </div>
      )}
    </div>
  );
}
