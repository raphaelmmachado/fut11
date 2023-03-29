import { useEffect, useState } from "react";
import { Club, IPlayer, IPlayerSelect } from "../../types/typing";
import Player from "./Players";

interface Props {
  club: string;
  clubs: Club;
  letUserSelect: IPlayerSelect;
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
  players,
  setPlayers,
  search,
  filterPosition,
  setFilterPosition,
}: Props) {
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

  const [playersToShow, setPlayersToShow] = useState<IPlayer[]>(clubs[club]);
  const defaultSet = clubs[club];

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
      {/* players */}
      <div
        className="min-w-full max-h-[442px] overflow-auto my-3 grid grid-flow-row gap-3"
        id="select-players"
      >
        <div className="grid grid-cols-3 gap-3 justify-between cursor-pointer relative">
          {playersToShow.map((player) => {
            return (
              <Player
                key={player.name}
                players={players}
                player={player}
                letUserSelect={letUserSelect}
                setPlayers={setPlayers}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
