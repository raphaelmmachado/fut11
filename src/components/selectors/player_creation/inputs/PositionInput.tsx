import React, { Ref, forwardRef } from "react";
interface PositionInputProps {}
const forwardedPositionInput = forwardRef(PositionInput);
export default forwardedPositionInput;

function PositionInput({}: PositionInputProps, ref: Ref<HTMLSelectElement>) {
  return (
    <>
      {" "}
      <select className="select" defaultValue={"MA"} name="pos" ref={ref}>
        <option value="" disabled>
          Posicao
        </option>
        <option value={"G"}>Goleiro</option>
        <option value={"LE"}>Lateral Esquerdo</option>
        <option value={"LD"}>Lateral Direito</option>
        <option value={"D"}>Zagueiro</option>
        <option value={"MD"}>Meio-campo Defensivo</option>
        <option value={"MC"}>Meio-campo Central</option>
        <option value={"MA"}>Meio-campo Atacante</option>
        <option value={"A"}>Atacante</option>
        <option value={"PE"}>Ponta Esquerda</option>
        <option value={"PD"}>Ponta Direita</option>
      </select>
    </>
  );
}
