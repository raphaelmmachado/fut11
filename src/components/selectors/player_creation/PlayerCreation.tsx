import { IPlayer, Positions } from "../../../types/typing";
import CountriesInput from "./inputs/CountriesInput";
import React, { FormEvent, useRef, useState } from "react";
import PositionInput from "./inputs/PositionInput";
import TextInput from "./inputs/TextInput";
import FileInput from "./inputs/FileInput";

import { getGenericPhoto } from "../../../utils/getPlayerPhoto";
interface PlayerCreationProps {
  setPlayersState: React.Dispatch<React.SetStateAction<IPlayer[]>>;
}
function PlayerCreation({ setPlayersState }: PlayerCreationProps) {
  const NameRef = useRef<HTMLInputElement>(null);
  const ShortNameRef = useRef<HTMLInputElement>(null);
  const NumRef = useRef<HTMLInputElement>(null);
  const ImageRef = useRef<HTMLInputElement>(null);
  const PositionRef = useRef<HTMLSelectElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const player: IPlayer = {
      name: NameRef.current?.value || "",
      short_name: ShortNameRef.current?.value || "",
      num: parseInt(NumRef.current?.value || "0", 10),
      pos: (PositionRef.current?.value as Positions) || "MA",
      img: ImageRef.current?.value || getGenericPhoto(),
    };

    // Verificar se todos os campos obrigatórios estão preenchidos
    if (
      player.name &&
      player.short_name &&
      Number(player.num) > 0 &&
      player.pos &&
      player.img
    ) {
      setPlayersState((prevPlayers) => [...prevPlayers, player]);
    } else {
      alert("Por favor, preencha todos os campos obrigatórios.");
    }

    // squads["flamengo"].push(player);
  };

  return (
    <section className="bg-slate-900 p-2">
      <fieldset className="fieldset bg-slate-900  border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">Criar Jogador</legend>
        <form action="" onSubmit={handleSubmit}>
          <TextInput
            label="Nome"
            name="name"
            placeholder="Arthur Antunes Coimbra"
            ref={NameRef}
          />
          <TextInput
            label="Nome Curto"
            name="short_name"
            placeholder="Zico"
            ref={ShortNameRef}
          />

          <label className="label">Numero</label>
          <input
            name="num"
            type="number"
            className="input"
            placeholder="10"
            min={1}
            max={99}
            ref={NumRef}
          />
          {/* <CountriesInput ref={CountriesRef} /> Eu não sei se vou usar bandeiras */}

          <label className="label">Posicao</label>
          <PositionInput ref={PositionRef} />
          <TextInput label="URL da Imagem" name="img" ref={ImageRef} />
          {/* 
        <FileInput
          handleFileChange={handleFileChange}
          imagePreviewUrl={imagePreviewUrl}
        /> */}
          <label className="label">Enviar</label>
          <button type="submit" className="btn">
            {" "}
            Confirmar
          </button>
        </form>
      </fieldset>
    </section>
  );
}
export default PlayerCreation;
