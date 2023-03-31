import Block from "./Block";
import { useState } from "react";
import { Position, IPlayer, IPlayerSelect } from "../../types/typing";
interface Props {
  pos: Position;
  letUserSelect: IPlayerSelect;
  setLetUserSelect: React.Dispatch<React.SetStateAction<IPlayerSelect>>;
  players: IPlayer[];
  setPlayers: React.Dispatch<React.SetStateAction<IPlayer[]>>;
}

export default function Blocks({
  pos,
  players,
  letUserSelect,
  setLetUserSelect,
  setPlayers,
}: Props) {
  const [isActiveIndex, setIsActiveIndex] = useState<null | number>(null);

  return (
    <>
      {players.map((player, i) => {
        return (
          <Block
            key={i}
            pos={pos[i]}
            players={players}
            index={i}
            letUserSelect={letUserSelect}
            setLetUserSelect={setLetUserSelect}
            isActive={i === isActiveIndex}
            checkIndex={(index: number) =>
              index === i ? setIsActiveIndex(index) : setIsActiveIndex(null)
            }
            setPlayers={setPlayers}
          />
        );
      })}
    </>
  );
}
