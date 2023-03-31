import { useEffect, useState } from "react";
import { Club, IPlayer, IPlayerSelect } from "../../types/typing";
import Player from "./Players";
import { BiHide, BiShow } from "react-icons/bi";
interface Props {
  club: string;
  clubs: Club;
  letUserSelect: IPlayerSelect;
  setLetUserSelect: React.Dispatch<React.SetStateAction<IPlayerSelect>>;
  players: IPlayer[];
  setPlayers: React.Dispatch<React.SetStateAction<IPlayer[]>>;
  search: string;
  filterPosition: string;
  setFilterPosition: React.Dispatch<React.SetStateAction<string>>;
}
export function PlayerSelect({
  club,
  clubs,
  letUserSelect,
  setLetUserSelect,
  players,
  setPlayers,
  search,
  filterPosition,
  setFilterPosition,
}: Props) {
  const defaultSet = clubs[club];
  const positionNumber = letUserSelect.index;
  const [playersToShow, setPlayersToShow] = useState<IPlayer[]>(defaultSet);
  const [recommended, setRecommended] = useState<IPlayer[]>();
  const [showGrid, setShowGrid] = useState({ recommended: true, rest: false });
  //TODO check why 0 + 1 is returning 0
  const goalkeepers = clubs[club].filter((player) => player.pos === "G");
  const defenders = clubs[club].filter((player) => player.pos === "D");
  const leftSideBacks = clubs[club].filter((players) => players.pos === "LE");
  const rightSideBacks = clubs[club].filter((players) => players.pos === "LD");
  const defMidfielders = clubs[club].filter((players) => players.pos === "MD");
  const midfielders = clubs[club].filter((players) => players.pos === "MA");
  const wingers = clubs[club].filter((players) => players.pos === "P");
  const attackers = clubs[club].filter((players) => players.pos === "A");

  const filteredByName = clubs[club].filter(
    (players) =>
      search &&
      players.name
        ?.toLocaleLowerCase()
        .normalize("NFD")
        .replace(/[^a-zA-Z\s]/g, "")
        .includes(
          search
            ?.toLocaleLowerCase()
            .normalize("NFD")
            .replace(/[^a-zA-Z\s]/g, "")
        )
  );
  useEffect(() => {
    switch (positionNumber) {
      case 0:
        setRecommended(goalkeepers);
        break;
      case 1:
        setRecommended(rightSideBacks);
        break;
      case 2:
        setRecommended(defenders);
        break;
      case 3:
        setRecommended(defenders);
        break;
      case 4:
        setRecommended(defMidfielders);
        break;
      case 5:
        setRecommended(leftSideBacks);
        break;
      case 6:
        setRecommended(midfielders);
        break;
      case 7:
        setRecommended(defMidfielders);
        break;
      case 8:
        setRecommended([...attackers, ...wingers]);
        break;
      case 9:
        setRecommended(midfielders);
        break;
      case 10:
        setRecommended([...attackers, ...wingers]);
        break;
      default:
        setRecommended(undefined);
        break;
    }
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
    switch (filterPosition) {
      case "G":
        setPlayersToShow(goalkeepers);
        break;
      case "D" || "Z":
        setPlayersToShow(defenders);
        break;
      case "LE":
        setPlayersToShow(leftSideBacks);
        break;
      case "LD":
        setPlayersToShow(rightSideBacks);
        break;
      case "MD":
        setPlayersToShow(defMidfielders);
        break;
      case "MA":
        setPlayersToShow(midfielders);
        break;
      case "P":
        setPlayersToShow(wingers);
        break;
      case "A":
        setPlayersToShow(attackers);
        break;
      default:
        setPlayersToShow(defaultSet);
        break;
    }
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
            className="grid grid-cols-2
        place-content-center
         min-[1250px]:grid-cols-3 gap-1 cursor-pointer pb-6 ml-1 mr-5"
          >
            {recommended &&
              recommended.map((player) => {
                return (
                  <Player
                    key={player.name}
                    players={players}
                    player={player}
                    letUserSelect={letUserSelect}
                    setLetUserSelect={setLetUserSelect}
                    setPlayers={setPlayers}
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
            {(() => {
              switch (filterPosition) {
                case "all":
                  return "Todos";
                case "G":
                  return "Goleiros";
                case "D" || "Z":
                  return "Defensores";
                case "LD":
                  return "Laterais Direitos";
                case "LE":
                  return "Laterais Esquerdos";
                case "MD":
                  return "Meios Defensores";
                case "MA":
                  return "Meios Atacantes";
                case "P":
                  return "Pontas";
                case "A":
                  return "Atacantes";
                default:
                  return "Todos";
              }
            })()}
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
            className="grid grid-cols-2
        place-content-center
         min-[1250px]:grid-cols-3 gap-3 cursor-pointer p-2"
          >
            {playersToShow.map((player) => {
              return (
                <Player
                  key={player.name}
                  players={players}
                  player={player}
                  letUserSelect={letUserSelect}
                  setLetUserSelect={setLetUserSelect}
                  setPlayers={setPlayers}
                />
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
