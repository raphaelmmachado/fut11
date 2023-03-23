import { Field } from "./components/field/Field";
import { Players } from "./components/field/Players";
import { Clubs } from "./components/selectors/Clubs";
import { Formations } from "./components/selectors/Formations";
import { useState } from "react";
import { Position } from "./types/typing";
import { fourFourTwo } from "./constants/positions";
function App() {
  const [formation, setFormation] = useState<Position>(fourFourTwo);
  return (
    <main
      id="app"
      className="min-h-screen grid place-content-center place-items-center w-full"
    >
      <header>
        <h1 className="text-xl">Monte e compartilhe a formação do seu time.</h1>
      </header>
      <section id="selectors" className="flex gap-3">
        <Formations setFormation={setFormation} />
        <Clubs />
      </section>
      <section
        id="grass"
        className="bg-green-500 w-[700px] h-[350px] p-2 rounded-md relative"
      >
        <Players pos={formation} />
        <Field />
      </section>
    </main>
  );
}

export default App;
