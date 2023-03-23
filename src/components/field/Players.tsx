import { Player } from "./Player";

import { Position } from "../../types/typing";
interface Props {
  pos: Position;
}
//TODO por questoes de teste, nao use pos vindo de um state, use variavel fonte do objeto das formacoes
function Players({ pos }: Props) {
  return (
    <>
      <Player pos={pos.first} id="1" />
      <Player pos={pos.second} id="2" />
      <Player pos={pos.third} id="3" />
      <Player pos={pos.fourth} id="4" />
      <Player pos={pos.fifth} id="5" />
      <Player pos={pos.sixth} id="6" />
      <Player pos={pos.seventh} id="7" />
      <Player pos={pos.eighth} id="8" />
      <Player pos={pos.ninth} id="9" />
      <Player pos={pos.tenth} id="10" />
      <Player pos={pos.eleventh} id="11" />
    </>
  );
}
export { Players };
