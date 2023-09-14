import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useEffect, useState } from "react";
import { IPlayer, IPlayerSelect, Squad } from "../../../types/typing";
import Player from "./Players";
import { BiHide, BiShow } from "react-icons/bi";
import { BiGridHorizontal } from "react-icons/bi";
import filter from "./filterPlayerByName";
import recommendPlayers from "./recommendPlayers";
import showPlayers from "./showPlayers";
import { formatPositions } from "./formatPositions";
interface Props {
  club: string;
  squads: Squad;
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
  squads,
  letUserSelect,
  squares,
  setSquares,
  search,
  filterPosition,
  setFilterPosition,
  gridRef,
  fieldRef,
}: Props) {
  const defaultSet = squads[club];
  const [playersToShow, setPlayersToShow] = useState<IPlayer[]>(defaultSet);
  const [recommended, setRecommended] = useState<IPlayer[]>();
  const [showGrid, setShowGrid] = useState({ recommended: true, rest: false });

  const filteredByName = filter(squads[club], search);
  const [animationParent] = useAutoAnimate();

  useEffect(() => {
    recommendPlayers(squads[club], letUserSelect.index, setRecommended);
  }, [letUserSelect, club]);

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
    showPlayers(filterPosition, squads[club], defaultSet, setPlayersToShow);
  }, [filterPosition, club]);
  return (
    <>
      {/* recommended */}
      <div
        ref={gridRef}
        className="overflow-auto flex flex-col gap-3 bg-slate-900 py-2  w-full "
        id="select-players"
      >
        {" "}
        <span
          className="flex gap-4 items-center cursor-pointer w-fit"
          onClick={() =>
            setShowGrid((prev) => {
              return {
                ...prev,
                recommended: !prev.recommended,
              };
            })
          }
        >
          <BiGridHorizontal size={32} className="text-slate-700" />
          <h2 className="text-sm  text-slate-500">Jogadores Recomendados</h2>

          <button>
            {showGrid.recommended ? (
              <BiShow size={20} className="text-slate-500" />
            ) : (
              <BiHide size={20} className="text-slate-500" />
            )}
          </button>
        </span>
        {showGrid.recommended && (
          <ul
            ref={animationParent}
            className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2
            xl:grid-cols-3 gap-1 place-content-center overflow-hidden hover:overflow-auto"
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
      <div className="divider"></div>
      {/* all */}

      <div
        className=" flex flex-col gap-3 bg-slate-900 py-2  w-full"
        id="select-players"
      >
        <span
          className="flex gap-4 items-center cursor-pointer  w-fit"
          onClick={() =>
            setShowGrid((prev) => {
              return {
                ...prev,
                rest: !prev.rest,
              };
            })
          }
        >
          <BiGridHorizontal size={32} className="text-slate-700" />
          <h2 className="text-sm text-slate-500">
            {" "}
            {formatPositions(filterPosition)}
          </h2>

          <button>
            {showGrid.rest ? (
              <BiShow size={20} className="text-slate-500" />
            ) : (
              <BiHide size={20} className="text-slate-500" />
            )}
          </button>
        </span>
        <div className="max-h-64 sm:max-h-80   overflow-auto">
          {showGrid.rest && (
            <ul
              ref={animationParent}
              className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2
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
