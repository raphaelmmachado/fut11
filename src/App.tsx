import "./index.css";
import { useState, useRef, lazy, Suspense } from "react";
//components
import { Field } from "./components/field/Field";
import Squares from "./components/field/Squares";
import { Clubs } from "./components/selectors/Clubs";
import { Formations } from "./components/selectors/formations/Formations";
import { PlayerSelect } from "./components/selectors/player_select/PlayerSelect";

//utils
import { fourFourTwo } from "./constants/positions";
import { squads } from "./constants/clubs";
//icons
//types
import { IPlayer, IPlayerSelect, Position } from "./types/typing";
import FilterPosition from "./components/selectors/FilterPosition";
import SearchPlayer from "./components/selectors/SearchPlayer";
import SwitchNum from "./components/buttons/SwitchNum";

const TipsModal = lazy(() => import("./components/buttons/TipsModal"));
const Share = lazy(() => import("./components/buttons/share/Share"));

const playersInitialValue: IPlayer[] = Array(11).fill({
  name: null,
  short_name: null,
  num: null,
  img: null,
  pos: null,
  apelido: null,
  captan: null,
});

const letUserSelectInitialValue = {
  letSelect: false,
  index: undefined,
};

function App() {
  const [formation, setFormation] = useState<Position>(fourFourTwo);
  const [club, setClub] = useState<string>("flamengo");
  const [letUserSelect, setLetUserSelect] = useState<IPlayerSelect>(
    letUserSelectInitialValue
  );
  const [squares, setSquares] = useState<IPlayer[]>(playersInitialValue);
  const [search, setSearch] = useState<string>("");
  const [filterPosition, setFilterPosition] = useState<string>("all");
  const [showNumbers, setShowNumbers] = useState(true);
  const fieldRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const allSqrsFilled = squares.every(
    (square) => typeof square.name === "string"
  );

  return (
    <main
      id="app"
      className="min-h-screen flex flex-col md:flex-row gap-6
        w-screen sm:w-full bg-slate-900 relative text-slate-300  p-2 sm:p-3"
    >
      <div id="field" className="flex flex-col items-center gap-2">
        <section
          ref={fieldRef}
          id="grass"
          className="bg-green-500 min-w-[320px] min-[375px]:min-w-[370px] min-[425px]:min-w-[400px] h-[545px] p-3
         rounded-md relative flex-shrink-0 self-center"
        >
          {" "}
          <Squares
            pos={formation}
            squares={squares}
            letUserSelect={letUserSelect}
            setLetUserSelect={setLetUserSelect}
            setSquares={setSquares}
            gridRef={gridRef}
            showNumbers={showNumbers}
          />
          <Field />
        </section>

        <div className="flex items-center  gap-2">
          <Clubs
            club={club}
            setClub={setClub}
            resetSquares={() => {
              setLetUserSelect({ index: undefined, letSelect: false });
              setSquares(playersInitialValue);
            }}
          />
          <SwitchNum
            showNumbers={showNumbers}
            setShowNumbers={setShowNumbers}
          />
          <Suspense fallback={<>...</>}>
            <Share
              ready={allSqrsFilled}
              setLetUserSelect={setLetUserSelect}
              fieldRef={fieldRef}
              club={club}
            />
          </Suspense>
        </div>
      </div>
      <div className="flex flex-col-reverse sm:flex-col lg:flex-row gap-6 sm:flex-grow">
        <section
          className={`w-full flex flex-col gap-4 justify-start  bg-slate-900`}
          id="select"
        >
          <PlayerSelect
            squads={squads}
            club={club}
            letUserSelect={letUserSelect}
            squares={squares}
            setSquares={setSquares}
            search={search}
            filterPosition={filterPosition}
            setFilterPosition={setFilterPosition}
            setLetUserSelect={setLetUserSelect}
            gridRef={gridRef}
            fieldRef={fieldRef}
          />
        </section>
        <aside className="flex flex-col gap-5">
          {" "}
          <Formations setFormation={setFormation} />
          <SearchPlayer setSearch={setSearch} />
          <FilterPosition setFilterPosition={setFilterPosition} />
          <TipsModal />{" "}
        </aside>
      </div>
    </main>
  );
}

export default App;
