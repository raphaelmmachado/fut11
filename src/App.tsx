import "./index.css";
import { useState } from "react";
//components
import { Field } from "./components/field/Field";
import Blocks from "./components/field/Blocks";
import { Clubs } from "./components/selectors/Clubs";
import { Formations } from "./components/selectors/Formations";
import { PlayerSelect } from "./components/selectors/PlayerSelect";

//utils
import { fourFourTwo } from "./constants/positions";
import { clubs } from "./constants/clubs";
//icons
import { AiFillCloseCircle } from "react-icons/ai";
//types
import { IPlayer, IPlayerSelect, Position } from "./types/typing";
import FilterPosition from "./components/selectors/FilterPosition";
import SearchPlayer from "./components/selectors/SearchPlayer";

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
  const [players, setPlayers] = useState<IPlayer[]>(playersInitialValue);
  const [search, setSearch] = useState<string>("");
  const [filterPosition, setFilterPosition] = useState<string>("all");
  return (
    <main
      id="app"
      className="min-h-screen flex flex-col md:flex-row gap-10
       justify-center w-screen sm:w-full p-2 bg-slate-900 relative sm:p-6"
    >
      <div className="flex flex-col gap-2">
        <section className="flex items-center justify-around flex-wrap bg-slate-900">
          <Clubs club={club} setClub={setClub} />
          <Formations setFormation={setFormation} />
        </section>
        <section
          id="grass"
          className="bg-green-500 w-[380px] h-[550px] p-3
         rounded-md relative flex-shrink-0 self-center"
        >
          {" "}
          <Blocks
            pos={formation}
            players={players}
            letUserSelect={letUserSelect}
            setLetUserSelect={setLetUserSelect}
            setPlayers={setPlayers}
          />
          <Field />
        </section>
      </div>

      <section
        className={`w-full sm:flex-grow absolute sm:static bg-slate-900 ${
          letUserSelect.letSelect ? "z-30 visible" : "z-0 invisible sm:visible"
        }`}
        id="controls"
      >
        {" "}
        <div className="w-full flex items-center justify-end  sm:hidden">
          <button
            className="justify-end"
            onClick={() =>
              setLetUserSelect({ letSelect: false, index: undefined })
            }
          >
            <AiFillCloseCircle
              className="text-slate-600 hover:text-slate-100"
              size={30}
            />
          </button>
        </div>
        <div
          className="flex items-center justify-around 
        flex-wrap bg-slate-900"
        >
          <SearchPlayer setSearch={setSearch} />
          <FilterPosition setFilterPosition={setFilterPosition} />
        </div>
        <PlayerSelect
          clubs={clubs}
          club={club}
          letUserSelect={letUserSelect}
          players={players}
          setPlayers={setPlayers}
          search={search}
          filterPosition={filterPosition}
          setFilterPosition={setFilterPosition}
        />
      </section>
    </main>
  );
}

export default App;
