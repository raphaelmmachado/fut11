import "./index.css";
import {
  useState,
  useRef,
  lazy,
  Suspense,
  useEffect,
  ClassAttributes,
} from "react";
//components
import { Field } from "./components/field/Field";
import Squares from "./components/field/Squares";
import { Clubs } from "./components/selectors/Clubs";
import { Formations } from "./components/selectors/formations/Formations";

//utils
import { fourFourTwo } from "./constants/positions";
import { squads } from "./constants/clubs";
import filter from "./utils/filterPlayerByName";
import recommendPlayers from "./utils/recommendPlayers";
import showPlayers from "./utils/showPlayers";
import { formatPositions } from "./utils/formatPositions";
//icons
//types
import { IPlayer, IPlayerSelect, Position } from "./types/typing";
import FilterPosition from "./components/selectors/FilterPosition";
import SearchPlayer from "./components/selectors/SearchPlayer";
import SwitchNum from "./components/buttons/SwitchNum";
import PlayerGrid from "./components/selectors/player_select/grid/PlayerGrid";

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
  const [showNumbers, setShowNumbers] = useState(false);
  const defaultSet = squads[club];
  const [playersToShow, setPlayersToShow] = useState<IPlayer[]>(defaultSet);
  const [recommended, setRecommended] = useState<IPlayer[]>();
  const fieldRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (search) return;
    showPlayers(filterPosition, squads[club], defaultSet, setPlayersToShow);
  }, [filterPosition, club]);
  const filteredByName = filter(squads[club], search);

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

  const allSqrsFilled = squares.every(
    (square) => typeof square.name === "string"
  );
  const ul_style =
    "grid grid-cols-1 min-[470px]:grid-cols-2 md:grid-cols-1 min-[970px]:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-1 place-content-center";

  return (
    <main
      id="app"
      className="min-h-screen flex flex-col md:flex-row gap-6
        w-screen sm:w-full bg-slate-900 relative text-slate-300 sm:p-3"
    >
      <div id="field" className="flex flex-col items-center gap-2">
        <section
          ref={fieldRef}
          id="grass"
          className="bg-green-500  md:min-w-[425px] w-full max-w-[425px] h-[545px] md:h-[580px] p-3
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

        <div
          id="selectors"
          className="flex items-center justify-between w-full max-w-[425px] p-2"
        >
          <Clubs
            club={club}
            setClub={setClub}
            resetSquares={() => {
              setLetUserSelect({ index: undefined, letSelect: false });
              setSquares(playersInitialValue);
            }}
          />
          <Formations setFormation={setFormation} />
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
      <div className="flex flex-col w-full">
        <PlayerGrid
          label="Jogadores Recomendados"
          recommendedGrid={true}
          componentStyle={ul_style}
          letUserSelect={letUserSelect}
          setSquares={setSquares}
          squads={squads}
          squares={squares}
          recommendedPlayers={recommended}
          fieldRef={fieldRef}
          gridRef={gridRef}
        />
        <div className="divider"></div>
        <aside className="flex min-[425px]:flex-col md:flex-row w-full my-1 p-1 justify-between gap-5">
          <div className="flex flex-col min-[425px]:flex-row md:flex-col min-[970px]:flex-row gap-3 md:gap-5">
            <SearchPlayer setSearch={setSearch} />
            <FilterPosition setFilterPosition={setFilterPosition} />
          </div>
          <TipsModal />{" "}
        </aside>
        <PlayerGrid
          label={formatPositions(filterPosition)}
          recommendedGrid={false}
          componentStyle={ul_style}
          letUserSelect={letUserSelect}
          setSquares={setSquares}
          squads={squads}
          squares={squares}
          restOfPlayers={playersToShow}
          fieldRef={fieldRef}
        />
      </div>
    </main>
  );
}

export default App;
