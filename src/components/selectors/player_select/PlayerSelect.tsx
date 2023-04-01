import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useEffect, useState } from "react";
import { Club, IPlayer, IPlayerSelect } from "../../../types/typing";
import Player from "./Players";
import { BiHide, BiShow } from "react-icons/bi";
import filter from "./filterPlayerByName";
import recommendPlayers from "./recommendPlayers";
import showPlayers from "./showPlayers";
import { formatPositions } from "./formatPositions";
interface Props {
  club: string;
  clubs: Club;
  letUserSelect: IPlayerSelect;
  setLetUserSelect: React.Dispatch<React.SetStateAction<IPlayerSelect>>;
  squares: IPlayer[];
  setSquares: React.Dispatch<React.SetStateAction<IPlayer[]>>;
  search: string;
  filterPosition: string;
  setFilterPosition: React.Dispatch<React.SetStateAction<string>>;
}
export function PlayerSelect({
  club,
  clubs,
  letUserSelect,
  setLetUserSelect,
  squares,
  setSquares,
  search,
  filterPosition,
  setFilterPosition,
}: Props) {
  const defaultSet = clubs[club];
  const [playersToShow, setPlayersToShow] = useState<IPlayer[]>(defaultSet);
  const [recommended, setRecommended] = useState<IPlayer[]>();
  const [showGrid, setShowGrid] = useState({ recommended: true, rest: false });

  const filteredByName = filter(clubs[club], search);
  const [animationParent] = useAutoAnimate();
  useEffect(() => {
    recommendPlayers(clubs[club], letUserSelect.index, setRecommended);
  }, [letUserSelect]);

  useEffect(() => {
    if (search) {
      setPlayersToShow(filteredByName);
      setFilterPosition("all");
    } else {
      setPlayersToShow(defaultSet);
    }
  }, [search]);

  useEffect(() => {
    if (search) return;
    showPlayers(filterPosition, clubs[club], defaultSet, setPlayersToShow);
  }, [filterPosition]);
  return (
    <>
      {/* recommended */}
      <div
        className="overflow-auto mt-32 sm:mt-0 sm:my-3
         flex flex-col gap-3 bg-slate-900 "
        id="select-players"
      >
        {" "}
        <span className="flex justify-between items-center max-w-[10rem]">
          <h2 className="text-sm ml-2 text-slate-500">Recomendados</h2>
          {showGrid.recommended ? (
            <button
              onClick={() =>
                setShowGrid((prev) => {
                  return {
                    ...prev,
                    recommended: !prev.recommended,
                  };
                })
              }
            >
              <BiShow size={20} className="text-slate-500" />
            </button>
          ) : (
            <button
              onClick={() =>
                setShowGrid((prev) => {
                  return {
                    ...prev,
                    recommended: !prev.recommended,
                  };
                })
              }
            >
              <BiHide size={20} className="text-slate-500" />
            </button>
          )}
        </span>
        {showGrid.recommended && (
          <div
            ref={animationParent}
            className="grid grid-cols-2 sm:grid-cols-3
        place-content-center
         min-[1250px]:grid-cols-4 gap-1 pb-6 ml-1 mr-5"
          >
            {recommended &&
              recommended.map((player) => {
                if (!squares.some((square) => player === square))
                  return (
                    <Player
                      key={player.name}
                      players={squares}
                      player={player}
                      letUserSelect={letUserSelect}
                      setLetUserSelect={setLetUserSelect}
                      setPlayers={setSquares}
                    />
                  );
              })}
          </div>
        )}{" "}
      </div>

      {/* players */}

      <div
        className="overflow-auto sm:mt-0 sm:my-3
         flex flex-col gap-3 bg-slate-900 "
        id="select-players"
      >
        <span className="flex justify-between items-center max-w-[10rem]">
          {" "}
          <h2 className="text-sm ml-2 text-slate-500">
            {" "}
            {formatPositions(filterPosition)}
          </h2>
          {showGrid.rest ? (
            <button
              onClick={() =>
                setShowGrid((prev) => {
                  return {
                    ...prev,
                    rest: !prev.rest,
                  };
                })
              }
            >
              <BiShow size={20} className="text-slate-500" />
            </button>
          ) : (
            <button
              onClick={() =>
                setShowGrid((prev) => {
                  return {
                    ...prev,
                    rest: !prev.rest,
                  };
                })
              }
            >
              <BiHide size={20} className="text-slate-500" />
            </button>
          )}
        </span>

        {showGrid.rest && (
          <div
            ref={animationParent}
            className="grid grid-cols-2
        place-content-center
         min-[1250px]:grid-cols-3 gap-3 p-2"
          >
            {playersToShow.map((player) => {
              if (!squares.some((square) => player === square))
                return (
                  <Player
                    key={player.name}
                    players={squares}
                    player={player}
                    letUserSelect={letUserSelect}
                    setLetUserSelect={setLetUserSelect}
                    setPlayers={setSquares}
                  />
                );
            })}
          </div>
        )}
      </div>
    </>
  );
}
