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
      className="min-h-screen flex gap-10 w-full p-6 bg-slate-900 "
    >
      <section
        id="grass"
        className="bg-green-500 w-[380px] h-[550px] p-3
         rounded-md relative flex-shrink-0"
      >
        <Blocks
          pos={formation}
          players={players}
          letUserSelect={letUserSelect}
          setLetUserSelect={setLetUserSelect}
          setPlayers={setPlayers}
        />
        <Field />
      </section>

      <section className="flex-grow">
        <div className="flex items-center justify-between" id="controls">
          <Clubs club={club} setClub={setClub} />
          <Formations setFormation={setFormation} />
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
