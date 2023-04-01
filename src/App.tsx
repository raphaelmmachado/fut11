import "./index.css";
import { useState, useRef } from "react";
//components
import { Field } from "./components/field/Field";
import Squares from "./components/field/Squares";
import { Clubs } from "./components/selectors/Clubs";
import { Formations } from "./components/selectors/formations/Formations";
import { PlayerSelect } from "./components/selectors/player_select/PlayerSelect";

//utils
import { fourFourTwo } from "./constants/positions";
import { clubs } from "./constants/clubs";
//icons
import { AiOutlineClose } from "react-icons/ai";
//types
import { IPlayer, IPlayerSelect, Position } from "./types/typing";
import FilterPosition from "./components/selectors/FilterPosition";
import SearchPlayer from "./components/selectors/SearchPlayer";
import takeScreenshot from "./utils/takeScreenshot";

const playersInitialValue: IPlayer[] = Array(11).fill({
  name: null,
  num: null,
  img: null,
  pos: null,
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
  const fieldRef = useRef<HTMLDivElement>(null);

  return (
    <main
      id="app"
      className="min-h-screen flex flex-col lg:flex-row gap-10
        w-screen sm:w-full bg-slate-900 relative sm:p-4"
    >
      <div className="flex flex-col gap-2">
        <section className="flex items-center justify-around flex-wrap bg-slate-900">
          <Clubs club={club} setClub={setClub} />
          <Formations setFormation={setFormation} />
        </section>
        <section
          ref={fieldRef}
          id="grass"
          className="bg-green-500 min-w-[320px] min-[375px]:min-w-[350px] min-[425px]:min-w-[400px]  h-[525px] p-3
         rounded-md relative flex-shrink-0 self-center"
        >
          {" "}
          <Squares
            pos={formation}
            squares={squares}
            letUserSelect={letUserSelect}
            setLetUserSelect={setLetUserSelect}
            setSquares={setSquares}
          />
          <Field />
        </section>

        <button
          onClick={() => takeScreenshot(fieldRef)}
          className="bg-blue-600 font-bold  active:bg-blue-900 shadow-md w-full rounded-lg py-2 px-4"
        >
          Salvar
        </button>
      </div>

      <section
        className={`w-full flex flex-col gap-10 justify-start sm:flex-grow absolute inset-0 sm:static bg-slate-900 ${
          letUserSelect.letSelect ? "z-30 visible" : "z-0 invisible sm:visible"
        }`}
        id="controls"
      >
        {" "}
        <div className="flex flex-col fixed w-full sm:static">
          <div
            className="w-full bg-slate-900
           flex items-center justify-end sm:hidden"
          >
            <button
              className="justify-end"
              onClick={() =>
                setLetUserSelect({ letSelect: false, index: undefined })
              }
            >
              <AiOutlineClose
                className="text-slate-600 hover:text-slate-100"
                size={30}
              />
            </button>
          </div>
          <div
            className="flex items-center justify-around 
        flex-wrap bg-slate-900  shadow-sm"
          >
            <SearchPlayer setSearch={setSearch} />
            <FilterPosition setFilterPosition={setFilterPosition} />
          </div>
        </div>
        <PlayerSelect
          clubs={clubs}
          club={club}
          letUserSelect={letUserSelect}
          squares={squares}
          setSquares={setSquares}
          search={search}
          filterPosition={filterPosition}
          setFilterPosition={setFilterPosition}
          setLetUserSelect={setLetUserSelect}
        />
      </section>
    </main>
  );
}

export default App;
