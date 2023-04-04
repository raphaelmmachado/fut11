import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useEffect, useState } from "react";
import { Club, IPlayer, IPlayerSelect } from "../../../types/typing";
import Player from "./Players";
import { BiHide, BiShow } from "react-icons/bi";
import { BiGridHorizontal } from "react-icons/bi";
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
  gridRef: React.RefObject<HTMLDivElement>;
  fieldRef: React.RefObject<HTMLDivElement>;
}
export function PlayerSelect({
  club,
  clubs,
  letUserSelect,
  squares,
  setSquares,
  search,
  filterPosition,
  setFilterPosition,
  gridRef,
  fieldRef,
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
        ref={gridRef}
        className="overflow-auto flex flex-col gap-3 bg-slate-900 py-2 border-b border-b-slate-800 w-full"
        id="select-players"
      >
        {" "}
        <span className="flex gap-4 items-center">
          <BiGridHorizontal size={32} className="text-slate-700" />
          <h2 className="text-sm  text-slate-500">Recomendados</h2>
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
          <ul
            ref={animationParent}
            className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2
         xl:grid-cols-3 gap-1 place-content-center"
          >
            {recommended &&
              recommended.map((player) => {
                if (!squares.some((square) => player.name === square.name))
                  return (
                    <Player
                      key={player.name}
                      players={squares}
                      player={player}
                      letUserSelect={letUserSelect}
                      setPlayers={setSquares}
                      fieldRef={fieldRef}
                    />
                  );
              })}
          </ul>
        )}{" "}
      </div>

      {/* players */}

      <div
        className=" flex flex-col gap-3 bg-slate-900 py-2 border-b border-b-slate-800 w-full"
        id="select-players"
      >
        <span className="flex gap-4 items-center">
          <BiGridHorizontal size={32} className="text-slate-700" />
          <h2 className="text-sm text-slate-500">
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
        <div className=" max-h-64 lg:max-h-max overflow-auto">
          {showGrid.rest && (
            <ul
              ref={animationParent}
              className="grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-2
              xl:grid-cols-3 gap-1 place-content-center"
            >
              {playersToShow.map((player) => {
                if (!squares.some((square) => player === square))
                  return (
                    <Player
                      fieldRef={fieldRef}
                      key={player.name}
                      players={squares}
                      player={player}
                      letUserSelect={letUserSelect}
                      setPlayers={setSquares}
                    />
                  );
              })}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}
