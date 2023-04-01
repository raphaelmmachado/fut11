import Square from "./Square";
import { useState } from "react";
import { Position, IPlayer, IPlayerSelect } from "../../types/typing";
interface Props {
  pos: Position;
  letUserSelect: IPlayerSelect;
  setLetUserSelect: React.Dispatch<React.SetStateAction<IPlayerSelect>>;
  squares: IPlayer[];
  setSquares: React.Dispatch<React.SetStateAction<IPlayer[]>>;
}

export default function Squares({
  pos,
  squares,
  letUserSelect,
  setLetUserSelect,
  setSquares,
}: Props) {
  const [isActiveIndex, setIsActiveIndex] = useState<null | number>(null);
  return (
    <>
      {squares.map((player, i) => {
        return (
          <Square
            key={i}
            pos={pos[i]}
            squares={squares}
            index={i}
            letUserSelect={letUserSelect}
            setLetUserSelect={setLetUserSelect}
            isActive={i === isActiveIndex && letUserSelect.letSelect === true}
            checkIndex={(index: number) =>
              index === i ? setIsActiveIndex(index) : setIsActiveIndex(null)
            }
            setSquares={setSquares}
          />
        );
      })}
    </>
  );
}
