import { useState } from "react";
import { BiHide, BiShow } from "react-icons/bi";
import { BiGridHorizontal } from "react-icons/bi";
import { IPlayer, IPlayerSelect, Squad } from "../../../../types/typing";
import { useAutoAnimate } from "@formkit/auto-animate/react";

import Player from "../Players";

interface Props {
  gridRef?: React.RefObject<HTMLDivElement>;
  recommendedGrid: boolean;
  recommendedPlayers?: IPlayer[] | undefined;
  restOfPlayers?: IPlayer[] | undefined;
  squares: IPlayer[];
  letUserSelect: IPlayerSelect;
  setSquares: React.Dispatch<React.SetStateAction<IPlayer[]>>;
  fieldRef: React.RefObject<HTMLDivElement>;
  componentStyle: string;
  label: string;
  squads: Squad;
}
export default function PlayerGrid({
  gridRef,
  recommendedPlayers,
  restOfPlayers,
  squares,
  setSquares,
  letUserSelect,
  fieldRef,
  componentStyle,
  recommendedGrid,
  label,
}: Props) {
  const [animationParent] = useAutoAnimate();
  const [showGrid, setShowGrid] = useState({ recommended: true, rest: false });

  return (
    <>
      {" "}
      <div
        ref={gridRef}
        className="overflow-auto flex flex-col gap-3 bg-slate-900 p-2  w-full "
        id="select-players"
      >
        {" "}
        <span
          className="flex gap-4 items-center cursor-pointer w-fit"
          onClick={() => {
            if (recommendedGrid) {
              setShowGrid((prev) => {
                return {
                  ...prev,
                  recommended: !prev.recommended,
                };
              });
            }

            if (!recommendedGrid) {
              setShowGrid((prev) => {
                return {
                  ...prev,
                  rest: !prev.rest,
                };
              });
            }
          }}
        >
          <BiGridHorizontal size={32} className="text-slate-700" />
          <h2 className="text-sm  text-slate-500">{label}</h2>

          {recommendedGrid && (
            <button>
              {showGrid.recommended ? (
                <BiShow size={20} className="text-slate-500" />
              ) : (
                <BiHide size={20} className="text-slate-500" />
              )}
            </button>
          )}
          {!recommendedGrid && (
            <button>
              {showGrid.rest ? (
                <BiShow size={20} className="text-slate-500" />
              ) : (
                <BiHide size={20} className="text-slate-500" />
              )}
            </button>
          )}
        </span>
        {showGrid.recommended && recommendedGrid && (
          <ul ref={animationParent} className={componentStyle}>
            {recommendedPlayers &&
              recommendedPlayers.map((player) => {
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
        )}
        {showGrid.rest && !recommendedGrid && (
          <div className="max-h-64 sm:max-h-f   overflow-auto">
            <ul ref={animationParent} className={componentStyle}>
              {restOfPlayers &&
                restOfPlayers.map((player) => {
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
          </div>
        )}
      </div>
    </>
  );
}
