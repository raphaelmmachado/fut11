import Square from "./Square";
import { useEffect, useState } from "react";
import { Position, IPlayer, IPlayerSelect } from "../../types/typing";
interface Props {
  pos: Position;
  letUserSelect: IPlayerSelect;
  setLetUserSelect: React.Dispatch<React.SetStateAction<IPlayerSelect>>;
  squares: IPlayer[];
  setSquares: React.Dispatch<React.SetStateAction<IPlayer[]>>;
  gridRef: React.RefObject<HTMLDivElement>;
  showNumbers: boolean;
}

export default function Squares({
  pos,
  squares,
  letUserSelect,
  setLetUserSelect,
  setSquares,
  gridRef,
  showNumbers,
}: Props) {
  const [isActiveIndex, setIsActiveIndex] = useState<null | number>(null);

  useEffect(() => {
    if (squares.every((square) => square.name !== null)) {
      setLetUserSelect({ index: undefined, letSelect: false });
    }
  }, [squares]);

  return (
    <ul>
      {squares.map((player, i) => {
        return (
          <Square
            gridRef={gridRef}
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
            showNumbers={showNumbers}
          />
        );
      })}
    </ul>
  );
}
